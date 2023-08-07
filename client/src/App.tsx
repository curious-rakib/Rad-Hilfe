

import './App.css';

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

import SetupDailyCommute from './pages/SetupDailyCommute';
import SetupRecreationalCommute from './pages/SetupRecreationalCommute/index';
import HealthBar from './pages/HealthBar';
import Home from './pages/Home';
import MyBike from './pages/MyBike';
import CarePlan from './pages/CarePlan';
import DelivaryDetails from './pages/DelivaryDetails';
import Navbar from './components/Navbar';
import SetUpExpertCall from './pages/SetUpExpertCall';
import Cart from './pages/Cart';
import Cases from './pages/Dashboard/Cases';
<<<<<<< HEAD
import NavbarDashboard from './components/NavbarDashboard';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/signup"
						element={<SignUp />}
					/>
					<Route
						path="/home"
						element={<Home />}
					/>
					<Route
						path="/setup-daily-route"
						element={<SetupDailyRoute />}
					/>
					<Route
						path="/setup-bike-details"
						element={<SetupBikeDetails />}
					/>
					<Route
						path="/setup-commute-details"
						element={<SetupDailyCommute />}
					/>
					<Route
						path="/setup-recreation-details"
						element={<SetupRecreationalCommute />}
					/>
				</Routes>
				<Routes>
					<Route element={<Navbar theme="secondary" />}>
						<Route
							path="/bike-health"
							element={<HealthBar />}
						/>
						<Route
							path="/delivery-details"
							element={<DelivaryDetails />}
						/>
						<Route
							path="/expert-call"
							element={<SetUpExpertCall />}
						/>
						<Route
							path="/cart"
							element={<Cart />}></Route>
					</Route>
				</Routes>
				<Routes>
					<Route element={<Navbar theme="third" />}>
						<Route
							path="/care-plan"
							element={<CarePlan />}
						/>
						<Route
							path="/my-bike"
							element={<MyBike />}
						/>
					</Route>
				</Routes>

				<Routes>
					<Route element={<NavbarDashboard theme="third" />}>
						<Route
							path="/cases"
							element={<Cases />}
						/>
					</Route>
				</Routes>
			</Router>
		</>
	);
=======
import CyclistTabCases from './pages/CyclistTabCases';
import IndividualCyclistCase from './pages/IndividualCyclistCase';
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/setup-daily-route" element={<SetupDailyRoute />} />
          <Route path="/setup-bike-details" element={<SetupBikeDetails />} />
          <Route path='/setup-commute-details' element={<SetupDailyCommute />} />
          <Route path='/setup-recreation-details' element={<SetupRecreationalCommute />} />

          <Route element={<Navbar theme='secondary' />}>
            <Route path='/bike-health' element={<HealthBar />} />


            <Route path='/delivery-details' element={<DelivaryDetails />} />
            <Route path='/expert-call' element={<SetUpExpertCall />} />
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/cyclist-case' element={<CyclistTabCases />}></Route>
            <Route path='/individual-cyclist-case' element={<IndividualCyclistCase />}></Route>
          </Route>
          <Route element={<Navbar theme='third' />}>

            <Route path='/care-plan' element={<CarePlan />} />
            <Route path='/my-bike' element={<MyBike />} />

          </Route>
        </Routes>

        <Routes>
          <Route
            path='/cases' element={<Cases />}>
          </Route>
        </Routes>

      </Router>


    </>
  )
>>>>>>> origin/dev
}

export default App;
