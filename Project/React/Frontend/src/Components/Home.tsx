import Navbar from './NavBar'
import Homemiddle from './homemiddle' 
import Packages from './packages'
import Footer from './footer'
import { useLocation } from 'react-router-dom' 
import Warning from './Warning'
import { useEffect, useState } from 'react'
interface Props{
  state:{
      username:string;
    }
};
const Homepageroute = () => {
  const location = useLocation() as Props;
  const username = location.state?.username;
 
  return (
    <div>
      <Navbar />
      <Homemiddle />
      {username?<Warning text={`I am ${username}`}/>:null}
      <Packages />
      <Footer />
    </div>
  )
}

export default Homepageroute
