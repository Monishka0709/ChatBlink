import React, { memo } from 'react'
import { Link } from '../styles/StyledComponents'
import { Box, Stack, Typography } from '@mui/material'
import AvatarCard from "./AvatarCard";
import './chatitem.css'
import { motion } from "framer-motion";


const ChatItem = ({
    avatar=[],
    name,
    _id,
    groupChat=false,
    sameSender,
    newMessageAlert,
    isOnline,
    index=0,
    handleDeleteChat
}) => {
  return (

    <Link sx={{
      padding:"0",
    }}

    className='chatlistmenu'
    to={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}>
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        // transition={{ delay: 0.05 * index }}
        idName='highlight'
        className={sameSender? 'active': 'notactive'}
        style={{
          display: "flex",
          gap: "1.5rem",
          fontFamily:"Readex Pro",
          alignItems: "center",
          backgroundColor: sameSender ? "#ebf9fe" : "unset",
          color: sameSender ? "rgba(35,32,32,0.85)" : "#ebf9fe",
          borderRadius: sameSender ? "10px 10px 10px 10px" : "10px 10px",
          border: "none" ,
          position: "relative",
          padding: "1rem",
          margin: " 0 0.9rem 0 0.5rem",
          

        }} 
        // sx={{ '&:hover': { backgroundColor: "blue" }}}
      >

        <b className='highlight'></b>
        <b className='highlight'></b>
      
        <AvatarCard avatar={avatar} />
        <Stack>
            <Typography fontFamily={"Readex Pro"}>{name} </Typography>
            {
                newMessageAlert && (
                    <Typography>{newMessageAlert.count} New Message</Typography>
                )
            }
        </Stack>
{
    isOnline && (
    <Box
    sx={{
        width: "10px",
        height: "10px",
        borderRadius:"50%",
        backgroundColor: "green",
        position: "absolute",
        top: "50%",
        right: "1rem",
        transform: "translateY(-50%)",
    }}
    />
)}
      </motion.div>
    </Link>
  )
}

export default memo(ChatItem);
