import React from 'react';
import { TypeofFetching } from '../FectDATA';
import Image from 'next/image';
import Link from 'next/link';

const MapDATA = ({ name,id, avatar }: TypeofFetching) => {
  return (
    
    <div className='flex hover:bg-red-200 rounded-xl mt-10 justify-center flex-col items-center w-[300px] h-[300px] '>
      <Link href={`/home/${id}`}>
      <div>
        <Image src={avatar} width={200} height={200} alt='My Pic from API' />
      </div>        
      <h1>{name}</h1>

      </Link>
    </div>
  );
};

export default MapDATA;
