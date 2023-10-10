import { Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'


const CommunityNotFound = () => {
  return (
    <>
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text>Community name is not found</Text>
        <Link href="/"><Button>Home</Button></Link>
    </Flex>
    </>
  )
}

export default CommunityNotFound