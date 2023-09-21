"use client";
import { Apifetch } from '@/app/Constant/Api';
import Videos from '@/app/Youtubecomponent/Videos';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
  const [videos,setvideos]=useState([]);
  const {term}=params;

 const getdata =async()=>{
  const data = await Apifetch(`search?part=snippet&q=${term}`);
  setvideos(data.items);
 }

 useEffect(()=>{
       getdata();
 },[term])


  return (
    <Box p={2} sx={{overflowY:"auto",height:"90vh",flex:2,background:"#000"}}>
        <Typography variant='h4' fontWeight={"bold"} mb={2} sx={{color:"white"}}>
              Search Results for <span style={{color:"red"}}>{term}</span>
        </Typography>
<Videos videos={videos}/>
    </Box>
  )
}

export default page