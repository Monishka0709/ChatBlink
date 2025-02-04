import React from 'react'
import Header from "./Header"
import Title from '../shared/Title'
import Grid  from '@mui/material/Grid2'
import ChatList from '../specific/ChatList'
import { samepleChats } from '../../constants/sampleData'
import { useParams } from 'react-router-dom'
import Background from '../../assets/chat_background2.png'
import Profile from '../specific/Profile'

const AppLayout = () => (WrappedComponent) => {
  return (props) => {

    
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const socket = getSocket();

    const params = useParams();
    const chatId = params.chatId;
    



    const handleDeleteChat = (e, _id, groupChat) => {
    // dispatch(setIsDeleteMenu(true));
    // dispatch(setSelectedDeleteChat({ chatId, groupChat }));
    // deleteMenuAnchor.current = e.currentTarget;
      e.preventDefault();
      console.log("Delete Chat", _id, groupChat);
    };



    return (
    <>
      {/* <Title title={'ChatBlink'} description={"this is a chat application"}/> */}
      <Header />

      <Grid container height={"calc(100vh - 3.8rem)"} sx={{ borderTop: " 10px solid #444141", backgroundColor:"#444141" }} >
          <Grid item size={{sm:4,
            md:3
            }}
            sx={{
              display: { xs: "none", sm: "block" },
              backgroundColor:"#444141" ,
              paddingLeft:"0.5rem"

            }}
            height={"100%"}
          > <ChatList chats={samepleChats} chatId={chatId} handleDeleteChat={handleDeleteChat}/> </Grid>
            <Grid item size={{xs:12, sm:8, md:5, lg:6}} height={"100%"}
            sx={{
              
              background:`url(${Background})`,
              backgroundColor:"#ebf9fe",
              border: '5px solid #ebf9fe',
              borderRadius:"10px",
              
            }}>
              
            <WrappedComponent {...props}  />
            
          </Grid>

          <Grid item
            size={{md:4,lg:3}}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "0",
              bgcolor: "#444141",
            }}
          ><Profile/></Grid>
      
      </Grid>
      
    </>
  )
 }
}

export default AppLayout
