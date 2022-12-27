import image from '../assets/icon-thank-you.svg'
import { Link } from 'react-router-dom'
import Button from './Button'
const Farewell = () => {
  return (
    <div
      className="flex flex-col justify-start items-center w-1/2 h-96 md:h-72 plan-select -top-14 md:top-0 relative page"
      style={{ margin: '0 auto' }}
    >
      <img src={image} alt="thank-you-icon" />
      <h1 className="text-blue-900 text-3xl md:text-4xl font-bold my-5">
        Thank you!
      </h1>
      <p className="text-gray-500 text-sm md:text-lg text-center w-72 md:w-full">
        Thanks for confirming your subscription! we hope you have fun using our
        platform. If you ever need a web app like this one, pls feel free to
        email me at jorbbey@gmail.com
      </p>
      <Link to='/'>
        <p className='bg-blue-900 w-24 h-12 rounded-lg my-20 text-white text-md font-bold cursor-pointer flex justify-center items-center transition ease-in-out delay-150 hover:scale-110'>Start Over</p>
      </Link>
    </div>
  )
}

export default Farewell
