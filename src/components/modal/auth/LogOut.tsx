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
import { BiLogOut } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useAuthState } from "react-firebase-hooks/auth";
import { VscAccount } from "react-icons/vsc"
import {MdOutlineAccountBalanceWallet} from "react-icons/md"

type UserProp = {
    user? : User|null|undefined
}

const LogOut:React.FC<UserProp> = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <Menu >
        <MenuButton>
          <Flex align="center" width="16">
            <Text fontSize="md" textTransform="capitalize" color='brand.900'>{user && (user?.displayName || user.email?.split("@")[0]) }</Text>
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
              {/* <Button
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
              </Button> */}
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
        </MenuList>
      </Menu>
    </>
  );
};

export default LogOut;
