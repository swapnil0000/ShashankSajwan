const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors=require("cors")
const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors({
    origin: 'http://localhost:3000', // Allow requests only from this origin
    methods: ['POST'], // Allow only POST requests
  }));
  

app.post('/send-email', (req, res) => {
  const { name, fromEmail, mobileNo, message } = req.body; // Change email field name to fromEmail

  // Create transporter with Gmail credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'swapnilsrivastav1999@gmail.com', // Your Gmail email address
      pass: 'jprvohbverigfqfs' // Your App Password
    }
  });

  // Email content
  const mailOptions = {
    from: fromEmail, // Use the email submitted from the contact form as the sender address
    to: 'swapnilsrivastava1999@gmail.com', // Receiver address
    subject: 'New Contact Form Submission',
    html: `
      <h2>New Contact Form Submission</h2>
      <p>Name: ${name}</p>
      <p>Email: ${fromEmail}</p> // Use fromEmail as the user's email
      <p>Mobile No: ${mobileNo}</p>
      <p>Message: ${message}</p>
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email Sent Successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

