import { Flex, Icon, MenuItem, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdGroupAdd } from 'react-icons/md'
import CreateCommunityModal from '../createCommunities/CreateCommunityModal'

type CommunityProp = {
    open: boolean,
    handleClose : () => void
}

const Communities:React.FC<CommunityProp> = () => {
    const [open, setOpen] = useState(false)

  return (
    <>
        <CreateCommunityModal open={open} handleClose={() => setOpen(false)}/>
        <MenuItem onClick={() => setOpen(true)}>
        <Flex>
            <Icon fontSize="2xl" mr={2} as={MdGroupAdd} />
            <Text>Create Communities</Text>
        </Flex>
        </MenuItem>
    </>
  )
}

export default Communities