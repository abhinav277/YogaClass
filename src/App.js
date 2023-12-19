
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import NewUser from './Pages/NewUser';
import RegisterUser from './Pages/RegisterUser';

const App = () => {
  return (
    <div className="central">
      <div class="text-center">
      <div className='app'>
        <div className='bannerText'>
          <div class="btn btn-danger">
<div class="fs-2">
FlexMoney Yoga Classes</div></div></div>
        <div className='formForEntry'>
          <Router>
            <Routes>
              <Route path='/' element={<NewUser />} />
              <Route path='/Login' element={<RegisterUser />} />
            </Routes>
          </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
