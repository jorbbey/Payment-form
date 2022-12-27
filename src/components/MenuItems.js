import { Link } from 'react-router-dom'
const MenuItems = () => {
  const menuItems = {
    texts: {
      firstHead: 'step 1',
      firstText: 'your info',
      secondHead: 'step 2',
      secondText: 'select your plan',
      thirdHead: 'step 3',
      thirdText: 'adds on',
      fourthHead: 'step 4',
      fourthText: 'summary',
    },
  }
  const numbers = [
    { id: 0, number: 1 },
    { id: 1, number: 2 },
    { id: 2, number: 3 },
    { id: 3, number: 4 },
  ]

  return (
    <div
      className="flex flex-col justify-around items-center h-14 md:h-auto relative"
      style={{ width: '65%', marginLeft: '8px', top: '30px' }}
    >
      <div
        className="flex justify-around items-center"
        style={{ width: '100%', margin: '15px auto' }}
      >
        <div className="flex md:flex-col justify-between items-center my-0 md:my-1 serial-btn">
          <Link to="/">
            <li
              className="text-xl border rounded-full w-12 h-12 list-none cursor-pointer hover:bg-blue-300"
              style={{ margin: '10px 15px' }}
            >
              <div className="flex flex-col mx-4 my-2 text-white cursor-pointer">
                1
              </div>
            </li>
          </Link>

          <Link to="/monthly_plan">
            <li
              className="text-xl border rounded-full w-12 h-12 list-none cursor-pointer hover:bg-blue-300"
              style={{ margin: '10px 15px' }}
            >
              <div className="flex flex-col mx-4 my-2 text-white cursor-pointer">
                2
              </div>
            </li>
          </Link>

          <Link to="/addons_monthly">
            <li
              className="text-xl border rounded-full w-12 h-12 list-none cursor-pointer hover:bg-blue-300"
              style={{ margin: '10px 15px' }}
            >
              <div className="flex flex-col mx-4 my-2 text-white cursor-pointer">
                3
              </div>
            </li>
          </Link>

          <Link to="/summary_monthly">
            <li
              className="text-xl border rounded-full w-12 h-12 list-none cursor-pointer hover:bg-blue-300"
              style={{ margin: '10px 15px' }}
            >
              <div className="flex flex-col mx-4 my-2 text-white cursor-pointer">
                4
              </div>
            </li>
          </Link>
        </div>

        <div className="hidden md:flex flex-col">
          <div className="flex flex-col my-2">
            <div>
              <p className="uppercase text-white text-sm list-none">
                {menuItems.texts.firstHead}
              </p>
            </div>

            <div>
              <p className="uppercase text-white text-lg list-none">
                {menuItems.texts.firstText}
              </p>
            </div>
          </div>

          <div className="flex flex-col my-2">
            <div>
              <p className="uppercase text-white text-sm list-none">
                {menuItems.texts.secondHead}
              </p>
            </div>

            <div>
              <p className="uppercase text-white text-lg list-none">
                {menuItems.texts.secondText}
              </p>
            </div>
          </div>

          <div className="flex flex-col my-2">
            <div>
              <p className="uppercase text-white text-sm list-none">
                {menuItems.texts.thirdHead}
              </p>
            </div>

            <div>
              <p className="uppercase text-white text-lg list-none">
                {menuItems.texts.thirdText}
              </p>
            </div>
          </div>

          <div className="flex flex-col my-2">
            <div>
              <p className="uppercase text-white text-sm list-none">
                {menuItems.texts.fourthHead}
              </p>
            </div>

            <div>
              <p className="uppercase text-white text-lg list-none">
                {menuItems.texts.fourthText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuItems
