import { Flex, Input, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex align='center' justify='space-around'>
        <Text>
        Welcome to Oropo
        </Text>
        <Text>
         Orisun Oro
        </Text>
        <form>
          <Input type='text' isRequired name="name"/>
          <Input type='text' isRequired name="name"/>
          <Input type='text' isRequired name="name"/>

          
        </form>
        
      </Flex>
    </>
  )
}
