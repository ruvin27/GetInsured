import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import QuestionsCard from "./QuestionsCard";
import Navbar from "./Navbar";
function App() {
	return (
		<div>
			<Navbar />

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
