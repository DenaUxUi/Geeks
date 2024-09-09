import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage/HomePage";
import SecondPage from '../pages/SecondPage/SecondPage'; 
import Detail from '../pages/Details/Detail';
import PersonalPage from '../pages/Personal Page/PersonalPage';
import Login from '../pages/Login/Login';
import SignUp from '../pages/Login/SignUp'
import Cart from '../pages/Cart/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SecondPage" element={<SecondPage />} /> 
          <Route path='/Detail' element={<Detail />} />
          <Route path='/PersonalPage' element={<PersonalPage />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/SignUp' element={<SignUp />}/>
          <Route path='/Cart' element={<Cart />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
