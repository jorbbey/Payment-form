import React from 'react'
import MenuItems from './MenuItems'

const MenuBar = () => {
  return (
    <>
      <div className="menu-ctn h-full w-80">
        <MenuItems />
      </div>

      <div className="mobile-menu-ctn h-full">
        <MenuItems />
      </div>
    </>
  )
}

export default MenuBar
