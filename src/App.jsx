import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Loader from './Components/Loader';
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import MobileMenu from './Components/MobileMenu';
import CustomCursor from './Components/CustomCursor'
import './index.css'
import Skills from './Components/Skills'

function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [count, setCount] = useState(0)
  const [triggerHomeAnimation, setTriggerHomeAnimation] = useState(false);  // <-- NEW STATE

  const handleHeaderAnimationComplete = () => {  // <-- NEW FUNCTION
    // Trigger the Home component's animation
    setTriggerHomeAnimation(true);
  };

  return (
    <>

      {!loadingFinished && <Loader onFinish={() => setLoadingFinished(true)} />}
      {loadingFinished && (
        <>
          <CustomCursor />
          <Header onHeaderAnimationComplete={handleHeaderAnimationComplete} />  {/* <-- Pass function */}
          <Home triggerHomeAnimation={triggerHomeAnimation} />  {/* <-- Pass state */}
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
}

export default App
