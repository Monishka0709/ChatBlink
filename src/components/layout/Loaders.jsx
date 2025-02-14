import { Skeleton, Stack } from "@mui/material";
import  Grid  from '@mui/material/Grid2'
import LoadingImg from '../../../public/Loader.svg'
import React from "react";
import './Loaders.css'
import { BouncingSkeleton } from "../styles/StyledComponents";
import { green } from "../../constants/color";

const LayoutLoader = () => {

  
  return (
    
    <>
    <div style={{
      height:'100vh',
      background:'radial-gradient(#c6eefc, #d8f3fd, #ebf9fe)',
      width:'100%',
      outline:'2px solid',
      outlineColor:'black',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
      boxShadow:' 2px 2px 0.4rem rgba(0,0,0,0.5), 0 1px 0.5rem rgba(0,0,0,0.4), 0 1px 0.5rem rgba(0,0,0,0.3)'


      
  
    }}>

      
  
    <img className="Img" height={'200rem'}  src={LoadingImg}/>
    <TypingLoader/>
  
  </div>
  </>
  );
};

const TypingLoader = () => {
  return (
    <Stack
      spacing={"0.5rem"}
      direction={"row"}
      padding={"0.5rem"}
      justifyContent={"center"}
      marginTop={'1rem'}
    >
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          background:green,
          animationDelay: "0.1s",
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          backgroundColor: green,
          animationDelay: "0.2s",
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          backgroundColor: green,
          animationDelay: "0.4s",
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          backgroundColor: green,
          animationDelay: "0.6s",
        }}
      />
    </Stack>
  );
};

export {  LayoutLoader, TypingLoader };
