import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import AuthModal from '../modal/auth/AuthModal'
import RightContent from './rightContent/RightContent'
import SearchInput from './SearchInput'

type NavBarProps = {
  Children: React.ReactNode
}

const Navbars:React.FC<NavBarProps> = () => {
  return (
    <Flex align="center">
       <Flex align='center'>
        <Image src='/images/Millenium.png' alt='logo' height='84px'/>
       </Flex>
       <SearchInput >
       </SearchInput>
       <AuthModal/>
       <RightContent/>
    </Flex>
  )
}

export default Navbars