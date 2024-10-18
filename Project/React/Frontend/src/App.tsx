import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import PackageDetails from './Components/PackageDetails';
function App() {
 return(
 <>
 <BrowserRouter>
 <Routes>
  <Route path={'/'} element={<Login/>} />
  <Route path={'/register'} element={<Register/>}></Route>
  <Route path={'/home'} element={<Home/>}></Route>
  <Route path={'/package-details'} element={<PackageDetails/>}></Route>
 </Routes>
 </BrowserRouter>
 </>
 );
}

export default App
