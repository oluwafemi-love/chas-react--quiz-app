import { useState } from 'react'
import './App.css'
import { Home } from '../../pages/Home/Home'
import Avatar from '../Avatar/Avatar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Avatar username="Oluwafemi" />
    </>
  )
}

export default App