import { SearchIcon } from '@chakra-ui/icons'
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'

type SearchInputProps = {
    children: React.ReactNode
}

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex bg='white' align='center' mr={2} flexGrow={1}>
        <InputGroup >
            <InputLeftElement 
                pointerEvents="none"    
             >
                <SearchIcon color={'gray.200'}/>
                
             </InputLeftElement>
             <Input  
             placeholder='Search oropo' 
             fontSize='xl'
             _placeholder={{ color:'gray.500'}} 
             _hover={{bg:"white", border:"1px solid"}}
             _focus= {{outline:"none", border:"1px solid", borderColor:"black"}}
             height="34px"
            />
        </InputGroup>
    </Flex>
  )
}

export default SearchInput          