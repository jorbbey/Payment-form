import React from 'react'

const Plans = ({ image, alt, name, price, bonus }) => {
  return (
    <div className="flex flex-row md:flex-col justify-start md:justify-around items-center md:items-start h-20 md:h-40 w-64 md:w-36 my-3 md:my-0 md:bg-white cursor-pointer hover:scale-110 plan ">
      <img src={image} alt={alt} className="mx-5" />
      <div className="mx-5">
        <p className="capitalize text-blue-900 text-lg font-bold">{name}</p>
        <p className="text-sm text-gray-500">{price}</p>
        <p className="text-blue-900 text-sm font-semibold mt-2">{bonus}</p>
      </div>
    </div>
  )
}

export default Plans
