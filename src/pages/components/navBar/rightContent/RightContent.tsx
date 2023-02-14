import { auth } from '@/firebase/ClientApp'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import AuthButton from './AuthButton'
import { User } from 'firebase/auth'
import MenuIcon from './MenuIcon'


type PropsUser = {
  user: User | undefined | null
}

const RightContent: React.FC<PropsUser> = () => {
  const [user, loading, error] = useAuthState(auth);
 
  return (
   <Flex align="center" justify='center' mr='4'>
    {user ? <MenuIcon/>  : <AuthButton/>}
    {/* {!user && <NeutralLogin/>} */}
   </Flex>
  )
}

export default RightContent