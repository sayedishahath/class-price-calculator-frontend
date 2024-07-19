import {useNavigate,Link} from 'react-router-dom'

import { Route, Routes } from 'react-router-dom';
export default function CalculatorMain() {
    const navigate = useNavigate()
    return (
      <div className="mt-20 container flex flex-col md:flex-row justify-content-center gap-4">
        <div className="flex flex-col md:flex-row gap-1">
          <div className="justify-content-center mb-4 md:mb-0">
            <Link to="/normal-calculator">
            <div className="card h-100 w-100 p-2 hover:bg-gray-100 hover:text-gray-700   md:bg-white bg-gradient-to-r from-blue-500 to-purple-500 lg:bg-white">
                {/* Card 1content here */}
                <p>Standard calculator</p>
            </div>
            </Link>
          </div>
          <div className="justify-content-center mb-4 md:mb-0">
            <Link to="/premium-calculator">
            <div className="card h-100 w-100 p-2 hover:bg-gray-100 hover:text-gray-700  md:bg-white bg-gradient-to-r from-blue-500 to-purple-500 lg:bg-white ">
                {/* Card 2 content here */}
                <p>Premium calculator</p>
            </div>
            </Link>
          </div>
        </div>
        <hr style={{ border: '5px solid black' }} className="md:hidden " />
        <div className='flex flex-col md:flex-row gap-1'>
          <div className="justify-content-center mb-4 md:mb-0">
            <Link to="/saved-bills">
            <div className="card h-100 w-100 p-2 hover:bg-gray-100 hover:text-gray-700  bg-red-500">
                {/* Card 1content here */}
                <p>Saved Bills</p>
            </div>
            </Link>
          </div>
          <div className="justify-content-center mb-4 md:mb-0">
            <Link to="/shared-bills">
            <div className="card h-100 w-100 p-2 hover:bg-gray-100 hover:text-gray-700  bg-red-500">
                {/* Card 1content here */}
                <p>Shared Bills</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }