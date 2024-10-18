import React from 'react'
interface Props{
    text:string;
}
const Warning = ({text}:Props) => {
  return (
    <div className='alert alert-primary'>{text}</div>
  )
}

export default Warning