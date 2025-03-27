import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleUsers } from '../../constants/sampleData'
import UserItem from '../shared/UserItem'
import { green, grayColorDark, red } from '../../constants/color'

const AddMemberDialog = ({addMember, isLoadingAddMember, chatId}) => {

    const [members, setMembers] = useState(sampleUsers)
    const [selectedMembers, setSelectedMembers] = useState([]);

    const selectMemberHandler = (id) => {
        setSelectedMembers((prev) =>
          prev.includes(id)
            ? prev.filter((currElement) => currElement !== id)
            : [...prev, id]
        );
     
      };

    
    const addMemberSubmitHandler =() => {
        closeHandler()
        console.log("Add Friend")
    }

    const closeHandler =() => {
        setSelectedMembers([])
        setMembers([])
        console.log("close")
    }

  return (
    <Dialog  open onClose={closeHandler}>
        <Stack p={'2rem'} width={'20rem'} spacing={'1rem'} >
            <DialogTitle fontFamily={'Readex Pro'} sx={{color:green, textAlign:'center'}}>Add Member</DialogTitle>
            <Stack spacing={'0.5rem'} sx={{backgroundColor:grayColorDark, borderRadius:'10px', marginTop:'20px'}}>
                { 
                    members.length >0 ? (
                    members.map(i=> (
                        <UserItem 
                            key ={i.id} 
                            user={i} 
                            handler={selectMemberHandler}
                            isAdded={selectedMembers.includes(i._id)} />
                    ))
                ) : (
                    <Typography textAlign={'center'} p={'1.2rem'} fontFamily={'Readex Pro '}>No Friends</Typography>
                )
                }
                
            </Stack>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'}> 
                
                <Button sx={{bgcolor:'transparent', outline:'2px solid', outlineColor:red , color:red, ":hover" : {bgcolor:red, color:'white'}}} onClick={closeHandler} >Cancel</Button>
                <Button 
                    disabled={isLoadingAddMember} 
                    sx={{
                        outline:'2px solid', 
                        outlineColor:green ,
                        bgcolor:green, 
                        color:'white'
                        }} 
                    variant="container" 
                    onClick={addMemberSubmitHandler} >
                        Submit
                    </Button>
                </Stack>
    
        </Stack>
    </Dialog>
  )
}

export default AddMemberDialog
