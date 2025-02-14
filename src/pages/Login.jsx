import React, { useState } from 'react'

import toast from "react-hot-toast";

import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import { CameraAlt as CameraAltIcon} from "@mui/icons-material"
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp'
import { usernameValidator } from '../utils/validation';
import Background from '../assets/login_background.png';




const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    

  const toggleLogin = () => setIsLogin((prev) => !prev);



    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("",usernameValidator);
    const password = useStrongPassword("");

    const avatar = useFileHandler("single");

   
   

  return (
    <div style={{
        backgroundImage:`url(${Background})`,
                

    }}>
    <Container component={"main"} maxWidth='xs' sx={{
        height:'100vh',
        display: "flex",
        justifyContent: "center",
        alignItems:"center",


    }}>
        <Paper elevation={3} 
        sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            borderRadius:"10px",
            alignItems:"center",

        }}>

            {
                isLogin ? <>
                <Typography sx={{color:'#287c8b',
                    fontFamily: "Readex Pro",
                    fontWeight: 500,
                    fontSize: '2rem'
                }}
                >Login</Typography>
                <form style={{
                    width: '100%',
                    marginTop:'1rem',
                }
                }
                >

                
                    <TextField required fullWidth label="Username" margin="normal" variant='outlined' value={username.value} onChange={username.changeHandler}></TextField>
                    <TextField required fullWidth label="Password" type='password' margin="normal" variant='outlined' value={password.value} onChange={password.changeHandler}></TextField>
                    { <Button  fullWidth sx={{marginTop: '1rem', backgroundColor:'#287c8b',border:'1px solid #287c8b', /*'&:hover':{border:'1px solid #ebf9fe'}*/}} variant='contained' color='primary' type='submit'>Login</Button> }
                    <Typography textAlign={'center'} mt={'1rem'} >Or</Typography>
                    <Button  fullWidth sx={{marginTop: '1rem', backgroundColor:'#ebf9fe', border:'1px solid #ebf9fe', color:'#287c8b', '&:hover':{border:'1px solid rgba(40, 124, 139, 0.82)'}}} variant='text'  onClick={() => setIsLogin(!isLogin)}>Sign Up</Button>
                </form>
                </> : <>
                <Typography sx={{color:'#287c8b', fontFamily:'Readex Pro', fontWeight: 500, fontSize:'2rem'}}>Sign Up</Typography>
                <form style={{
                    width: '100%',
                    marginTop:'1rem',
                }

                }
                >
                        <Stack position={"relative"} width={"6rem"} margin={"auto"}>
                        <Avatar sx={{
                            width:"6rem",
                            height:"6rem",
                            objectFit:"contain",

                        }}
                        src={avatar.preview}/>
                        {
                        avatar.error && (
                            <Typography m={"1rem auto"} width={"fit-content"} display={"block"} color='error' variant='caption'>{avatar.error}</Typography>
                        )
                    }
                        <IconButton sx={{
                            position:"absolute",
                            bottom: "0",
                            right:"0",
                            color:"white",
                            bgcolor:"rgba(0,0,0,0.5)",
                            ":hover": {
                                bgcolor:"rgba(0,0,0,0.7)"
                            }

                        }}
                        component="label">
                            <>
                            <CameraAltIcon/>
                            <VisuallyHiddenInput type='file' onChange={avatar.changeHandler}/>
                            </>
                        </IconButton>

                    </Stack>

                    
                    
                    <TextField required fullWidth label="Name" margin="normal" sx={{ '& .MuiInputLabel-root': { fontSize: '0.8rem',}}} inputProps={{style: {paddingTop: 10,  }}} variant='outlined' value={name.value} onChange={name.changeHandler}></TextField>
                    <TextField required fullWidth label="Bio" margin="normal" sx={{ '& .MuiInputLabel-root': { fontSize: '0.8rem',}}} inputProps={{style: {paddingTop: 10,  }}} variant='outlined' value={bio.value} onChange={bio.changeHandler}></TextField>
                    <TextField required fullWidth label="Username" margin="normal" sx={{ '& .MuiInputLabel-root': { fontSize: '0.8rem',}}} inputProps={{style: {paddingTop: 10,  }}} variant='outlined' value={username.value} onChange={username.changeHandler}></TextField>
                    {
                        username.error && (
                            <Typography color='error' variant='caption'>{username.error}</Typography>
                        )
                    }
                    <TextField required fullWidth label="Password" type='password' margin="normal" sx={{ '& .MuiInputLabel-root': { fontSize: '0.8rem',}}} inputProps={{style: {paddingTop: 10,  }}} variant='outlined' value={password.value} onChange={password.changeHandler}></TextField>
                    {
                        password.error && (
                            <Typography color='error' variant='caption'>{password.error}</Typography>
                        )
                    }
                    <Button  fullWidth sx={{marginTop: '0.8rem', backgroundColor:'#287c8b'}} variant='contained' color='primary' type='submit'>Sign Up</Button>
                    <Typography textAlign={'center'} mt={'0.8rem'} >Or</Typography>
                    <Button  fullWidth sx={{marginTop: '0.8rem', backgroundColor:'#ebf9fe', border:'1px solid #ebf9fe', color:'#287c8b', '&:hover':{border:'1px solid #287c8b'}}} variant='text' onClick={toggleLogin}>Login</Button>
                </form></>
            }

        </Paper>

    </Container>
    </div>
    
  )
}

export default Login
