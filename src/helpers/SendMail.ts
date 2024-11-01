import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const sendMail = (userName: string, userEmail: string, userMessage: string) => {

  const serviceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
  const userID = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

  // Check if required configurations are available
  if (!serviceID || !templateID || !userID) {
    toast.error('Missing configuration. Please check your email service settings.', { position: "top-right" });
    return;
  }

  const templateParams = {
    from_name: userName,
    to_name: 'Kunal',
    from_email: userEmail,
    message: userMessage,
  };


  emailjs.send(serviceID, templateID, templateParams, userID)
    .then((response) => {
      toast.success('Email sent successfully!', { position: "top-right" });
    })
    .catch((error) => {
      console.error('Email failed to send:', error); // Log error details for debugging
      toast.error('Email failed to send. Please try again later.', { position: "top-right" });
    });
};

export default sendMail;
