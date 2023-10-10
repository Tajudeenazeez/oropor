import { auth, db } from "@/firebase/ClientApp";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { doc, getDoc, runTransaction, serverTimestamp, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFillEyeFill, BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed} from "react-icons/hi"

type ModalProps = {
  open: boolean;
  handleClose: () => void;
};

const CreateCommunityModal: React.FC<ModalProps> = ({ open, handleClose }) => {
  const [communityName, setCommunityName] = useState("");
  const [charRemaining, setCharRemaining] = useState(21);
  const [communityType, setCommunityType] = useState("public");
  const [error, setError] = useState('')
  const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 21) return;
    setCommunityName(event.target.value);
    setCharRemaining(21 - event.target.value.length);
  };

  const onCommunityTypeHandle = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCommunityType(event.target.name);
  };


  const createCommunityHandle = async () => {
    if (error) {
      return setError("")
    }
    //validate the name
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(format.test(communityName)|| communityName.length < 3){
      setError("Community name can not contain special character and must not be less than 3")
      return;
    }

    setLoading(true)
    //create community
    try {
      //check if community exist
      const communityDocRef = doc(db, "communities", communityName)
      await runTransaction(db, async (transaction) => {
    
        const communityDoc = await transaction.get(communityDocRef)
        if(communityDoc.exists()){
          throw new Error(`o/${communityName} already exist`)
        }
        transaction.set(communityDocRef, {
        creatorId: user?.uid,
        createdAt: serverTimestamp(),
        numberOfMembers:1,
        privacyType: communityType
        })

        transaction.set(
          doc(db, `users/${user?.uid}/communitySnippets`, communityName), {
            communityId: communityName,
            isModerator: true

        })
      })
  
      setLoading(false)
      
    } catch (error:any) {
      setError(error.message)      
    }

  }

  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <Flex flexDirection="column" ml="4">
            <ModalHeader>Create a Community</ModalHeader>
            <Text fontWeight="extrabold" fontSize={15}>
              Name
            </Text>
            <Text>Community name is created here</Text>
            <Text
              position="relative"
              top="35px"
              left="15px"
              textColor="gray.300"
              fontSize="lg"
            >
              o/
            </Text>
            <Input
              position="relative"
              pl="30px"
              value={communityName}
              width="auto"
              onChange={handleChange}
              margin="0px 10px 0px 10px"
            />
            <Text
              color={charRemaining === 0 ? "red.500" : "green.500"}
              ml="10px"
            >
              {charRemaining} character remaining
            </Text>
            {error && <Text color="red.500">{error}</Text>}
            {loading && <Spinner margin="0 auto" />}
          </Flex>
          <Box>
            <Flex>
              <Text
                ml="20px"
                mt="20px"
                textTransform="capitalize"
                fontWeight="extrabold"
              >
                Community type
              </Text>
            </Flex>
            <ModalCloseButton />
            <Divider />
            <ModalBody>
              <Stack>
                <Checkbox
                  name="public"
                  onChange={onCommunityTypeHandle}
                  isChecked={communityType === "public"}
                >
                   <Flex align="center">
                    <Icon mr="4px" as={BsFillEyeFill} />
                  <Text mr="10px">Public</Text>
                  <Text fontSize={12}>Anyone can create and view post</Text>
                  
                  </Flex>
                </Checkbox>
                <Checkbox
                  name="restricted"
                  onChange={onCommunityTypeHandle}
                  isChecked={communityType === "restricted"}
                >
                   <Flex align="center">
                    <Icon mr="4px" as={BsFillPersonFill} />
                  <Text mr="10px">Restricted</Text>
                  <Text fontSize={12}>Anyone can view post, but cant create post</Text>
                  </Flex>
                </Checkbox>
                <Checkbox
                  name="private"
                  onChange={onCommunityTypeHandle}
                  isChecked={communityType === "private"}
                >
                  <Flex align="center">
                    <Icon mr="4px" as={HiLockClosed} />
                  <Text mr="10px">Private</Text>
                  <Text fontSize={12}>Only users can create and view post</Text>
                  </Flex>
                </Checkbox>
              </Stack>
            </ModalBody>
          </Box>

          <ModalFooter>
            <Button variant="outline" mr={3} onClick={handleClose}>
              Close
            </Button>
            <Button  onClick={createCommunityHandle} isLoading={loading}>Create Community</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateCommunityModal;
