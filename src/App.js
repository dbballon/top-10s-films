import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ShowsTable from "./components/ShowsTable"

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<ShowsTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
