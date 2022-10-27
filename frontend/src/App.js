import './App.css';
import { BrowserRouter,Route, Routes,Navigate,Outlet} from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';

const isAuth = false;
const user = {
  activated: true,
}


function App() {
  return (
    <>
    <BrowserRouter>
      
      <Navigation />
      <Routes>
      <Route path='/' element={<Home />} />

    <Route element = {<GuestRoute />}>
        <Route element = {<Authenticate />} path="/authenticate" />
    </Route>
    <Route element = {<SemiprotectedRoute />}>
        <Route element ={<Activate />}  path ="/activate" />
    </Route>
    <Route element={<ProtectedRoute />}>
        <Route element = {<Rooms />} path="/rooms" />
    </Route>



      
     </Routes>
    
    </BrowserRouter>
    </>
  );
}

const GuestRoute = () =>{
  return(
     isAuth ? <Navigate to ="/rooms" /> : <Outlet/>
  )
}

const SemiprotectedRoute = () =>{
  return(
    !isAuth ? <Navigate to ="/" /> : isAuth && !user.activated ?
    <Outlet/> : <Navigate to ="/rooms" />
  )
}

const ProtectedRoute = () =>{
  return(
    !isAuth ? <Navigate to ="/" /> : isAuth && !user.activated ?
    <Navigate to = "/activate" /> : <Outlet />
  )
}









// const GuestRoute = ({children,...rest} )=>{
//   return(
//     <Route
//      {...rest} 
//         render={({location}) => {
//          return isAuth ? 
//           <Navigate to = {
//             {
//               pathname: '/rooms',
//               state: {from: location}
//             }
//           } />
//           :
//           (
//             children
//           )
//         }}
//     ></Route>
//   )
// }

export default App;
