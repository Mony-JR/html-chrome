'use client';
import React, { useEffect, useState, useRef } from 'react';
import { fetchData, IUsers } from '../../utils/FetchData';
import { MdOutlineReadMore } from "react-icons/md";
import ListUsers from './ListUsers';
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import FaveList from '../favorith/FaveList';


const Page = () => {

  const [limit, setLimit] = useState<number>(() => {
    const savedLimit = localStorage.getItem('limit');
    return savedLimit ? parseInt(savedLimit, 10) : 1;
  });

  //get id for ref to click card
  const [getID, setGetID] = useState<number>(() => {
    const savedID = localStorage.getItem('getid');
    return savedID ? parseInt(savedID, 10) : 0;
  });

  const [data, setData] = useState<IUsers[]>(() => {
    const savedData = localStorage.getItem('data');
    return savedData ? JSON.parse(savedData) : [];
  });


  const [DataFav,setDataFav]=useState<IUsers[]>(()=>{
    const saveDataFav=localStorage.getItem('fav');
    return saveDataFav ? JSON.parse(saveDataFav):[]
  })

  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : {};
  });
  
  const itemRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    async function getData() {
      const apiData: IUsers[] = await fetchData(limit, 10);
      const newData = apiData.filter(newUser => !data.some(existingUser => existingUser.id === newUser.id));
      setData([...data, ...newData]);
    }
    getData();
  }, [limit]);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
    localStorage.setItem('fav', JSON.stringify(DataFav));
    localStorage.setItem('limit', limit.toString());
    localStorage.setItem('getid', getID.toString());
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [data, limit, getID, favorites]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('data');
      localStorage.removeItem('limit');
      localStorage.removeItem('getid');
      localStorage.removeItem('favorites');
      localStorage.removeItem('fav')
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
      itemRefs.current[getID]?.scrollIntoView({ behavior: 'smooth' });
  }, [getID]);

  const handleID = (id: number) => {
    setGetID(id);
  };


  console.log("Item ref",itemRefs.current);
  

  const handleFav = (id: number) => {
    setFavorites(prevFavorites => {
      const newFavorites = {
        ...prevFavorites,
        [id]: !prevFavorites[id]
      };
      const updatedFavData = data.filter(user => newFavorites[user?.id]);
      setDataFav(updatedFavData);
      return newFavorites;
    });
  };

  const topRef = useRef<HTMLDivElement | null>(null);


  function REF(){
    console.log(topRef.current);
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  console.log(DataFav);
  

  return (
    <div  className='flex flex-col justify-center items-center'>
      <div ref={topRef}></div>
      <div className='flex justify-center items-center flex-wrap '>
        {data?.map((item) => (
          <div
            className='relative'
            key={item?.id}
            ref={(el) => itemRefs.current[item?.id] = el}
            onClick={() => handleID(item?.id)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleFav(item?.id);
              }}
              className={`cursor-pointer text-3xl z-10 absolute right-10 top-10 ${favorites[item?.id] ? 'text-red-400' : ''}`}
            >
              {favorites[item?.id] ? <IoHeartSharp /> : <IoHeartOutline />}
            </button>
            <ListUsers name={item?.name} id={item?.id} avatar={item?.avatar} />
          </div>
        ))}
      </div>
      <button onClick={() => setLimit(limit + 1)} className='text-5xl'>
        <MdOutlineReadMore />
      </button>
      {getID !== 0 && <div>Current Selected ID: {getID}</div>}
      <div className=' fixed right-2 bottom-2 '>
        <button className='p-5 bg-red-400' onClick={REF}>Click UP</button>
      </div>
      <div className=' hidden'>
        <h1>Hello</h1>
        <FaveList data1={DataFav} />
      </div>
    </div>
  );
};

export default Page;
