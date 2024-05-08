import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, z } from 'zod';

// Define Zod schema for validation
const schema = z.object({
  email: z.string().email(),
  username: z.string().min(3),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});
interface Show{
  email: string;
  username: string;
  password: string;
  confirmPassword: string
}
const Hook = () => {
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const [submittedData, setSubmittedData] =useState<Show>()
  const onSubmit = (data:Show) => {
    console.log('Form data:', data);
     setSubmittedData(data);
    reset();
   
    
  };

  return (
    <div className='flex flex-col'>
      <form
        className='flex flex-col w-[50vh] h-[70vh]
          justify-center items-center 
          border-2 translate-x-[-50%]
          translate-y-[-50%]
          absolute left-[50%] top-[50%] gap-5 '
        onSubmit={handleSubmit(onSubmit )}
      >
        <h1 className='text-2xl'>HALO Hook form + Zod </h1>
        <input type='email' placeholder='Email' {...register('email', { required: true })} />
        {errors.email && <div className='text-red-500'>Email is required</div>}
       
        <input type='text' placeholder='Username' {...register('username', { required: true })} />
        {errors.username && <div className='text-red-500'>Username is required</div>}
       
        <input type='password' placeholder='Password' {...register('password', { required: true })} />
        {errors.password && <div className='text-red-500'>Password is required</div>}

        <input type='password' placeholder='Confirm Password' {...register('confirmPassword', { required: true })} />
        {errors.confirmPassword && <div className='text-red-500'>Confirm Password is required</div>}

        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Submit</button>
        {
        submittedData&&(
          <h1>Submitted Email: {submittedData.username}</h1>
        )
      }
      </form>
      
    </div>
  );
};

export default Hook;


