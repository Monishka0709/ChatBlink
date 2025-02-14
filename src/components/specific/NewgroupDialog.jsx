import { useInputValidation } from "6pp";
import {
  Button,
  Dialog,
  DialogTitle,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { grayColor, grayColorDark, green, red } from "../../constants/color";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
import toast from "react-hot-toast";

const NewGroupDialog = () => {
  
  const groupName = useInputValidation("");

  const [selectedMembers, setSelectedMembers] = useState([]);

  
  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
 
  };

  
  return (
    <Dialog open >
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"1.5rem"}>
        <DialogTitle textAlign={"center"} fontSize={'1.7rem'} fontFamily={"Readex Pro"}>
          New Group
        </DialogTitle>

        <TextField
          label="Group Name"
          fontFamily="Readex Pro"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />

        <Typography fontFamily={"Readex Pro"} variant="body1">Members</Typography>

        <Stack sx={{backgroundColor:grayColorDark, borderRadius:'10px'}}>
          {
            sampleUsers?.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            )
          )
          
          }
        </Stack>

        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button
            variant="contained"
            
            color="error"
            size="large"
            sx={{
              background:'transparent',
              color:'red',
              outline:'2px solid',
              outlineColor:red,
              ":hover" : {
                background:red,
                color:'white'
              }
            }}
            
          >
            Cancel
          </Button>
          <Button
            sx={{background:green,
              outline: '2px solid',
                outlineColor:green, 
                        color:'white',
                        borderRadius:'0.4rem',
                      }}
            variant="contained"
            size="large"
            
          >
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroupDialog;
