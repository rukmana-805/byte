import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home.jsx'
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Home/>
      </div>
      <Footer/>
    </>
  )
}

export default App
