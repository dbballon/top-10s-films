import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ShowsTable from "./components/ShowsTable"
import Show from "./components/Show"

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/show/:id" element={<Show />} />
          <Route path="/" element={<ShowsTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
