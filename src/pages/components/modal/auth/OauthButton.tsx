import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {useSignInWithGoogle} from "react-firebase-hooks/auth"
import {auth} from "../../../../firebase/ClientApp"

const OauthButton:React.FC = () => {
  const [signInWithGoogle, user, loading, error]= useSignInWithGoogle(auth)
  return (
    <>
        <Button 
          variant={"oauth"} 
          width='100%' 
          height={12} 
          fontSize='2xl' 
          isLoading={loading}
          onClick={()=>{signInWithGoogle()}}
          > 
          <Flex align='center' >
            <Image src='/images/google.png' height={6} alt='google'/>
            <Text>
              Continue with Google
            </Text>
          </Flex>
        </Button>
        {error && error.message}

    </>
  )
}


export default OauthButton