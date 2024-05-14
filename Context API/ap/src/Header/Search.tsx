import React, { useContext } from 'react';
import { Get_data } from '../App';

const Search = () => {
  const { search, setSearch } = useContext(Get_data);

  return (
    <div className='flex items-center justify-center w-full h-[70px] bg-gray-300  '>

      <span></span>
      <input className='pl-5 w-[400px] rounded-md outline-none '
       type="search" placeholder="Search..." onChange={e => setSearch(e.target.value)} />
      <span></span>

    </div>
  );
};

export default Search;
