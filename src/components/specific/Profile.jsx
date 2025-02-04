import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";
import { transformImage } from "../../lib/features";
import { grayColor, greenDark } from "../../constants/color";

const Profile = ({  }) => {
  return (
    <Stack spacing={"1.5rem"} direction={"column"} alignItems={"center"} sx={{margin:'0 1rem 1rem 1rem',paddingTop:'1rem',border:'2px solid #2d383b',background:'#282c2d',height:'96%', borderRadius:'10px'}}>
      <Avatar
        // src={transformImage(user?.avatar?.url)}
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"user?.bio"} />
      <ProfileCard
        heading={"Username"}
        text={"user?.username"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading={"Name"} text={"user?.name"} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={"moment(user?.createdAt).fromNow()"}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}

    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;