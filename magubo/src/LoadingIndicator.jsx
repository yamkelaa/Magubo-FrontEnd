import React from 'react'
import { FaSpinner } from 'react-icons/fa';

const LoadingIndicator = () => {
  return (
     <div className="loading" style={{ width : "300px", height : "300px", display : "grid", placeContent : "center"}}>
    <FaSpinner className="loading-spinner" style={{height : "40px", width : "40px", fill : "lightseagreen"}} />
  </div>
  )
}

export default LoadingIndicator
