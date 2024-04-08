import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Refund = () => {
  const {pathname}=useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Container sx={{marginTop:'110px',marginBottom:'20px'}}>
    <Box sx={{display:'flex',flexDirection:'column',marginTop:'20px'}}>
      <Typography variant='h2'>Cancellation/Refund Policy</Typography>

      <Typography sx={{marginTop:'5px'}} variant='h6'>Our company believes in helping its customers as far as possible, and has therefore a liberal cancellation policy under this policy:

      Cancellations will be considered only if the request is made within 12 hours of placing an order. However, the cancellation request will not be entertained if the orders have been completed, or if we have initiated the process of the courses either ourselves or through the vendors/merchant/representatives whom we may appoint from time to time.
      
      No cancellations are entertained for those products that the Shashank Sajwan  marketing team has given special offers on various purposes, including but not limited to special occasions like Holi, Diwali, Valentine’s Day, specific examination etc. These are limited occasion offers and there for cancellations or not possible.
      
      In case you feel that the product received is not as shown or promised as per hour representatives and as per your expectations, you must bring it to the notice of our customer services within 24 hours of receiving the product or service. The customer service team after looking into your complaint will take an appropriate decision.</Typography>

      <Typography variant='h4' sx={{marginTop:'5px'}}>Refund Policy</Typography>

      <Typography variant='h6' sx={{marginTop:'5px'}}>There is no refund policy (refund would be proceed only in case if you have made payment more than once for the same product or service).</Typography>
      </Box>.
      </Container>
  )
}

export default Refund