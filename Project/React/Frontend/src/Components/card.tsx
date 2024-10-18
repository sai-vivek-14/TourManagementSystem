import './css_files/card.css'
import { Link,useNavigate } from 'react-router-dom';
interface Props{
  pid:BigInteger;
  image:string;
  place:string;
  description:string;
  price:string;
};
const card = ({pid,image,place,description,price}:Props) => {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/package-details',{state:{id:pid}})
  }
  return (
    <>
    <div className='homepage'>
         <div className='packages'>
            <div className='package_container'>
                <div className='package_image'>
                    <img alt='image' src={image}/>
                </div>
                <div className='info'>
                    <h4 className='info-place'>{place}</h4>
                    <h5 className='info-desc'>{description}</h5>
                    <h4 className='info-price'>{price}</h4>
                    <button onClick={handleClick}>BOOK now</button>
                    <p>terms & conditions applied</p>
                </div>
            </div>
         </div>
            
      
    </div>
    </>
  )
}

export default card
