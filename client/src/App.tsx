

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

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login></Login>}>

          </Route>
          <Route path="/signup" element={<SignUp></SignUp>}>

          </Route>
          <Route path="/setup-daily-route" element={<SetupDailyRoute></SetupDailyRoute>}>

          </Route>
        </Routes>

      </Router>


    </>
  )
}

export default App
