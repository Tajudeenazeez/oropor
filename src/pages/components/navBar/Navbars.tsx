import { Flex, Icon, Image,Text } from '@chakra-ui/react'
import React from 'react'
import { IoMdHome } from 'react-icons/io'
import AuthModal from '../modal/auth/AuthModal'
import UserMenu from '../modal/UserMenu'
import RightContent from './rightContent/RightContent'
import SearchInput from './SearchInput'

type NavBarProps = {
  Children: React.ReactNode
}

const Navbars:React.FC<NavBarProps> = () => {
  return (
    <Flex align="center" bg="brand.100">
       <Flex align='center'>
        <Image src='/images/oropor3.png' alt='logo' height='100px'/>
       </Flex>
        <UserMenu/>
       <SearchInput >
       </SearchInput>
       <AuthModal/>
       <RightContent/>
    </Flex>
  )
}

export default Navbars