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
import Particles from './Components/Particle';
import './index.css'
import Skills from './Components/Skills'


function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [count, setCount] = useState(0)
  const [triggerHomeAnimation, setTriggerHomeAnimation] = useState(false);


  const handleHeaderAnimationComplete = () => {
    setTriggerHomeAnimation(true);
  };


  return (
    <>
      {!loadingFinished && <Loader onFinish={() => setLoadingFinished(true)} />}
      {loadingFinished && (
        <div className="relative w-full min-h-screen text-white overflow-hidden">
          {/* Particles Background - Fixed behind everything */}
          <div className="fixed inset-0 -z-10 w-full h-screen">
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          {/* Your actual content - sits above particles */}
          <div className="relative z-10">
            <CustomCursor />
            <Header onHeaderAnimationComplete={handleHeaderAnimationComplete} />
            <Home triggerHomeAnimation={triggerHomeAnimation} />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}


export default App
