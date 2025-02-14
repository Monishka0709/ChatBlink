import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Skeleton, Stack } from "@mui/material";
import { grayColor, green, greenDark, orange } from "../constants/color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/dialogs/FileMenu";
import MessageComponent from "../components/shared/MessageComponent";

import {
  ALERT,
  CHAT_JOINED,
  CHAT_LEAVED,
  NEW_MESSAGE,
  START_TYPING,
  STOP_TYPING,
} from "../constants/events";

import { useInfiniteScrollTop } from "6pp";
import { useDispatch } from "react-redux";


import { TypingLoader } from "../components/layout/Loaders";
import { useNavigate } from "react-router-dom";
import { sampleMessage } from "../constants/sampleData";


const user = {
  _id:'sfdfsdfsdf',
  name:'Monishka'
}
const Chat = ({}) => {

  
  const containerRef = useRef(null);
 
  const [fileMenuAnchor, setFileMenuAnchor] = useState(null);

  
  return (
    
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        paddingTop={'1rem'}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {sampleMessage.map((i) => (
          <MessageComponent key={i._id} message={i} user={user} />
        ))}

        

        
      </Stack>

      <form
        style={{
          height: "10%",
        }}
        
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem 1rem 0 1rem"}
          alignItems={"center"}
          position={"relative"}
          bottom={'1.2rem'}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg",
            }}
            
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox
            placeholder="Type Message Here..."

          />

          <IconButton
            type="submit"
            sx={{
              
              bgcolor: greenDark,
              border:'2px solid #fff',
              color: "white",
              marginLeft: "1rem",
              padding: "0.8rem",
              "&:hover": {
                bgcolor: "#174750",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>

      <FileMenu anchorE1={fileMenuAnchor}  /> 
    </Fragment>
  
);
};

export default AppLayout()(Chat);
