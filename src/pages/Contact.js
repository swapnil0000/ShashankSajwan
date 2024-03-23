import React, { useEffect, useState } from 'react'
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


import map from "../assets/contact.png"
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useLocation } from 'react-router-dom';
const Contact = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobileView=useMediaQuery(theme.breakpoints.down("sm"))
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
  const {pathname}=useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
     <Container sx={{display:'flex',flexDirection:'column',marginTop:'100px',alignItems:'center',justifyContent:'center'}}>
     
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%'}}>
       <Typography sx={{fontSize:'50px',fontWeight:'700',marginTop:isMobileView?"":"60px",display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>Contact Us</Typography>
       <Typography sx={{fontSize:isMobileView?"12px":"20px",display:isMobileView?"none":"row"}}>We appreciate your feedback. Please don't hesitate to reach out to us for any support, inquiries, or assistance you may need. Our team is dedicated to assisting you and providing the information you require.</Typography>
      </Box>

      <Box sx={{display:'flex',flexDirection:isMobileView?"column":"row",marginTop:isMobileView?"10px":"70px",width:'100%',alignContent:'center',justifyContent:isMobileView?"center":"space-between",}}>

      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%'}}>
      <img  style={{width:'350px',height:'300px',marginTop:'20px',marginBottom:'20px'}} src={map}/>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

          <Box sx={{ backgroundColor: 'transparent', marginTop: '10px' }}>
           <TextField
              style={{width:isSmallMobileView?"300px":"350px",borderRadius:'3px',marginBottom:'40px'}}
                name="name"
                label="Name"
                variant='standard'
                value={contactDetails.name}
                onChange={handleChange}  
              />
          </Box>

          <Box sx={{ backgroundColor: 'transparent' }}>
          <TextField
                sx={{width:isSmallMobileView?"300px":"350px",borderRadius:'3px'}}
                name="email"
                label="Email"
                value={contactDetails.email}
                onChange={handleChange}  
                variant='standard'
              />
          </Box>

          <Box sx={{ backgroundColor: 'transparent', }}>
          <TextField
              style={{width:isSmallMobileView?"300px":"350px",borderRadius:'3px',margin:'40px'}}
                name="mobileNo"
                label="Mobile No"
                variant='standard'
                value={contactDetails.mobileNo}
                onChange={handleChange}/>  
          </Box>
          <Box sx={{ backgroundColor: 'transparent', }}>
          <TextField
              style={{width:isSmallMobileView?"300px":"350px",borderRadius:'3px'}}
                name="message"
                label="Message"
                value={contactDetails.place}
                onChange={handleChange}
                variant='standard'/>
          </Box>

          <Box sx={{backgroundColor: 'transparent'}}>
           <button style={{padding:'7px',marginTop:'10px',fontSize:'15px',color:'white',border:'none',backgroundColor
          :'rgba(0, 135, 104, 1)'}}>Submit</button>
          </Box>
      </Box>

      
      </Box>
    

       

      
    
      <Box sx={{marginTop:'30px',display:'flex',flexDirection:'column',marginBottom:'60px'}}>
       <Typography variant={isSmallMobileView?'h4':"h2"}>Want to contact us via e-mail?</Typography>
       <Typography sx={{fontSize:isSmallMobileView?'15px':'20px',marginTop:'5px'}}>For correspondence, kindly reach out to us at <span style={{fontWeight:'600'}}>ask.iasmentor@gmail.com. </span>
       <Typography sx={{fontSize:isSmallMobileView?'15px':'20px',marginTop:'10px'}}>All email communications are managed and responded to by our Head Office located in Dehradun.</Typography> Should you seek guidance on Civil Services Exam preparation or wish to share your feedback/suggestions for us, we welcome you to send us an email.</Typography>

      </Box>

      <Box sx={{display:'flex',flexDirection:isSmallMobileView?"column":"row",alignItems:'center',justifyContent:'center',gap:isSmallMobileView?"5px":"30px"}}>
       <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'8px'}}>
        <LocalPhoneIcon/>
        <Typography> +91 6386455982</Typography>
       </Box>
       <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'8px'}}>
       <MailIcon/>
         <Typography>ask.iasmentor@gmail.com</Typography>
      </Box>
     
      </Box>
     </Container>
  )
}

export default Contact

// <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
//     <Typography variant='h3'>Enquiry Form</Typography>
//     <TextField
//     style={{width:'350px',borderRadius:'3px',marginBottom:'40px',marginTop:'10px'}}
//       name="name"
//       label="Name"
//       variant='standard'
//       value={contactDetails.name}
//       onChange={handleChange}  
//     />

//     <TextField
//       sx={{width:'350px',borderRadius:'3px'}}
//       name="email"
//       label="Email"
//       value={contactDetails.email}
//       onChange={handleChange}  
//       variant='standard'
//     />

//     <TextField
//     style={{width:'350px',borderRadius:'3px',margin:'40px'}}
//       name="mobileNo"
//       label="Mobile No"
//       variant='standard'
//       value={contactDetails.mobileNo}
//       onChange={handleChange}/>  

//     <TextField
//     style={{width:'350px',borderRadius:'3px'}}
//       name="message"
//       label="Message"
//       value={contactDetails.place}
//       onChange={handleChange}
//       variant='standard'/>
//       <Button sx={{backgroundColor:'#212529',marginTop:'20px'}} variant='contained'>Submit</Button>
//   </Box>
//   </Box>
//       </Box>
