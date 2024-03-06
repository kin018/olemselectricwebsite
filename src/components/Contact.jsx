// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { toast } from 'react-toastify';

// function Contact() {
//     const form = useRef();

//     const sendEmail = (e) => {
//       e.preventDefault(); //prevent refresh

//       emailjs
//         .sendForm(
//           process.env.REACT_APP_YOUR_SERVICE_ID,
//           process.env.REACT_APP_YOUR_TEMPLATE_ID,
//           form.current,
//           process.env.REACT_APP_YOUR_PUBLIC_KEY
//         )
//         .then((result) => {
//           console.log(result.text);
//           e.target.reset();
//           toast.success('Success! Message sent');
//         })
//         .catch((error) => {
//           console.log(error.text);
//           toast.error('Oops! Message failed');
//         });
//     };

//   return (
//     <div>

//     </div>
//   )
// }

// export default Contact
