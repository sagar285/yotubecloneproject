"use client";
import { Apifetch } from "@/app/Constant/Api";
import ChannelCard from "@/app/Youtubecomponent/ChannelCard";
import Videos from "@/app/Youtubecomponent/Videos";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
useEffect

const page = ({params}) => {
  const {id}=params;
  const [channelDetail,setchannelDeatil]=useState(null);
  const[videos,setvideos]=useState([])

   const channel =async()=>{
    const res = await Apifetch(`channels?part=snippet&id=${id}`)
    const data = await Apifetch(`search?channelId=${id}&part=snippet&order=date`)
    setchannelDeatil(res.items[0])
    setvideos(data.items);
   }
   useEffect(()=>{
         channel();
   },[])



  return (
      <Box minHeight={"95vh"}>
         <Box>
          <div
           style={{
            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 46%, rgba(0,212,255,1) 100%)",
            zIndex:"10",
            height:"300px"
           }}
          />
           <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
         </Box>
         <Box display={"flex"} p="2">
          <Box sx={{mr:{sm:"100px"}}}>
             <Videos videos={videos}/>
          </Box>
         </Box>
      </Box>
  )
}

export default page