import logo from './logo.svg';
import './App.css';
import Calculator from './components/calculator-container';
function App() {
  return (
    <div className="App">
      <div className='flex gap-3 items-center justify-center flex-row mb-6 mt-3'>
      <img src='./edize-logo.jpg' className=' w-23 h-10' alt='logo'></img> 
      <h1 className='text-3xl font-bold' style={{ fontSize: '1.5rem' }}>Class Price Calculator</h1>
      </div>
    <Calculator/>
  </div>
  )
}

export default App;
