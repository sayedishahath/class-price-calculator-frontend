import {useNavigate,Link} from 'react-router-dom'

import { Route, Routes } from 'react-router-dom';
export default function CalculatorMain() {
    const navigate = useNavigate()
    return (
      <div className="container d-flex flex-column justify-content-center gap-4">
        <div className="flex col gap-1">
          <div className="justify-content-center">
            <Link to="/normal-calculator">
            <div className="card h-100 w-100 p-2">
                {/* Card 1content here */}
                <p>Standard calculator</p>
            </div>
            </Link>
          </div>
          <div className="justify-content-center">
            <Link to="/premium-calculator">
            <div className="card h-100 w-100 p-2">
                {/* Card 2 content here */}
                <p>Premium calculator</p>
            </div>
            </Link>
          </div>
        </div>
        <div className='flex col gap-1'>
          <div className="justify-content-center">
            <Link to="/saved-bills">
            <div className="card h-100 w-100 p-2">
                {/* Card 1content here */}
                <p>Saved Bills</p>
            </div>
            </Link>
          </div>
          <div className="justify-content-center">
            <Link to="/shared-bills">
            <div className="card h-100 w-100 p-2">
                {/* Card 1content here */}
                <p>Shared Bills</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }