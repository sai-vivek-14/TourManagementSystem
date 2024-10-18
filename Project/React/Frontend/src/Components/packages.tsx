import React from 'react';
import Card from './card';
import './css_files/packages.css';
import img from './images/asset1.jpg'
import { useState,useEffect } from 'react';
import axios from 'axios'
const Packages = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
     axios.get("http://127.0.0.1:8000/card").then((response)=>{setData(response.data)})
   },[]) 
  return (
    <div className="packages">
      <h1 className="packages-heading">OUR BEST PACKAGES</h1>
      <div className="packages-container">
        {data.map((pkg) =>  {
          const {id,name,stay,price}=pkg;
          return <Card 
            pid={id}
            image={img}
            place={name}
            description={stay}
            price={price}
          />
        })}
      </div>
    </div>
  );
};

export default Packages;
