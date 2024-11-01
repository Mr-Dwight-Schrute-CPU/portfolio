import sendMail from '@/helpers/SendMail';
import React, { useState } from 'react';
import Card from './Card';
import { toast } from '@/hooks/use-toast';

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
      // toast({
      //   title: 'Success',
      //   description: 'Email sent successfully!',
      //   variant : "default"
      // });
    } catch (error) {
      console.error('Error sending email:', error);
      // toast({
      //   title: 'Send Error',
      //   description: 'Email failed to send. Please try again later.',
      //   variant : "destructive"
      // });
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-mono font-semibold mb-4">Send Me A Message</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="userEmail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="userMessage" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="userMessage"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full tilt-button bg-gray-500 text-white py-2 rounded-md hover:bg-gray-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
