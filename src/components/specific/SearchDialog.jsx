import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/sampleData";
import { grayColor, grayColorDark } from "../../constants/color";

const SearchDialog = () => {
  

  let isLoadingSendFriendRequest = false;

  const search = useInputValidation("");

  const [users, setUsers] = useState(sampleUsers);

  const addFriendHandler = (id) => {
  
  console.log(id);
  };

 
  return (
    <Dialog open>
      <Stack  p={"2rem"} direction={"column"} width={"25rem"} >
         <DialogTitle fontSize={'1.7rem'} fontFamily={"Readex Pro"} textAlign={"center"}>Add Friends</DialogTitle>
         <TextField
         fontFamily="Readex Pro"
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment:(
              <InputAdornment position="start">
              <SearchIcon/>
              </InputAdornment>
            )
          }}/>

          <List  sx={{backgroundColor:grayColorDark, borderRadius:'10px', marginTop:'0.5rem'}}>
          {
            users.map((i) =>(
              <UserItem
              user={i}
              key={i._id}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
            ))
          }
          
          </List>
          
      </Stack>
    </Dialog>

  
  );
};

export default SearchDialog;
