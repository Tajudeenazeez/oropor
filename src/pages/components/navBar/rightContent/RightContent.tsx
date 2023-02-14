import { auth } from '@/firebase/ClientApp'
import { Button, Flex, Icon, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import AuthButton from './AuthButton'
import { User } from 'firebase/auth'
import MenuIcon from './MenuIcon'
import { BiLogIn } from 'react-icons/bi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import NeutralLogin from '../../modal/auth/NeutralLogin'



type Props = {
  user: User
}

const RightContent: React.FC<Props> = () => {
  const [user, loading, error] = useAuthState(auth);
 
  return (
   <Flex align="center" justify='center' mr='4'>
    {user ? <MenuIcon/>  : <AuthButton/>}
    {/* {!user && <NeutralLogin/>} */}
   </Flex>
  )
}

export default RightContent