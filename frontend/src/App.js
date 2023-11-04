import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Dashboard from './Dashboard';
import QuestionsCard from './QuestionsCard';

function App() {
  return (
    <div>
      
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/questions" element={<QuestionsCard/>} />

          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
