import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage/HomePage";
import SecondPage from '../pages/SecondPage/SecondPage'; 
import Detail from '../pages/Details/Detail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SecondPage" element={<SecondPage />} /> 
          <Route path='/Detail' element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
