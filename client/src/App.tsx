

import './App.css'
import Login from './pages/Login/Login.pages'
import SignUp from './pages/SignUp/SignUp.pages'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import SetupDailyRoute from './pages/SetupDailyRoute';

import SetupBikeDetails from './pages/SetupBikeDetails';
import Days from './components/Days';
import SetupDailyCommute from './pages/SetupDailyCommute';
import SetupRecreationalCommute from './pages/SetupRecreationalCommute/index';
import HealthBar from './pages/HealthBar';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/setup-daily-route" element={<SetupDailyRoute />} />
          <Route path="/setup-bike-details" element={<SetupBikeDetails />} />
          <Route path='/setup-commute-details' element={<SetupDailyCommute />} />
          <Route path='/setup-recreation-details' element={<SetupRecreationalCommute />} />
          <Route path='/bike-health' element={<HealthBar />} />
        </Routes>

      </Router>


    </>
  )
}

export default App
