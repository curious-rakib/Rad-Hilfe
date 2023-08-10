import SignUp from './pages/SignUp/SignUp.pages';
import Login from './pages/Login/Login.pages';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavbarDashboard from './components/NavbarDashboard';
import Home from './pages/Home';
import SetupBikeDetails from './pages/SetupBikeDetails';
import SetupDailyCommute from './pages/SetupDailyCommute';
import Navbar from './assets';
import HealthBar from './pages/HealthBar';
import CarePlan from './pages/CarePlan';
import Cart from './pages/Cart';
import Cases from './pages/Dashboard/Cases';
import DelivaryDetails from './pages/DelivaryDetails';
import MyBike from './pages/MyBike';
import SetUpExpertCall from './pages/SetUpExpertCall';
import SetupRecreationalCommute from './pages/SetupRecreationalCommute';
import SetupDailyRoute from './pages/SetupDailyRoute';
import CurrentLocation from './components/CurrentLocation';

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
					<Route element={<NavbarDashboard />}>
						<Route
							path="/cases"
							element={<Cases />}
						/>
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
