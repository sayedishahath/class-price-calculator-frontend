import logo from './logo.svg';
import './App.css';
import CalculatorNormal from './components/calculator-normal/calculator-normal-container';
import CalculatorPremium from './components/calculator-premium/calculator-premium-container';
import CalculatorMain from './components/calculator-main';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App container">
      <div className='flex gap-3 items-center justify-start flex-row mb-6 mt-3'>
      <img src='./edize-logo.jpg' className=' w-23 h-10' alt='logo'></img> 
      <h1 className='text-3xl font-bold' style={{ fontSize: '1.5rem' }}>Class Price Calculator</h1>
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
