import Header from './Header'
import Button from './Button'
import { Link } from 'react-router-dom'
const MonthlySummary = () => {
  return (
    <div className="relative plan-select mx-10 mt-9 page">
      <Header
        head="finishing up"
        text="Double-check every thing looks OK befor confirming"
      />
      <div
        className="flex justify-between items-center h-24 w-5/6 md:w-full rounded-lg bg-slate-200"
        style={{ margin: '20px auto' }}
      >
        <div className="flex flex-col justify-start items-left mx-4">
          <h3 className="text-md md:text-lg text-blue-900 font-bold">
            Arcade (Monthly)
          </h3>
          <a href="#!" className="underline">
            <p className="text-xs md:text-sm text-gray-500">Change</p>
          </a>
        </div>
        <p className="text-blue-900 font-bold text-lg md:text-xl mx-6">$9/mo</p>
      </div>
      <div
        className="flex flex-col justify-around items-center h-24 rounded-lg bg-slate-200 w-5/6 md:w-full"
        style={{ margin: '0 auto' }}
      >
        <div className="flex justify-between items-center w-full">
          <h4 className="text-md md:text-lg text-gray-500 mx-4">
            Online service
          </h4>
          <p className="text-md md:text-lg text-slate-700 mx-6 font-bold">
            +$1/mo
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <h4 className="text-md md:text-lg text-gray-500 mx-4">
            Larger storage
          </h4>
          <p className="text-md md:text-lg text-slate-700 mx-6 font-bold">
            +$2/mo
          </p>
        </div>
      </div>

      <div
        className="flex justify-between items-center h-20 w-5/6 md:w-full"
        style={{ margin: '10px auto' }}
      >
        <h4 className="text-md md:text-lg text-gray-500">Total (per month)</h4>
        <p className="text-blue-700 text-xl md:text-2xl font-bold">+$12/mo</p>
      </div>
      <div>
        <Link to="/addons_monthly">
          <p className="capitalize text-xm text-gray-400 cursor-pointer w-20 h-10 py-2 mx-10 my-10 flex justify-center rounded-lg transition ease-in-out delay-150 hover:bg-gray-300 hover:scale-105">
            go back
          </p>
        </Link>
      </div>
      <Link to="/thankyou">
        <Button />
      </Link>
    </div>
  )
}

export default MonthlySummary
