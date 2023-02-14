import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import React from "react";

type SearchInputProps = {
  children: React.ReactNode;
};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex align="center" mr={2} flexGrow={1}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon fontSize="3xl" ml="2" mt="4" color={"gray.200"} />
        </InputLeftElement>
            <Input
            bg="brand.50"
            placeholder="Search Oropor"
            borderRadius="full"
            minHeight="14"
            fontSize="xl"
            _placeholder={{ color: "gray.500", pl:"8" }}
            _hover={{ bg: "white", border: "1px solid" }}
            _focus={{
              outline: "none",
              border: "1px solid",
              borderColor: "black",
            }}
            height="34px"
          />
     
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
