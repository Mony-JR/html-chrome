'use client';

import React, { useEffect, useState } from 'react';
import { IUsers } from '@/utils/FetchData';
import ListUsers from '../home/ListUsers';

interface FaveListProps {
  data1?: IUsers;
}

const FaveList: React.FC<FaveListProps> = ({ data1 }) => {
  const [users, setUsers] = useState<IUsers>();

  useEffect(() => {
    if (data1) {
      localStorage.setItem('fav', JSON.stringify(data1));
      setUsers(data1);
    } else {
      const storedData = localStorage.getItem('fav');
      if (storedData) {
          const parsedData = JSON.parse(storedData);
          setUsers(parsedData);
      }
    }
  }, [data1]);

  console.log("Users", users);


  return (
    <div className='flex justify-center items-center flex-col mt-10 '>
      <h1 className='text-3xl'>Favorite User</h1>
      <div className='flex justify-center items-center flex-wrap'>
        {users?.map((item) => (
          <div key={item.id}>
            <ListUsers name={item.name} id={item.id} avatar={item.avatar} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaveList;
