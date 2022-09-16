import React from 'react'
import Navbar from '../../Components/Navbar'
import style from '../../styles/blog.module.css'
import Image from "next/image"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/system';
import { Chip } from '@mui/material';
import Link from "next/link"
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const index = ({data}) => {
  console.log(data);
  return (

    <div>
    <Navbar/>


        {data.slice(0, 5).map((p)=>(
          <Box sx={{border:2}} className={style.heading} id={p.id}>
          <Stack direction="row">
            <Chip label={p.id}/>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             {p.title}
            </Typography>
            <Typography variant="h5" component="div">
             
            </Typography>
            <Link href={`/blog/${p.id}`}>
              <Button > click</Button>
            </Link>
          </CardContent>  
          <CardActions>
          
    </CardActions>
    
    </Stack>
          
    </Box>
            
          ))}
      
    </div>

  )
}

export default index