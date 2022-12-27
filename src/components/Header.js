import React from 'react'

const Header = (props) => {
  return (
    <div className="header w-3/4 md:w-full mx-4 mt-4 md:mx-0 md:mt-0">
      <h1 className="text-2xl md:text-4xl text-blue-900 capitalize font-bold my-1">
        {props.head}
      </h1>
      <p className="text-gray-600 text-xs md:text-lg font-medium">
        {props.text}
      </p>
    </div>
  )
}

export default Header
