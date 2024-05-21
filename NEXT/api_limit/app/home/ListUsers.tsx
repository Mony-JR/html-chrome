import React from 'react';
import { IUsers } from '../../utils/FetchData';
import Image from 'next/image';
import Link from 'next/link';


const ListUsers = ({ name,id, avatar }: IUsers) => {



  return (
    <div className='flex rounded-xl relative mt-10 justify-center flex-col items-center w-[300px] h-[300px] '>

      <Link href={`/home/${id}`}>
      <div>
        <Image src={avatar} width={200} height={200} alt='My Pic from API' />
      </div>        
      <h1>{name}</h1>
      </Link>
    </div>
  );
};

export default ListUsers;
