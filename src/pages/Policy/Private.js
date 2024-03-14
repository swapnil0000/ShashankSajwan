import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Private = () => {
  return (
   <Container sx={{marginTop:'80px'}}>
    <Box sx={{display:'flex',flexDirection:'column',marginTop:'20px'}}>
      <Typography variant='h2'>Privacy Policy</Typography>
      <Typography sx={{marginTop:'20px'}} variant='h6'>This platform is owned by Shashank Sajwan, operating under the name of Shashank Sajwan. 
      This privacy policy pertains to the Services made available at https://www.shashanksajwan.com (here in after “Our official website”. 
      Our official YouTube channel and official website, on which the services are availed, will be here in after collectively referred to as platform. For the purpose of this privacy policy, wherever the context, 
      so requires your, you, yourself or user shall mean any natural or legal person who browses the platform or has agreed to become a subscriber to the services available on the platform, by providing login credentials, 
      while registering on our platform as a subscribed user, using the computer/mobile/tablet or/and other devices or systems. The term we, us, our shall mean “Shashank Sajwan” or the company.
      We would like to safeguard the information you provided to us about yourself. This privacy policy is designed to tell you about the practice's regarding collection, use, and disclosure of information that you may provide via this platform. 
      Please be sure to read this entire privacy policy before using, or submitting information, to this platform. Use of this platform constitutes your consent to our privacy policy. By using this platform, you agree with the terms of this privacy policy. 
      Whenever you submit information via this platform, you can send to the collection, use and disclosure of that information in accordance with the privacy policy.</Typography>

      <Typography sx={{marginTop:'30px'}} variant='h4'>What we do with the information we gather?</Typography>

      <Typography variant='h6'>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</Typography>
      <Typography variant='h6' sx={{marginTop:'5px'}}>1: Internal record keeping.</Typography>
      <Typography variant='h6' sx={{marginTop:'5px'}}>2: We may use the information to improve our products and services.</Typography>
      <Typography variant='h6' sx={{marginTop:'5px'}}>3: We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</Typography>
      <Typography variant='h6' sx={{marginTop:'5px'}}>4: From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, WhatsApp or mail.</Typography>

      <Typography variant='h4' sx={{marginTop:'30px'}}>For how long do we retain user data?</Typography>
       
      <Typography variant='h6' sx={{marginTop:'5px'}}>Currently, we are in the practice of retaining user data while an account is active and for at least three years after words. We may alter this practice according to legal and business requirements. For example, we may land in the retention period or some data if needed to comply with law or voluntary codes of conduct, unless otherwise prohibited, we were short in the retention period for some types of data if needed to free up storage space.</Typography>


      <Typography variant='h4' sx={{marginTop:'30px'}}>Copyright</Typography>
      
      <Typography variant='h6' marginTop={'5px'}>All information displayed, transmitted or carried on platform (which means www.shashanksajwan.com ) is protected by copyright and other intellectual property laws. You may not, under any circumstances, modify, published, distribute, re-post, perform, display, or in any way, commercially exploited any of the content on the web platform.</Typography>

    </Box>
   </Container>
  )
}

export default Private