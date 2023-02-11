import { authModalState } from '@/atoms/authModalAtom'
import {
    Flex,
    Modal, 
    ModalBody,
    ModalCloseButton, 
    ModalContent, 
    ModalHeader, 
    ModalOverlay, 
    Text} from '@chakra-ui/react'
import React, { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import AuthButton from './OauthButton'
import AuthInput from './AuthInput'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/ClientApp'


const AuthModal:React.FC = () => {
    const [modalState, setModalState] = useRecoilState(authModalState)
    const [user] = useAuthState(auth)
    const handleModalState = useCallback(() => {
      setModalState((prev)=>{
        return {
          ...prev,
          open:false
        }

      })
    },[setModalState])
    
    useEffect( () => {
      if(user){
        handleModalState()
      }
    }, [user, handleModalState])


    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
  
        <Modal isOpen={modalState.open} onClose={handleModalState} >
          <ModalOverlay />
          <ModalContent height="500px">
            <ModalHeader textAlign='center' fontSize="3xl">
              {modalState.view === "login" && "Login"}
              {modalState.view === "signup" && "Signup"}
              {modalState.view === "resetPassword" && "Reset password"}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody display='flex' alignItems="center" justifyContent="center">
              
              {modalState.view === "resetPassword"?  <AuthInput/> : 
              <Flex align='center' direction='column'>
              <AuthButton/>
              <Text  p="8pt">OR</Text>
              <AuthInput/>
            </Flex>
              }
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}

export default AuthModal