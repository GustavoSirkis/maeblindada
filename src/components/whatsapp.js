import React from 'react';


import '../styles/whatsapp.css';


export default function Whatsapp() {
  return (
    <div className="whatsapp-container">
    <a href="https://api.whatsapp.com/send?phone=5562982103810" className="float" target="_parent">
    <i className="fab fa-whatsapp my-float"></i>
    </a>    
    </div>
  )
}