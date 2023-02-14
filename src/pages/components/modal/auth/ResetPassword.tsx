import { auth } from "@/firebase/ClientApp";
import { Button, Flex, Image, Input, Text } from "@chakra-ui/react"
import React, {useState} from "react"
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";


const ResetPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
  
    
      const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await sendPasswordResetEmail(email)
        setSuccess(true)

        
      }
   


    return (
        <Flex align='center'   direction="column" >
            <Image src="/images/oropor3.png" height="100px" mt="-20" width="100px" alt="mill"/>
            <Text fontWeight="extrabold" p="5"> Reset your Password</Text>
            {success ? <Text textColor="green.600" fontSize="3xl"> Email Sent! check your inbox </Text> : <Text p="5">Enter the email associated with your email account and 
                we &apos;ll send you a reset link
            </Text>
            }

            <form onSubmit={onSubmit}>
            <Input
                type='email'
                name="email"
                placeholder="email"
                onChange={(e) => {setEmail(e.target.value)}}
                _placeholder={{
                    
                    fontSize:"xl"
                }}
                mb="10" 
            />
            {error && <Text textColor="red.600" p="2">{error.message}</Text>}

            <Button 
                variant="solid" 
                width="100%" 
                fontSize="2xl"
                type="submit"
            >
                Reset Password
            </Button>
            </form>

        </Flex>
    )

}


export default ResetPassword