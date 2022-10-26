import { useEffect, useState } from "react"
import ReactDOM from 'react-dom/client';
function Head() {
    const [ darkMode, setDarkMode ] = useState(false)
     
    useEffect(() => {
      const body = document.body
      const toggle = document.querySelector('.toggle-inner')
      
      // If dark mode is enabled - adds classes to update dark-mode styling.
      // Else, removes and styling is as normal.
      if( darkMode === true ) {
        body.classList.add('dark-mode')
        toggle.classList.add('toggle-active')
      } else {
        body.classList.remove('dark-mode')
        toggle.classList.remove('toggle-active')
      }
    }, [darkMode])
    
    return (
      <header>
        <div
          id="toggle"
          onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
        >
          <div className="toggle-inner"/>
        </div>
      </header>
    )
  }
  
  function App() {
    return (
      <main>
        <Head />
        <div id="container">
          <h1>Simple React Dark Mode.</h1>
          <p>Uses state to set a class on the body if dark mode is enabled.</p>
        </div>
      </main>
    )
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <App />,
    document.getElementById('app')
  )