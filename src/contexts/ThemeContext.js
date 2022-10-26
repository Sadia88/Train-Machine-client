
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Form } from "react-bootstrap";
import ReactSwitch from 'react-switch';
import './ThemeContext.css'
;



const ThemeContext = () => {


    const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    if(theme==="dark-theme"){
      setTheme("light-theme")
    }
    else {
      setTheme("dark-theme")
    }
  };
   useEffect(()=>{
    document.body.className=theme
   },[theme])
  
    return (
        <div className='d-flex align-items-center '>
         <span className='pe-2'>Light</span>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark-theme"}

   />
   <span className='ps-2'>Dark</span>
        </div>
      
    );
};

export default ThemeContext;