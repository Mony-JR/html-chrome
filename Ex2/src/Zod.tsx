import React from 'react'

import { useState } from 'react';


const Zod = () => {


    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        setErrorMessage("Passwords don't match");
      } else {
        // Submit logic here, e.g., send data to server
        setSubmitted(true);
        console.log(email);
        console.log(username);
        console.log(password);
        setErrorMessage("")
        
        setEmail('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
      }
    };

  return (
    <div className='flex'>
      <form
        className='flex flex-col w-[50vh] h-[70vh]
          justify-center items-center 
          border-2 translate-x-[-50%]
          translate-y-[-50%]
          absolute left-[50%] top-[50%] gap-5 '
        onSubmit={handleSubmit}
      >
        <input type='email' placeholder='Email' value={email} onChange={handleEmailChange} />
        <input type='text' placeholder='Username' value={username} onChange={handleUsernameChange} />
        <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} />
        <input
          type='password'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {errorMessage && <div className='text-red-500'>{errorMessage}</div>}
        {!submitted && (
          <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50' disabled={submitted}>
            Submit
          </button>
        )}
      </form>
    </div>
  )
}

export default Zod
