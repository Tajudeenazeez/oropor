import { Menu, MenuButton, Text, Flex, Icon, MenuList, MenuGroup, MenuItem, Button, MenuDivider } from '@chakra-ui/react'
import React from 'react'
import { BiLogIn } from 'react-icons/bi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '@/atoms/authModalAtom'
import { VscAccount } from 'react-icons/vsc'


const NeutralLogin:React.FC = () => {
  const setModalState = useSetRecoilState(authModalState)

  return (
    <>
    <Menu >
        <MenuButton>
          <Flex align="center" width="16">
            <Icon fontSize="xl" mr='4' as={VscAccount} />

            <Icon as={IoMdArrowDropdown} />
          </Flex>
        </MenuButton>
        <MenuList >
          <MenuGroup pl='2' title="Account" >
          <MenuItem>
          <Flex align='center' width="100%">
              <MenuItem>
                <Text fontSize='xl'>Darkmode</Text>
              </MenuItem>
            </Flex>
          </MenuItem>
            <MenuItem>
               <Button
              width='100%'
                variant="solid"
                textColor="brand.50"
                onClick={() => {
                  setModalState((prev) => ({
                      ...prev,
                      view:"login",
                    
                  }))
              }
              }
              >
                <Flex align='center' fontSize='xl' >
                    <Icon as={BiLogIn} mr='2'  />
                    <Text>Log in/Sign Up</Text>
                </Flex>
              </Button> 
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
        </MenuList>
      </Menu>
    </>
  )
}

export default NeutralLogin