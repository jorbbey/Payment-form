import Header from './Header'
import Plans from './Plans'
import Button from './Button'
import SwitchFunc from './Switch'
import arcadeIcon from '../assets/icon-arcade.svg'
import advancedIcon from '../assets/icon-advanced.svg'
import proIcon from '../assets/icon-pro.svg'
import { Link } from 'react-router-dom'

import React, { Component } from 'react'

class MonthlyPlan extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstPrice: '$9/mo',
      secondPrice: '$12/mo',
      lastPrice: '$15/mo',
    }
  }
  monthlyPlan = () => {
    this.setState({
      firstPrice: '$9/mo',
      secondPrice: '$12/mo',
      lastPrice: '$15/mo',
    })
  }
  yearlyPlan = () => {
    this.setState({
      firstPrice: '$90/mo',
      secondPrice: '$120/mo',
      lastPrice: '$150/mo',
    })
  }

  render() {
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
            price={this.state.firstPrice}
          />
          <Plans
            image={advancedIcon}
            alt="advanced-icon"
            name="advanced"
            price={this.state.secondPrice}
          />
          <Plans
            image={proIcon}
            alt="pro-icon"
            name="pro"
            price={this.state.lastPrice}
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
        <Link to="/addons_monthly">
          <Button />
        </Link>
      </div>
    )
  }
}

export default MonthlyPlan
