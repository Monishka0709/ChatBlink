import React, { useState } from 'react'
// import axios from "axios";
import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
import { green } from '@mui/material/colors';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import { CameraAlt as CameraAltIcon} from "@mui/icons-material"
import { VisuallyHiddenInput } from '../../components/styles/StyledComponents';
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp'
import { usernameValidator } from '../../utils/validation';
import Background from '../../assets/login_background.png';
import { Navigate } from 'react-router-dom';
// import { bgGradient } from "../constants/color";
// import { server } from "../constants/config";
// import { userExists } from "../redux/reducers/auth";

const isAdmin = true;

const AdminLogin = () => {

    const secretKey = useStrongPassword("");

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("Submit");
    }

    if(isAdmin) return <Navigate to="/admin/dashboard"/>
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
                 <>
                <Typography sx={{color:'#287c8b',
                    fontFamily: "Readex Pro",
                    fontWeight: 500,
                    fontSize: '2rem'
                }}
                > Admin Login</Typography>
                <form style={{
                    width: '100%',
                    marginTop:'1rem',
                }
                }
                onSubmit={submitHandler}
                >

                
                    {/* <TextField required fullWidth label="Username" margin="normal" variant='outlined' value={username.value} onChange={username.changeHandler}></TextField> */}
                    <TextField 
                            required 
                            fullWidth 
                            label="Secret Key" 
                            type='password' 
                            margin="normal" 
                            variant='outlined' 
                            value={secretKey.value} 
                            onChange={secretKey.changeHandler} 
                            />
                    { <Button  fullWidth sx={{marginTop: '1rem', backgroundColor:'#287c8b',border:'1px solid #287c8b', /*'&:hover':{border:'1px solid #ebf9fe'}*/}} variant='contained' color='primary' type='submit'>Login</Button> }
                    
                </form>
                </> 
                            }

        </Paper>

    </Container>
    </div>
    
  )
}

export default AdminLogin
