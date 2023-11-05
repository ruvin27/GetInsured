<<<<<<< HEAD
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Dashboard from './Dashboard';
import QuestionsCard from './QuestionsCard';
import Result from './Result';

function App() {
  return (
    <div>
      
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/questions" element={<QuestionsCard/>} />
            <Route path="/result" element={<Result/>} />
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import QuestionsCard from "./QuestionsCard";
import Navbar from "./Navbar";
function App() {
	return (
		<div>
			<Navbar />
>>>>>>> 70eb60cd2215f9f21bac97cb8f2b718806dc6035

			<Router basename="/">
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/questions" element={<QuestionsCard />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
