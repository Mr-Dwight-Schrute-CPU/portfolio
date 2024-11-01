import { toast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';



const sendMail = (userName: string, userEmail: string, userMessage: string) => {

  const serviceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
  const userID = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

  // Check if required configurations are available
  if (!serviceID || !templateID || !userID) {
    toast({
        title: 'Configuration Error',
        description: 'Missing configuration. Please check your email service settings.',
        variant : "destructive"
      });
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
        console.log(response);
        toast({
            title: 'Success',
            description: 'Email Sent Successfully!',
            variant : "default"
          });
          return;
    })
    .catch((error) => {
      console.error('Email failed to send:', error); // Log error details for debugging
      toast({
        title: 'Send Error',
        description: 'Email failed to send. Please try again later.',
        variant : "destructive"
      });
    });
};

export default sendMail;
