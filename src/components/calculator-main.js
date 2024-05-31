import {useNavigate,Link} from 'react-router-dom'

import { Route, Routes } from 'react-router-dom';
export default function CalculatorMain() {
    const navigate = useNavigate()
    return (
      <div className="container d-flex flex-column justify-content-center">
        <div className="flex col">
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
      </div>
    )
  }