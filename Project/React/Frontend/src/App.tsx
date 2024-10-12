import Navbar from './Components/NavBar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
function App() {
 return(
 <>
 <BrowserRouter>
 <Routes>
  <Route path={'/'} element={<Login/>} />
  <Route path={'/register'} element={<Register/>}></Route>
  <Route path={'/home'} element={<><Navbar/><Home/></>}></Route>
 </Routes>
 </BrowserRouter>
 </>
 );
}

export default App
