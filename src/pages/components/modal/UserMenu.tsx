import {
  Flex,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoMdArrowDropdown, IoMdHome } from "react-icons/io";

const UserMenu: React.FC = () => {
  return (
    <>
      <Flex
        _hover={{ border: "1px", borderColor: "brand.300", borderRadius: "10" }}
        p="2"
        mx="20"
      >
        <Menu>
          <MenuButton>
            <Flex>
              <Icon fontSize="4xl" mr="4" as={IoMdHome} />
              <Flex align="center" width="200px" justify="space-between">
                <Text>Home</Text>
                <Icon textAlign="end" as={IoMdArrowDropdown} />
              </Flex>
            </Flex>

            <MenuList>
              <MenuGroup pl="2" title="Account">
                <MenuItem>
                <Input
                    type="text"
                    placeholder="Filter"
                    _placeholder={{fontSize:"2xl"}}
                    _focus={{outline:"none" }}

                />
                </MenuItem>
                <MenuItem>
                  <Text>React</Text>
                </MenuItem>
                <MenuItem>
                  <Text>React</Text>
                </MenuItem>
                <MenuItem>
                  <Text>React</Text>
                </MenuItem>
                <MenuItem>Text</MenuItem>
              </MenuGroup>
              <MenuDivider />
            </MenuList>
          </MenuButton>
        </Menu>
      </Flex>
    </>
  );
};

export default UserMenu;
