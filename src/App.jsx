import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
