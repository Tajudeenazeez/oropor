import { authModalState } from '@/atoms/authModalAtom'
import { Button } from '@chakra-ui/react'
import React from 'react'
import { useSetRecoilState } from 'recoil'



const AuthButton:React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState)
  return (
    <>
        <Button 
            variant='outline'
            width={{sm:"-moz-fit-content", md:"150px"}} 
            display={{base:"none",sm:"flex",}}
            mr="2.5"
            fontSize={20}
            onClick={()=>{setAuthModalState({open: true, view: "login"})}}
        >Login
        </Button>
        <Button
            display={{base:"none",sm:"flex",}}
            variant='outline'
            width={{sm:"-moz-fit-content", md:"150px"}} 
            bg="brand.900"
            mr="2.5"
            fontSize={20}
            onClick={()=>{setAuthModalState({open: true, view: "signup"})}}

        >Sign up
        </Button>
    </>
  )
}

export default AuthButton   