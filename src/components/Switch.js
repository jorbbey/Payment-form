// import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Switch({ clickMonth, clickYear }) {
  // const [ enabled, setEnabled ] = useState( false )
  //           onClick={() => {
  //           setEnabled(true)
  //         }}
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="flex justify-center items-center w-full">
        <Link to="/monthly_plan">
          <p className="flex justify-center items-center w-20 rounded-lg h-12 bg-gray-200 ml-2 text-sm font-bold text-gray-500 mx-7 cursor-pointer transition ease-in-out delay-150 hover:text-blue-900 hover:scale-110">
            Monthly
          </p>
        </Link>

        {/* <label class="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            className="w-9 h-3 md:w-11 md:h-4 bg-gray-200 rounded-lg peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute 
           after:-top-1 md:after:-top-0.5 after:left-[2px] after:bg-blue-900 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
          ></div>
        </label> */}
        <Link to="/yearly_plan">
          <p className="flex justify-center items-center w-20 rounded-lg h-12 bg-gray-200 ml-2 text-sm font-bold text-gray-500 mx-7 cursor-pointer transition ease-in-out delay-150 hover:text-blue-900 hover:scale-110">
            Yearly
          </p>
        </Link>
      </div>
    </div>
  )
}
