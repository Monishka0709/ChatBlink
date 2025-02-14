import React, { useState, lazy, Suspense } from 'react'
import Fade from '@mui/material/Fade';
import { green, orange } from '../../constants/color'
import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import { Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Menu as MenuIcon, Notifications as NotificationsIcon, Search, Search as SearchIcon, SearchOffOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchDialog = React.lazy(() => import('../specific/SearchDialog'))
const NotificationDialog = React.lazy(() => import('../specific/NotificationDialog'))
const NewGroupDialog = React.lazy(() => import('../specific/NewGroupDialog'))


const IconBtn = ({ title, icon, onClick}) => {
  return (
    <Tooltip title={title}
    slots={{ transition: Fade, }} slotProps={{ transition: { timeout: 400 }, }}>
      <IconButton color="inherit" sx={{padding:"7px", margin:"5px", borderRadius:"50%"}} size="large" onClick={onClick}>
          {icon}
        </IconButton>
    </Tooltip>
  )
}

const Header = () => {

  
  const [isSearch,setIsSearch] = useState(false)
  const [isNewGroup,setIsNewGroup] = useState(false)
  const [isNotification,setIsNotification] = useState(false)
  const navigate = useNavigate();
  


  const navigateToGroup = () => navigate("/groups");

  

  const handleMobile =() =>{
    console.log('handleMobile')
  }

  const openSearchDialogue =() =>{
    console.log("openSearchDialogue")
    setIsSearch(!isSearch)
  }

  const createNewGroup =() =>{
    console.log("createNewGroup")
    setIsNewGroup(!isNewGroup)
  }
  
  const  openNotification =() =>{
    console.log("Notification")
    setIsNotification(!isNotification)
    
  }


  const  logoutHandler =() =>{
    console.log("logoutHandler")
  }




  return (
    <>
      <Box sx= {{flexGrow:1, zIndex:5,height: {
          md:'3.8rem'
        }}} >
        <AppBar position="static" sx={{
          bgcolor:green,
          paddingLeft:"2rem",
          paddingRight:"0.5rem",
          boxShadow:' inset -2px -2px 0.4rem rgba(0,0,0,0.5),inset 0 1px 0.5rem rgba(0,0,0,0.4), 0 1px 0.5rem rgba(0,0,0,0.3)'
        }}
        >
          <Toolbar sx={{minHeight:'59px'}}>
            <Typography variant='h6' sx={{
              display: { xs: "none", sm: "block"},
              fontFamily: "Readex Pro",
              fontWeight: "600",
              
            }}>
              ChatBlink
            </Typography>
            <Box sx={{
              display: { xs: "block", sm: "none"},
              fontFamily: "Readex Pro",
              fontWeight: "600",
              
            }}>
              <IconButton color='inherit' onClick={handleMobile}>
                <MenuIcon/>
              </IconButton>
            </Box>
            <Box sx={{
              flexGrow: 1,

            }}/>
            <Box>
            <IconBtn title="Search" icon={<SearchIcon/>} onClick={openSearchDialogue}/>
            <IconBtn title="New Group" icon={<AddIcon/>} onClick={createNewGroup}/>
            <IconBtn title="Manage Groups" icon={<GroupIcon/>} onClick={navigateToGroup}/>
            <IconBtn title="Notifications" icon={<NotificationsIcon/>} onClick={openNotification}/>
            <IconBtn title="LogOut" icon={<LogoutIcon/>} onClick={logoutHandler}/>
            
            </Box>
            

          </Toolbar>

        </AppBar>
      </Box>

      {
        isSearch && (
          <Suspense fallback={< Backdrop open/>}>
            <SearchDialog/>
          </Suspense>
            
        )}


      {
        isNotification && (
          <Suspense fallback={< Backdrop open/>}>
            <NotificationDialog/>
           </Suspense>
            
        )}


        {isNewGroup && (
          <Suspense fallback={< Backdrop open />}>
            <NewGroupDialog/>
          </Suspense>
            
        )}
  </>
  );
};

export default Header
