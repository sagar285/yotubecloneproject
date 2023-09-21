"use client";
import { Apifetch } from '@/app/Constant/Api'
import Videos from '@/app/Youtubecomponent/Videos'
import { CheckCircle } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';


const page = ({params}) => {

  const {id}=params;
 const [videoDetail,setvideoDetail]=useState(null);
 const [videos,setvideos]=useState([])

 const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
});


 const playvideo =async()=>{
  const data = await Apifetch(`videos?part=snippet,statistics&id=${id}`)
  const suggesvideo = await Apifetch(`search?part=snippet&relatedToVideoId=${id}&type=video`)
  setvideos(suggesvideo.items)
  setvideoDetail(data.items[0]);
 }

 useEffect(()=>{
  playvideo()
 },[id])



  return (
   <>
   <Box minHeight={"95vh"} sx={{background:"#000"}}>
        <Stack direction={{xs:"column",md:"row"}}>
          <Box flex={1}>
         <Box sx={{width:"100%",position:"relative",top:"86px"}}>
           <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
           />
          <Typography sx={{color:"white"}} variant='h5' fontWeight={"bold"} p={2}>
            {videoDetail?.snippet?.title}
          </Typography>
          <Stack direction={"row"} justifyContent={"space-between"}
          sx={{color:"#fff"}} py={1} px={2}
          >
            <Link href={`/channel/${videoDetail?.snippet?.channelId}`}>
            <Typography variant={{sm:"subtitle1",md:"h6"}} color="#fff">
                {videoDetail?.snippet?.channelTitle}
                <CheckCircle sx={{fontSize:"12px",color:"gray",ml:"5px"}}/>
            </Typography>
            </Link>
            <Stack direction={"row"} gap="20px" alignItems={"center"}>
               <Typography variant='body1' sx={{opacity:0.7}}>
                    {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
               </Typography>
               <Typography variant='body1' sx={{opacity:0.7}}>
                    {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} like
               </Typography>
            </Stack>
           
          </Stack>
         </Box>
          </Box>

       <Box px={2} py={{md:1,xs:5}} justifyContent={"center"} alignItems={"center"}>
        <Videos videos={videos} direction="column"/>
       </Box>



        </Stack>

   </Box>


   </>
  )
}

export default page