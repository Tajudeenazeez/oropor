import { Button } from '@chakra-ui/react'
import { auth } from '@/firebase/ClientApp'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import AuthButton from './AuthButton'
import { signOut } from 'firebase/auth'


type Props = {}

const RightContent: React.FC<Props> = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
   <Flex align="center" justify='center'>
    {user ? <Button 
                  variant='solid' 
                  textColor='brand.50'
                  onClick={()=>{signOut(auth)}}
                  isLoading={loading}
            >LOG OUT</Button> : <AuthButton/>}
   </Flex>
  )
}

export default RightContent