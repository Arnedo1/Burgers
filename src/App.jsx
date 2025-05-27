import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import HealineCards from "./components/HealineCards"
import Food from "./components/Food"
import { useState, useEffect } from "react"

function App() {
  const [overlay, setOverlay] = useState(false)
  const [selected, setSelected] = useState('')
  
  useEffect(() => {
    if (overlay) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [overlay])
     
  return (
    <div className="relative">
      {overlay && (
        <div 
          onClick={() => setOverlay(!overlay)} 
          className='fixed flex items-center justify-center z-10 inset-0 bg-black/90'
        >
          <img 
            className="h-[400px] w-4/5 sm:w-[400px] sm:h-[400px] object-cover" 
            src={selected.image} 
            alt="Selected food" 
          />
        </div>
      )}
      <NavBar/>
      <Hero/>
      <HealineCards/>
      <Food 
        overlay={overlay} 
        setOverlay={setOverlay} 
        selected={selected} 
        setSelected={setSelected} 
      />
    </div>
  )
}

export default App