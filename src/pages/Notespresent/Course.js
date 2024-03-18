// import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
// import React from 'react'
import ncert from "../../assets/ncert.jpg"
// import tips from "../assets/tips.jpg"
// import newsnotes from "../assets/newsnotes.jpg"
import pyq from "../../assets/pyq.jpg"
// import test from "../assets/test.jpg"
// import current from "../assets/currentaffairs.png"
// const Course = () => {
//     const data=[
//         {
//             id:1,
//             name:'Ncert Notes',
//             img:ncert
//         },
//         {
//             id:2,
//             name:'Pyq Notes',
//             img:pyq
//         },
//         {
//             id:3,
//             name:'NewsPaper Notes',
//             img:newsnotes
//         },
//         {
//             id:4,
//             name:'Current Affairs',
//             img:current
//         },
//         {
//             id:5,
//             name:'UPSC Tips & Tricks',
//             img:tips
//         },
//         {
//             id:6,
//             name:'Test',
//             img:test
//         },
//     ]
//   return (
//      <Container sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
//      <Box sx={{display:'flex',flexDirection:"column",alignItems:'center',justifyContent:'center',width:'100%'
//     }}>
//       <Typography variant='h2' sx={{marginBottom:'20px'}}>
//         NOTES
//       </Typography>
//       <Grid sx={{display:'flex',flexDirection:"row",alignItems:'center',justifyContent:'center'}} container spacing={2}>
//        {data.map((ele)=>(
//         <Grid  key={ele.id} item lg={3} md={4} sm={6} xs={12}>
//         <Card >
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height="170"
//             image={ele.img}
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography sx={{fontWeight:500,color:'#00022e'}} >
//               {ele.name}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//         </Grid>
//        ))}
//        </Grid>
//        </Box>
//        <div class="wrapper">
//        <div class="card">
//            <img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
//            <div class="info">
//                <h1>Mountain</h1>
//                <p>Big, tall mountains look really cool and make nature super awesome!</p>
//                <button>Read More</button>
//            </div>
//        </div>

//        <div class="card">
//            <img src="https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
//            <div class="info">
//                <h1>Road</h1>
//                <p>Roads pave the way for journeys, connecting destinations and weaving the fabric of travel.</p>
//                <button>Read More</button>
//            </div>
//        </div>

//        <div class="card">
//            <img src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&fit=crop&w=311&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
//            <div class="info">
//                <h1>Protester</h1>
//                <p>Protesters voice their concerns, demanding change and standing up for what they believe is right.</p>
//                <button>Read More</button>
//            </div>
//        </div>
//    </div>
//      </Container>
//   )
// }

// export default Course
import { Box, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import "../Notespresent/notesStyle.css"
const Course = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%'}}>
    <Typography sx={{fontWeight:'700',fontSize:isMobileView?"25px":"40px",marginBottom:'10px'}}>NOTES PROVIDED</Typography>
    <Box sx={{display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'center',width:'100%'}}>
    <div style={{display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'center',gap:'10px'}} class="wrapper">
    <div style={{marginBottom:isMobileView?"40px":"null"}} class="card">
    <img style={{width:'100%',objectFit:'cover'}} src={pyq}/>        <div class="info">
            <h1 >Ncert Notes</h1>
            <button>Read More</button>
        </div>
    </div>

    <div style={{marginBottom:isMobileView?"40px":"null"}}  class="card">
        <img style={{width:'100%',objectFit:'cover'}} src={pyq}/>
        <div class="info">
            <h1>Road</h1>
            <p>Roads pave the way for journeys, connecting destinations and weaving the fabric of travel.</p>
            <button>Read More</button>
        </div>
    </div>

    <div style={{marginBottom:isMobileView?"40px":"null"}}  class="card">
    <img style={{width:'100%',objectFit:'cover'}} src={pyq}/>        <div class="info">
            <h1>Protester</h1>
            <p>Protesters voice their concerns, demanding change and standing up for what they believe is right.</p>
            <button>Read More</button>
        </div>
    </div>
</div>
</Box>
    </Container>
  )
}

export default Course