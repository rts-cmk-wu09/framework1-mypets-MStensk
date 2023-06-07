import ListView from './pages/ListView'
import Heading from './components/Heading'
import PetCard from './templates/PetCard'
import Image from './components/Image'
import { PetTag } from './components/PetTag'
import Navigation from "./components/Navigation"
import './App.css'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  const [context, setContext] = useState({});
  return (
    <>
      <Outlet context={[context, setContext]} />
    </>
  )
}

export default App
