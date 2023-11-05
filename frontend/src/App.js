import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Dashboard from './Dashboard';
import QuestionsCard from './QuestionsCard';
import Result from './Result';
import Navbar from "./Navbar";
function App() {
  return (
    <div>
        <Router>
		<Navbar/>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/questions" element={<QuestionsCard/>} />
            <Route path="/result" element={<Result/>} />


			
				</Routes>
			</Router>
		</div>
	);
}

export default App;
