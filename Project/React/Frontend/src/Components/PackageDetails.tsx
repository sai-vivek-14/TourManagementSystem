import { useEffect, useState } from "react"
import { useNavigate,useLocation } from "react-router-dom"
import './css_files/packageDetails.css'
import axios from 'axios'
interface Props{
    state:{
      id:BigInteger
    }
}
const PackageDetails = () => {
  const location=useLocation() as Props
  const pid=location.state?.id
  const [data,setData]=useState({})
  useEffect(()=>{
    axios.post("http://127.0.0.1:8000/package",{id:pid}).then((response)=>{console.log(response.data);setData(response.data)})
  },[])
      return(
        <div className='package_details'>
        <center><h1>{data.name || "Loading..."}</h1></center>
        <p className='duration'>Duration: {data.duration || "Loading..."}</p>
        <p className='price'>Base Price: ${data.price || "Loading..."}</p>
        
        <h2>Famous Places:</h2>
        <div className='places'>
          {data.FamousPlaces && data.FamousPlaces.length > 0 ? (
            data.FamousPlaces.map((place, index) => (
              <div key={index} className='place'>
                <img src={place.image} alt={place.name} />
                <h3>{place.name}</h3>
                <p>{place.details}</p>
              </div>
            ))
          ) : (
            <p>No famous places available.</p>
          )}
        </div>
    
        <h2>Itinerary:</h2>
        <ul>
          {data.itinerary && data.itinerary.length > 0 ? (
            data.itinerary.map((item, index) => (
              <li key={index}>{item.day || item}</li> // Assuming `item` has a `day` property
            ))
          ) : (
            <li>No itinerary available.</li>
          )}
        </ul>
    
        <h2>Guide Details:</h2>
        <p>{data.guideDetails || "Loading..."}</p>
    
        <h2>Accommodation Details:</h2>
        <p>{data.accomodationDetails || "Loading..."}</p>
    
        <h2>Travel Details:</h2>
        <p>{data.transferDetails || "Loading..."}</p>
    
        <button className='book-now-button'>Book Now</button>
      </div>
  )
}

export default PackageDetails