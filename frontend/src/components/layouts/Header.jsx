import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex justify-between bg-gray-200 px-5 py-3'>
        <h1 li className='text-xl'>CECOMM</h1>
        <ul li className='flex space-x-3'>
            <li>Home</li>
            <li>Mens</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
    </div>
  )
}

export default Header