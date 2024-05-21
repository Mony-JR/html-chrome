import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex w-full h-[70px] justify-around items-center bg-gray-400  '>
      <h1>Logo</h1>
      <Link href={"/home"}>
        <h1>Home</h1>
      </Link>
      <Link href={"/about"}>
        <h1>About</h1>
      </Link>
      <Link href={"/favorith"}>
        <h1>Favorith</h1>
      </Link>
    </div>
  )
}

export default Header
