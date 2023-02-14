import { Flex, Icon } from '@chakra-ui/react'
import { BiChat, BiGridAlt, BiUpArrowCircle } from "react-icons/bi"
import { IoMdNotificationsOutline, IoMdVideocam, IoMdColorFilter} from "react-icons/io"

import React from 'react'
import LogOut from '../../modal/auth/LogOut'
import { BsPlusLg } from 'react-icons/bs'

const MenuIcon = () => {
  return (
    <>
      <Flex  fontSize="3xl" justify="space-evenly" >
        <Flex align='center'  textColor='brand.600'  width="300px" justify="space-around"  >
            <Icon as={IoMdColorFilter}/>
            <Icon as={IoMdNotificationsOutline} />
            <Icon as={IoMdVideocam} />
            <Icon as={BsPlusLg} />
        </Flex>
        <Flex align='center'  textColor='brand.600' width="300px"  justify="space-around"   display={{base:"none", md:"flex"}}>
            <Icon as={BiChat} />
            <Icon as={BiGridAlt} />
            <Icon as={BiUpArrowCircle} />
            <LogOut/>
        </Flex>
      </Flex>
    </>
  )
}

export default MenuIcon