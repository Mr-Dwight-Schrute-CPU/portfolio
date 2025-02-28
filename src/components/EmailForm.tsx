'use client'
import sendMail from '@/helpers/SendMail';
import { toast } from '@/hooks/use-toast';
import React, { useState } from 'react';

const EmailForm: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userMessage, setUserMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Basic validation
    if (!userName || !userEmail || !userMessage) {
      setError('All fields are required.');
      return;
    }

    try {
      sendMail(userName, userEmail, userMessage);
      setUserName('');
      setUserEmail('');
      setUserMessage('');
      setError(''); // Clear error message
      toast({
        title: 'Success',
        description: 'Email sent successfully!',
        variant : "default"
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: 'Send Error',
        description: 'Email failed to send. Please try again later.',
        variant : "destructive"
      });
    }
  };

  return (
    <div className="mb-24 mx-auto mt-5 p-6  border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Send Me A Message</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className='flex md:flex-row flex-col w-full'>
          <div className="mb-4 md:w-1/2 w-full mx-2">
            <label htmlFor="userName" className="block text-sm font-medium dark:text-gray-300 text-gray-700">Name</label>
            <input
              type="text"
              placeholder='enter your name'
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="mt-1 text-black dark:text-white block w-full border  rounded-md p-2"
            />
          </div>
          <div className="mb-4 md:w-1/2 w-full mx-2">
            <label htmlFor="userEmail" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder='Enter your email'
              id="userEmail"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
              className="mt-1 block w-full border text-black dark:text-white rounded-md p-2"
            />
          </div>
        </div>
        <div className="mb-4 mx-2">
          <label htmlFor="userMessage" className="block text-sm font-medium dark:text-gray-300 text-gray-700">Message</label>
          <textarea
            id="userMessage"
            placeholder='Type your message here'
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            required
            className="mt-1 block w-full border text-black dark:text-white rounded-md p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-8 mx-2 py-2 dark:bg-green-500 dark:text-gray-700 bg-blue-500 text-white text-sm rounded-md font-semibold hover:dark:bg-white/[0.8] hover:bg-black/[0.8] hover:shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
    
  );
};

export default EmailForm;
