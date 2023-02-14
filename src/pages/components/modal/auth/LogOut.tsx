import { auth } from "@/firebase/ClientApp";
import {
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import React from "react";
import { BiDownArrow, BiFace, BiLogIn, BiLogOut } from "react-icons/bi";
import { IoIosAddCircle, IoIosAddCircleOutline, IoMdArrowDropdown } from "react-icons/io";
import {FaICursor, FaPersonBooth, FaSignOutAlt} from "react-icons/fa"
import { useAuthState } from "react-firebase-hooks/auth";
import { VscAccount } from "react-icons/vsc"
import {MdOutlineAccountBalanceWallet} from "react-icons/md"

type UserProp = {
    user? : User|null
}

const LogOut:React.FC = () => {
    const [user] = useAuthState(auth)
  return (
    <>
      <Menu >
        <MenuButton>
          <Flex align="center" width="16">
            <Icon as={MdOutlineAccountBalanceWallet}/>
            <Icon as={IoMdArrowDropdown} />
          </Flex>
        </MenuButton>
        <MenuList >
          <MenuGroup pl='2' title="Account" >
          <MenuItem>
          <Flex align='center' width="100%">
              <MenuItem>
                <Icon fontSize="xl" mr='4' as={VscAccount} />
                <Text fontSize='xl'>Profile</Text>
              </MenuItem>
            </Flex>
          </MenuItem>
            <MenuItem>
              <Button
              width='100%'
                variant="solid"
                textColor="brand.50"
                onClick={() => {
                  signOut(auth);
                }}
              >
                <Flex align='center' fontSize='xl' >
                    <Icon as={BiLogOut} mr='2'  />
                    <Text>Log Out</Text>
                </Flex>
              </Button>
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
        </MenuList>
      </Menu>
    </>
  );
};

export default LogOut;
