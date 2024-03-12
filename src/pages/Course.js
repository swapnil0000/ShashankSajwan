import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ncert from "../assets/ncert.jpg"
import tips from "../assets/tips.jpg"
import newsnotes from "../assets/newsnotes.jpg"
import pyq from "../assets/pyq.jpg"
import test from "../assets/test.jpg"
import current from "../assets/currentaffairs.png"
const Course = () => {
    const data=[
        {
            id:1,
            name:'Ncert Notes',
            img:ncert
        },
        {
            id:2,
            name:'Pyq Notes',
            img:pyq
        },
        {
            id:3,
            name:'NewsPaper Notes',
            img:newsnotes
        },
        {
            id:4,
            name:'Current Affairs',
            img:current
        },
        {
            id:5,
            name:'UPSC Tips & Tricks',
            img:tips
        },
        {
            id:6,
            name:'Test',
            img:test
        },
    ]
  return (
     <Container sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <Typography variant='h2' sx={{marginBottom:'20px'}}>
        NOTES
      </Typography>
      <Grid container spacing={4}>
       {data.map((ele)=>(
        <Grid key={ele.id} item lg={4} md={4} sm={6} xs={12}>
        <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={ele.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography sx={{fontWeight:500,color:'#00022e'}} component="div">
              {ele.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Grid>
       ))}
       </Grid>
     </Container>
  )
}

export default Course