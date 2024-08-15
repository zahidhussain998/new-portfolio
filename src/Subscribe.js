import React, { useState } from 'react';
import { useForm } from "react-hook-form";

function Subscribe() {
  const { register, handleSubmit } = useForm();
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = (data) => {
    const subject = `Subscription Request from ${data.firstName}`;
    const body = `Hi, my name is ${data.firstName}.\n\nPlease subscribe me to your latest posts and project updates.\n\nMy email address is: ${data.email}`;

    // Trigger the mailto link
    window.location.href = `mailto:zahidzahidhusssain@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <p className="text-sm mb-2">Get my latest posts and project updates by email</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          {...register("firstName", { required: true, maxLength: 20 })}
          placeholder="First Name"
          type="text"
          className="mb-2 p-2 rounded border border-gray-300"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <input
          {...register("email", { required: true })}
          placeholder="Email"
          type="email"
          className="mb-2 p-2 rounded border border-gray-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="transition duration-200 ease-in-out bg-black text-white py-2 px-3 rounded shadow-sm cursor-pointer hover:bg-gray-800"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
