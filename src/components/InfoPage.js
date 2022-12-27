import Header from './Header'
import Button from './Button'
import { Link } from 'react-router-dom'
const InfoPage = () => {
  return (
    <div className="flex flex-col justify-between items-center relative w-full md:w-1/2 mt-6 md:mt-0 mx-10 page">
      <div className="mt-6 md:mt-0 w-3/4 -ml-16 md:ml-0">
        <Header
          head="personal info"
          text="Please provide your name, email address and phone number"
        />
      </div>
      <div className="w-full">
        <form className="pt-6 pb-8 mb-4">
          <div className="flex flex-col justify-around items-center">
            <div className="" style={{ width: '85%', margin: '20px auto' }}>
              <label className="block text-blue-800 text-sm font-bold mb-2 capitalize">
                name
              </label>
              <input
                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-500 text-sm md:text-md h-8 md:h-11"
                id="username"
                type="text"
                placeholder="e.g stephen king"
              />
            </div>

            <div className="" style={{ width: '85%', margin: '20px auto' }}>
              <label className="block text-blue-800 text-sm font-bold mb-2 capitalize">
                email address
              </label>
              <input
                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-500 text-sm md:text-md h-8 md:h-11"
                id="username"
                type="email"
                placeholder="e.g stephenking@lorem.com"
              />
            </div>

            <div className="" style={{ width: '85%', margin: '20px auto' }}>
              <label className="block text-blue-800 text-sm font-bold mb-2 capitalize">
                phone number
              </label>
              <input
                 className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-500 text-sm md:text-md h-8 md:h-11"
                id="username"
                type="number"
                placeholder="e.g +1 234 567 890"
              />
            </div>
            <Link to="monthly_plan" className='my-8 md:my-0'>
              <Button />
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InfoPage
