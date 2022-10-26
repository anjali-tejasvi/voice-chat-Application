import './App.css';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
// import Register from './pages/Register/Register';
// import Login from './pages/Login/Login';
import Authenticate from './pages/Authenticate/Authenticate';

function App() {
  return (
    <>
    <BrowserRouter>
      
      <Navigation />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/authenticate' element={<Authenticate />} />
      {/* <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} /> */}
     </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
