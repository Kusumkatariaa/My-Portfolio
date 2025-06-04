import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import './index.css'
import Skills from './Components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
