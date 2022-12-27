import Header from './Header'
import AddOns from './AddOns'
import Button from './Button'
import { Link } from 'react-router-dom'

const MonthlyAddons = () => {
  return (
    <div className="relative plan-select flex flex-col justify-around items-center mx-16 -mt-4 md:mt-0 page">
      <Header
        head="pick add-ons"
        text="Add-ons help enhance your gaming experience"
      />
      <AddOns
        input="checkbox"
        head="Online services"
        text="Access to multiplayer games"
        price="+$1/mo"
      />
      <AddOns
        input="checkbox"
        head="Larger storage"
        text="Extra 1TB of cloud storage"
        price="+$2/mo"
      />
      <AddOns
        input="checkbox"
        head="Costomizeble profile"
        text="Custom theme on your profile"
        price="+$2/mo"
      />
      <div className="-ml-40 md:-ml-96">
          <Link to="/monthly_plan">
            <p className="capitalize text-xm text-gray-400 cursor-pointer w-20 h-10 py-2 mx-10 my-10 flex justify-center rounded-lg transition ease-in-out delay-150 hover:bg-gray-300 hover:scale-105">
              go back
            </p>
          </Link>
      </div>
      <Link to="/summary_monthly">
        <Button />
      </Link>
    </div>
  )
}

export default MonthlyAddons
