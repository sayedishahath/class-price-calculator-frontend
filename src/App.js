import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { resetState } from './actions/calculatorAction';
import CalculatorNormal from './components/calculator-normal/calculator-normal-container';
import CalculatorPremium from './components/calculator-premium/calculator-premium-container';
import CalculatorMain from './components/calculator-main';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const location = useLocation();
  let calculatorType = '';

  if (location.pathname === '/normal-calculator') {
    calculatorType = '- Standard';
  } else if (location.pathname === '/premium-calculator') {
    calculatorType = '- Premium';
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/normal-calculator') {
      // Reset state when navigating to Normal Calculator
      dispatch(resetState());
    } else if (location.pathname === '/premium-calculator') {
      // Reset state when navigating to Premium Calculator
      dispatch(resetState());
    }
  }, [location, navigate, dispatch]);
  return (
    <div className="App container">
      <div className='flex gap-3 items-center justify-start flex-row mb-6 mt-3'>
        <img src='./edize-logo.jpg' className=' w-23 h-10' alt='logo'></img> 
        <h1 className='text-3xl font-bold' style={{ fontSize: '1.5rem' }}>
          Class Price Calculator {calculatorType}
        </h1>
      </div>
      <Routes>
        <Route path='/' element={<CalculatorMain/>}/>
        <Route path="/normal-calculator" element={<CalculatorNormal/>}/>
        <Route path="/premium-calculator" element={<CalculatorPremium/>}/>
      </Routes>
    </div>
  )
}

export default App;