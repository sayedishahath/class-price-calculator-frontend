import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { resetState } from './actions/calculatorAction';
import CalculatorNormal from './components/calculator-normal/calculator-normal-container';
import CalculatorPremium from './components/calculator-premium/calculator-premium-container';
import CalculatorMain from './components/calculator-main';
import SavedCalculatorNormal from './components/saved-bills/calculator-normal/calculator-normal-container';
import SavedCalculatorPremium from './components/saved-bills/calculator-premium/calculator-premium-container';
import { Route, Routes, useLocation, useNavigate,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import SavedBills from './components/saved-bills/savedBills';
import SharedBills from './components/shared-bills/sharedBills';
import PrivateRoutes from './components/PrivateRoutes';
import { useAuth } from './context/AuthContext';
import { startGetMyBill } from './actions/billAction';
import { startGetUsers } from './actions/usersAction';
import { LuLogOut } from "react-icons/lu";

function App() {

  const { user, handleLogin,handleLogout } = useAuth()
  const dispatch = useDispatch()
  const location = useLocation();
  useEffect(() => {
    if(localStorage.getItem("token")) {
        (async () => {
            const response = await axios.get("http://localhost:3007/api/user/account", {
                headers : {
                    "Authorization" : localStorage.getItem("token")
                }
            })
            handleLogin(response.data)
        }) ()
    }
  }, [handleLogin])

  useEffect(()=>{
    if(localStorage.getItem("token")&&user) {
      dispatch(startGetMyBill())
      dispatch(startGetUsers())
    }
  },[dispatch,user])

 
  let calculatorType = '';

  if (location.pathname === '/normal-calculator') {
    calculatorType = '- Standard';
  } else if (location.pathname === '/premium-calculator') {
    calculatorType = '- Premium';
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/normal-calculator'||(location.pathname.includes('/saved-bills')&&location.pathname.includes('/standard'))) {
      // Reset state when navigating to Normal Calculator
      dispatch(resetState());
    } else if (location.pathname === '/premium-calculator'||(location.pathname.includes('/saved-bills')&&location.pathname.includes('/premium'))) {
      // Reset state when navigating to Premium Calculator
      dispatch(resetState());
    }
  }, [location, navigate, dispatch]);
  return (
    <div className="App container">
      {location.pathname !=='/'&&
      <div className='flex gap-3 items-center justify-start flex-row mb-6 mt-3'>
      <img src='./edize-logo.jpg' className=' w-23 h-10' alt='logo'></img> 
      <h1 className='text-3xl font-bold' style={{ fontSize: '1.5rem' }}>
        Class Price Calculator {calculatorType}
      </h1>
      <div className="text-end">
          <p className='logout-text'>Logout</p>
          <Link className="button" onClick={() => {
              const confirmation = window.confirm("Are you sure to Logout")
              if(confirmation) {
                  localStorage.removeItem("token")
                  handleLogout()
                  navigate("/")
                  window.location.reload()
              }
              }}>
              <LuLogOut className="logout-icon"/>
          </Link>
      </div>
    </div>}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path='/calculator-main' element={<CalculatorMain/>}/>
        <Route path="/normal-calculator" element={<CalculatorNormal/>}/>
        <Route path="/premium-calculator" element={<CalculatorPremium/>}/>
        <Route path='/saved-bills' element={<SavedBills/>}/>
        <Route path='/saved-bills/:billId/standard' element={<SavedCalculatorNormal/>}/>
        <Route path='/saved-bills/:billId/premium' element={<SavedCalculatorPremium/>}/>
        <Route path='/shared-bills' element={<SharedBills/>}/>
      </Routes>
    </div>
  )
}

export default App;