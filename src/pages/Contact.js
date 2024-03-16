import React, { useState } from 'react'
import { Box, Button, Container, Divider, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import { FlexCenterColoum } from '../common';

    
//   return (
//     <FlexCenterColoum >
//     <TextField
//     style={{width:'350px',height:'40px',borderRadius:'3px',marginTop:'80px',marginBottom:'40px'}}
//       name="name"
//       label="Name"
//       value={contactDetails.name}
//       onChange={handleChange}  
//       helperText="Enter your name"
//     />

//     <TextField
//       sx={{width:'350px',height:'40px',borderRadius:'3px',margin:'40px'}}
//       name="email"
//       label="Email"
//       value={contactDetails.email}
//       onChange={handleChange}  
//       helperText="Enter your email"   
//     />

//     <TextField
//     style={{width:'350px',height:'40px',borderRadius:'3px',margin:'40px'}}
//       name="mobileNo"
//       label="Message"
//       helperText="Type your message"
//       value={contactDetails.mobileNo}
//       onChange={handleChange}/>  

//     <TextField
//       name="place"
//       label="Place"
//       value={contactDetails.place}
//       onChange={handleChange}
//       sx={{
//         width: '350px',
//         borderRadius: '3px',
//         margin: '40px',
//       }}
//       helperText="Please select your city"/>
//       <Button variant='contained'>Submit</Button>
//   </FlexCenterColoum>
//   )
// }

// export default ContactDetails


const Contact = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    mobileNo: '',
    place: ''
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactDetails({
      ...contactDetails,
      [name]: value
    });
  };
  return (
     <Container sx={{display:'flex',flexDirection:'column',marginTop:'100px'}}>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',color:'black',height:'100px',width:{xs:'100%'},marginTop:'10px'}}>
       <Typography variant='h2'>Contact Us</Typography>
       <Typography sx={{fontSize:'13px'}}>If you have any questions regarding programs, 
       facilities or suggestions to make, feel free to give us a call or fill out the form below.</Typography>
      </Box>
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Box sx={{display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',width:{lg:'100%',xs:'450px'},marginTop:'20px',justifyContent:'space-between',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>

       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:isMobileView?"100%":"50%",height:'100%' ,backgroundColor:'#212529',color:'white',marginBottom:'20px'}}>
         <Typography sx={{marginTop:'40px'}} fontSize='40px'>Contact Information</Typography>
         <Box sx={{display:'flex', alignItems:'center',gap:'10px',marginTop:'30px'}}>
         <Typography variant='h5'>Address : </Typography>
         <Typography variant='h6'> Dehradun Uttarakhand</Typography>
         </Box>
         <Divider sx={{margin:'10px', width:'80%',border:'1px solid white'}}/>

         <Box sx={{display:'flex', alignItems:'center',gap:'10px'}}>
         <Typography variant='h5'>Talk to Counselor : </Typography>
         <Typography variant='h6'> 6386455982, 9415702770</Typography>
         </Box>

         <Divider sx={{margin:'10px', width:'80%',border:'1px solid white'}}/>
         <Box sx={{display:'flex', alignItems:'center',gap:'10px'}}>
         <Typography variant='h5'>Telephone No : </Typography>
         <Typography variant='h6'> 011 4254 7314</Typography>         

         </Box>
         <Divider sx={{margin:'10px', width:'80%',border:'1px solid white'}}/>

         <Box sx={{display:'flex', alignItems:'center',gap:'10px'}}>
         <Typography variant='h5'>Email : </Typography>
         <Typography variant='h6'>swapnilsrivastava1999@gmail.com</Typography>         
         </Box>

         <Divider sx={{margin:'10px', width:'80%',border:'1px solid white'}}/>

       </Box>

       

      
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
    <Typography variant='h3'>Enquiry Form</Typography>
    <TextField
    style={{width:'350px',borderRadius:'3px',marginBottom:'40px',marginTop:'10px'}}
      name="name"
      label="Name"
      variant='standard'
      value={contactDetails.name}
      onChange={handleChange}  
    />

    <TextField
      sx={{width:'350px',borderRadius:'3px'}}
      name="email"
      label="Email"
      value={contactDetails.email}
      onChange={handleChange}  
      variant='standard'
    />

    <TextField
    style={{width:'350px',borderRadius:'3px',margin:'40px'}}
      name="mobileNo"
      label="Mobile No"
      variant='standard'
      value={contactDetails.mobileNo}
      onChange={handleChange}/>  

    <TextField
    style={{width:'350px',borderRadius:'3px'}}
      name="message"
      label="Message"
      value={contactDetails.place}
      onChange={handleChange}
      variant='standard'/>
      <Button sx={{backgroundColor:'#212529',marginTop:'20px'}} variant='contained'>Submit</Button>
  </Box>
  </Box>
      </Box>

      <Box sx={{marginTop:'30px',display:'flex',flexDirection:'column'}}>
       <Typography variant='h3'>Want to contact us via e-mail?</Typography>
       <Typography sx={{fontSize:'11px',marginTop:'5px'}}>You can write to us at swapnilsrivastava1999@gmail.com All emails are received at and replied from the Head Office at Dehradun. If you wish to request for a counselling session about Civil Services Exam or leave feedback/suggestions for the Shashank Sajwan, please e-mail us.</Typography>

       <Typography sx={{marginTop:'20px'}} variant='h3'>Center Location: Top Civil Services/IAS Coaching Institutes In India</Typography>

       <Typography  sx={{fontSize:'11.5px',marginTop:'5px'}}>Preparation of IAS exam requires a vast knowledge of general awareness, excellent communication skills, and effective guidance from Best Coaching for IAS & IAS Prep Institute in Dehradun. We can’t say it’s a myth that preparing for UPSC Exams in Dehradun will take the aspirants close to their dream of success in IAS exam.Shashank Sajwan Institute is one of the best coaching for IAS in & IAS Prep Institute in Dehradun known for IAS coaching classes in Dehradun with minimum possible fees.

       Dehradun also happens to be the education hub of north and as a new addition to this education hub and to give the civil services aspirants an innovative experience in UPSC exam preparation, Shashank Sajwan Institute has set up the Top IAS Coaching In Dehradun, Best IAS Prep Institute of India.</Typography>
      </Box>
     </Container>
  )
}

export default Contact