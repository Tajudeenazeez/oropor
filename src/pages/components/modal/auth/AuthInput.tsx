import { authModalState } from '@/atoms/authModalAtom'
import { Center, Flex } from '@chakra-ui/react'
import React from 'react'
import { useRecoilValue } from 'recoil'
import Login from './Login'
import ResetPassword from './ResetPassword'
import Signup from './Signup'

type Props = {}

const AuthInput:React.FC = () => {
  const modalState = useRecoilValue(authModalState)
  return (
    <>
      <Flex direction='column' align='center' width="100%">
       {modalState.view === "login" && <Login/> }
       {modalState.view === "signup" && <Signup/>}
       {modalState.view=== "resetPassword" && <ResetPassword/>}
      </Flex>
    
    </>
  )
}

export default AuthInput