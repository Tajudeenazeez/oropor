import { authModalState } from '@/atoms/authModalAtom'
import { auth } from '@/firebase/ClientApp'
import { Button, Flex, Icon, Image,Menu,MenuButton,MenuDivider,MenuGroup,MenuItem,MenuList,Text } from '@chakra-ui/react'
import { User } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BiLogIn } from 'react-icons/bi'
import { IoMdArrowDropdown, IoMdHome } from 'react-icons/io'
import { VscAccount } from 'react-icons/vsc'
import { useSetRecoilState } from 'recoil'
import AuthModal from '../modal/auth/AuthModal'
import NeutralLogin from '../modal/auth/NeutralLogin'
import UserMenu from '../modal/UserMenu'
import RightContent from './rightContent/RightContent'
import SearchInput from './SearchInput'

type NavBarProps = {
  user?: User|null
}

const Navbars:React.FC<NavBarProps> = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex align="center" justify="space-around">
       <Flex align='center'>
        <Image src='/images/oropor3.png' alt='logo' height='100px'/>
       </Flex>
        {user && <UserMenu/>}
       <SearchInput user={user}/>
       <AuthModal/>
       <RightContent user={user}/>
       {/* {!user &&   <Menu >
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
      </Menu>} */}

    </Flex>
  )
}

export default Navbars