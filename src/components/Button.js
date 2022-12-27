import React from 'react'

const Button = () => {
  return (
    <div className="flex items-center justify-between absolute right-10 md:right-0 bottom-3 md:-bottom-5">
      <button
        className="bg-blue-900 text-white text-sm md:text-md font-bold py-2 md:py-3 px-3 md:px-4 rounded-lg capitalize focus:outline-none focus:shadow-outline transition ease-in-out delay-150 hover:scale-110"
        type="button"
      >
        next step
      </button>
    </div>
  )
}

export default Button
