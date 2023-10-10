import { auth } from '@/firebase/ClientApp'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import AuthButton from './AuthButton'
import { User } from 'firebase/auth'
import MenuIcon from './MenuIcon'
import NeutralLogin from '../../modal/auth/NeutralLogin'
type RightProp = {
  user?: User | null
}

const RightContent: React.FC<RightProp> = ({ user }) => {
 
  return (
   <Flex align="center" justify='center' mr='4'>
    {user ? <MenuIcon/>  : <AuthButton/>}
    {/* {!user && <NeutralLogin/>} */}
   </Flex>
  )
}

export default RightContent