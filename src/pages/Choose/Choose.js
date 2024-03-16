import { Box, Card, CardContent, CardMedia, Container, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import modern from "../Choose/modern.png";
import study from "../Choose/study.png";
import trackrecord from "../Choose/trackrecord.png";
import experience from "../Choose/experience.png";
import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
const Choose = () => 
{
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("sm"))
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateIn();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateIn = () => {
    gsap.to(cardRef.current, {
      y: '-50px',
      opacity: 1,
      duration: .5,
      ease: 'power4.out',
    });
  };

  const choosedata = [
    {
      id: 1,
      img: modern,
      title: 'Direct Contact With Sir',
      value: 'Throughout your UPSC preparation journey, Shashank Sajwan Sir will provide direct support, addressing every query from prelims to mains and interviews. His guidance via WhatsApp and calls ensures thorough assistance at every step of your endeavor. '
    },
    {
      id: 2,
      img: study,
      title: 'We Track Your Progress',
      value: "After we provide weekly targets aspirants are requested to send their weekly report to sir. Our dedicated team will closely monitor your UPSC journey, providing guidance through tests, live classes, module assessments, and personalized calls. We're committed to supporting your progress every step of the way.",
    },
    {
      id: 3,
      img: trackrecord,
      title: 'Weekly Micro Targets ',
      value: "In India, we've launched a pioneering initiative emphasizing weekly targets. Through a meticulously crafted module, micro weekly goals are allocated, fostering better assessment and preparation. This approach aims to enhance your readiness through structured milestones, ensuring progress and efficacy.",
    },
    {
      id: 4,
      img: experience,
      title: 'Test Marks Assessment',
      value: " Weekly test marks submission assessment ensures continuous progress tracking, optimizing your learning journey. Aspirants send their weekly test scores directly to sir for regular feedback of their performance. These regular evaluations offer invaluable insights, guiding you towards improvement and success.."
    },
    {
      id: 5,
      img: study,
      title: 'Course Ends, Personal Touch Remains.',
      value: "The key highlight of this program is its personal connection with Shashank Sajwan sir. Even after the course concludes, the personal touch continues. Access to his guidance remains available, ensuring ongoing support and mentorship for an extended period."},
      {
        id: 6,
        img: experience,
        title: 'Full-Fledged Preparation',
        value: "Introducing a pioneering platform for CSE Aspirants, providing comprehensive preparation with meticulous guidance. Our innovative initiative covers GS, CSAT, Current Affairs, Syllabus Understanding, PYQ Analysis, Weekly Tests, Answer writing, and exhaustive lectures & notes. It's a holistic solution empowering aspirants with the tools to excel."
      },
  ];


  return (
    <Container
    ref={cardRef}
    sx={{
      backgroundColor: '#fbfbf9',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobileView ? 'column' : 'row',
        justifyContent: 'space-between',
        width: '100%',
        margin: '30px'
      }}
    >
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%'}}>
        <Typography sx={{fontSize:'53px',fontWeight:'500'}}>WHY  US!</Typography>
      </Box>
    </Box>
    <Grid sx={{display:'flex',flexDirection:'row', }} container spacing={3}>
      {
        choosedata.map((ele) => (
          <Grid    item lg={4} md={4} sm={6} xs={12} key={ele.id}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  width: '100%',
                  height:'250px',
                  maxWidth: 400, // Max width for lg and md breakpoints
                },
              }}
            >
              <Paper sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent:'center',width:'300px',margin:'auto' }} elevation={3}>
                <img style={{ width: '110px',margin:'5px'}} src={ele.img} alt={ele.title} />
                <Box sx={{display:"flex",flexDirection:'column'}}>
                <Typography variant='h4'>{ele.title}</Typography>
                <Typography  sx={{ margin: '6px', fontSize: '12px' }} >{ele.value}</Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        ))
      }
    </Grid>
  </Container>
  
  );
}

export default Choose;


// <Card sx={{ maxWidth: 370 }}>
// <CardMedia
//   component="img"
//   sx={{ objectFit: 'cover', height: '150px' }} // Specify object-fit and height
//   src={ele.img}
//   alt={ele.title}
// />
// <CardContent>
//   <Typography gutterBottom variant="h5" component="div">
//     {ele.title}
//   </Typography>
//   <Typography variant="body2" color="text.secondary">
//     {ele.value}
//   </Typography>
// </CardContent>
// </Card>