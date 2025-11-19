import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import S3 from './components/S3/S3'
import Overview from './components/Overview/Overview'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/S3" element={<S3 />} />

    </Routes>
  )
}

export default App
