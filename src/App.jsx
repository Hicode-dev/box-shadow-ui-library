import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './Box'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <Box />
    </div>
  )
}

export default App
