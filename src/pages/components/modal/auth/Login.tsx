import { authModalState } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FIREBASE_ERROR } from "../../../../firebase/firebaseError";
import { auth } from "../../../../firebase/ClientApp"
type LoginProp = {
  email?: string;
  password?: string;
};

const initialState = {
  email: "",
  password: "",
};
const Login: React.FC<LoginProp> = () => {
  const [login, setlogin] = useState(initialState);
  const setModalState = useSetRecoilState(authModalState)

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const onChangeHandle = (event:React.ChangeEvent<HTMLInputElement>) => {
    setlogin((prev) => (
        {
            ...prev,
            [event.target.name]: event.target.value 
        }
    ) )
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signInWithEmailAndPassword(login.email, login.password)
    
  }
  return (
    <>
      <form onSubmit={onSubmit} >
        <Input
          isRequired
          type="email"
          name="email"
          onChange={onChangeHandle}
          placeholder="email"
          _placeholder={{
            color: "brand.900",
            fontSize: "15pt"
         }}
         _focus={{
            outline:"none",

         }}
         _hover={{
            bg: "brand.500",
            color: "brand.900"
         }}
         mb="10pt"
        />
       <Input
         isRequired
         type="password" 
         name="password"  
         onChange={onChangeHandle}
         placeholder="password"
         _placeholder={{
            color: "brand.900",
            fontSize: "15pt"
         }}
         _focus={{
            outline:"none",

         }}
         _hover={{
            bg: "brand.500",
            color: "brand.900"
         }}
         mb="10pt"
         />
         {error && <Text textColor='red.600' fontSize='xl' p='5pt' >{FIREBASE_ERROR[error?.message as keyof typeof FIREBASE_ERROR]}</Text> }
        <Button width="100%" fontSize='xl' mb="2pt" mt="3pt" type="submit" isLoading={loading}>LOG IN</Button>
      </form>
      <Flex justifyContent="center" mt='20px' mb="15px">
        <Text>
            Forget your password?
        </Text>
        <Text 
            color="brand.900"
            fontSize="lg"
            cursor="pointer"
            onClick={() => {
            setModalState((prev) => ({
                ...prev,
                view:"resetPassword"
            }))
        }
        }> Reset here</Text>
      </Flex>
      <Flex justifyContent="center">
        <Text>
            New member?
        </Text>
        <Text 
            color="brand.900"
            fontSize="lg"
            cursor="pointer"
            onClick={() => {
            setModalState((prev) => ({
                ...prev,
                view:"signup"
            }))
        }
        }> SIGN UP</Text>
      </Flex>
    </>
  );
};

export default Login;
