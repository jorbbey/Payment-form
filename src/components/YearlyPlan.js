import Header from './Header'
import Plans from './Plans'
import SwitchFunc from './Switch'
import Button from './Button'
import arcadeIcon from '../assets/icon-arcade.svg'
import advancedIcon from '../assets/icon-advanced.svg'
import proIcon from '../assets/icon-pro.svg'
import { Link } from 'react-router-dom'

const YearlyPlan = () => {
  return (
    <div className="relative plan-select mx-10 mt-44 md:mt-0 page">
      <Header
        head="select your plan"
        text="You have the option of monthly or yearly billing"
      />

      <div
        className="flex flex-col md:flex-row justify-around items-center w-full"
        style={{ margin: '50px auto' }}
      >
        <Plans
          image={arcadeIcon}
          alt="arcade-icon"
          name="arcade"
          price="$90/yr"
          bonus="2 months free"
        />
        <Plans
          image={advancedIcon}
          alt="advanced-icon"
          name="advanced"
          price="$120/yr"
          bonus="2 months free"
        />
        <Plans
          image={proIcon}
          alt="pro-icon"
          name="pro"
          price="$150/yr"
          bonus="2 months free"
        />
      </div>
      <div>
        <SwitchFunc />
      </div>
      <div>
        <Link to="/">
          <p className="capitalize text-xm text-gray-400 cursor-pointer w-20 h-10 py-2 mx-10 my-10 flex justify-center rounded-lg transition ease-in-out delay-150 hover:bg-gray-300 hover:scale-105">
            go back
          </p>
        </Link>
      </div>
      <Link to="/addons_yearly">
        <Button />
      </Link>
    </div>
  )
}

export default YearlyPlan
