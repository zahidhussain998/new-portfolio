import React, { useState } from 'react';

function Subscribe() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use Formspree endpoint for form submission
    const formSpreeEndpoint = 'https://formspree.io/YOUR_FORMSPREE_ID';

    try {
      const response = await fetch(formSpreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
      } else {
        setMessage('Thank you for subscribing!.');
      }
    } catch (error) {
      setMessage('Thank you for subscribing!.');
    }
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4">
      {message ? (
        <p className="text-green-600 mb-2">{message}</p>
      ) : (
        <>
          <p className="text-sm mb-2">Get my latest posts and project updates by email</p>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              placeholder="First Name"
              type="text"
              name="FNAME"
              className="mb-2 p-2 rounded border border-gray-300"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <input
              placeholder="Email"
              type="email"
              name="EMAIL"
              className="mb-2 p-2 rounded border border-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="submit"
              value="Subscribe"
              className="transition duration-200 ease-in-out bg-black text-white py-2 px-3 rounded shadow-sm cursor-pointer hover:bg-gray-800"
            />
          </form>
        </>
      )}
    </div>
  );
}

export default Subscribe;
