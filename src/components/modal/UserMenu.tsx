import { Flex, Icon, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import React from "react";
import { IoMdArrowDropdown, IoMdHome } from "react-icons/io";
import Communities from "./Directory/Communities";

const UserMenu: React.FC = () => {
  return (
    <>
      <Flex
        _hover={{ border: "1px", borderColor: "brand.300", borderRadius: "10" }}
        p="2"
        mx="20"
      >
        <Menu>
          <MenuButton
            cursor="pointer"
            padding="0px 5px"
            borderRadius="md"
            ml={{ base: 0, md: 2 }}
          >
            <Flex
              align="center"
              justify="space-between"
              width={{ base: "auto", lg: "230px" }}
            >
              <Flex align="center" justify="space-around">
                <Icon fontSize="4xl" mr="4" as={IoMdHome} />
                <Flex display={{ base: "none", lg: "flex" }}>
                  <Text fontSize="2xl">Home</Text>
                </Flex>
              </Flex>
              <Icon textAlign="end" as={IoMdArrowDropdown} />     
            </Flex>

          </MenuButton>
          <MenuList>
            <Communities open={false} handleClose={()=>{}} />
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default UserMenu;
