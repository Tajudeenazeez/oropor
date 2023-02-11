import { authModalState } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase/ClientApp";
import { FIREBASE_ERROR } from "../../../../firebase/firebaseError";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};
const Signup: React.FC = () => {
  const [signup, setSignup] = useState(initialState);
  const setModalState = useSetRecoilState(authModalState);
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignup((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signup.password !== signup.confirmPassword) {
        setError('"Password do not match!"');
        return;
    }
    if(error){
        setError("")
    }
    createUserWithEmailAndPassword(signup.email, signup.password);


   
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <Input
          type="email"
          name="email"
          onChange={onChangeHandle}
          required
          placeholder="email"
          _placeholder={{
            color: "brand.900",
            fontSize: "15pt",
          }}
          _focus={{
            outline: "none",
          }}
          _hover={{
            bg: "brand.100",
            color: "brand.900",
          }}
          mb="10pt"
        />
        <Input
          type="password"
          name="password"
          onChange={onChangeHandle}
          required
          placeholder="password"
          _placeholder={{
            color: "brand.900",
            fontSize: "15pt",
          }}
          _focus={{
            outline: "none",
          }}
          _hover={{
            bg: "brand.100",
            color: "brand.900",
          }}
          mb="10pt"
        />
        <Input
          type="password"
          name="confirmPassword"
          onChange={onChangeHandle}
          required
          placeholder="confirm password"
          _placeholder={{
            color: "brand.900",
            fontSize: "15pt",
          }}
          _focus={{
            outline: "none",
          }}
          _hover={{
            bg: "brand.100",
            color: "brand.900",
          }}
          mb="10pt"
        />
         
        {(error || userError) && 
         <Text textAlign="center" textColor='red.400' fontSize='2xl'>
            {error || FIREBASE_ERROR[userError?.message as keyof typeof FIREBASE_ERROR]}
         </Text>}

        <Button width="100%" fontSize='xl' mb="2pt" mt="3pt" type="submit" isLoading={loading}>
          SIGN UP
        </Button>
      </form>
      <Flex justifyContent="center">
        <Text>Already a member?</Text>
        <Text
          color="brand.900"
          fontSize="lg"
          cursor="pointer"
          onClick={() => {
            setModalState((prev) => ({
              ...prev,
              view: "login",
            }));
          }}
        >
          {" "}
          LOG IN
        </Text>
      </Flex>
    </>
  );
};

export default Signup;
