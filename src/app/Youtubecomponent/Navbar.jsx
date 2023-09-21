import { Stack } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { logo } from '../Constant/constant'
import SearchBar from './SearchBar'


const Navbar = () => {
  return (
    <Stack direction={"row"}
     alignItems={"center"}
     p={2}
     sx={{position:"sticky",background:"#000",top:0,justifyContent:"space-between"}}
    >
        <Link href={"/"} 
        style={{display:"flex",alignItems:"center"}}
        >
          <Image src={logo} alt='logo' width={45} height={45}/>
        </Link>
        <SearchBar/>

    </Stack>
  )
}

export default Navbar