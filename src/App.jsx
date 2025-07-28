import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import CustomCursor from './Components/CustomCursor'
import './index.css'
import Skills from './Components/Skills'

function App() {
  const [count, setCount] = useState(0)
  const [triggerHomeAnimation, setTriggerHomeAnimation] = useState(false);  // <-- NEW STATE

  const handleHeaderAnimationComplete = () => {  // <-- NEW FUNCTION
    // Trigger the Home component's animation
    setTriggerHomeAnimation(true);
  };

  return (
    <>
      <CustomCursor />
      <Header onHeaderAnimationComplete={handleHeaderAnimationComplete} />  {/* <-- Pass function */}
      <Home triggerHomeAnimation={triggerHomeAnimation} />  {/* <-- Pass state */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
