import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import S3 from './components/S3/S3'
import Overview from './components/Overview/Overview'
import { Route, Routes } from 'react-router-dom'
import CloudFront from './components/CloudFront/CloudFront'
import EC2 from './components/EC2/EC2'
import Cognito from './components/Cognito/Cognito'
import Database from './components/Database/Database'
import ECS from './components/ECS/ECS'
import Lambda from './components/Lambda/Lambda'
import Intro from './components/Intro/Intro'

function App() {

  return (
    <Routes>
      <Route path="/Intro" element={<Intro />} />
      <Route path="/" element={<Overview />} />
      <Route path="/S3" element={<S3 />} />
      <Route path="/CloudFront" element={<CloudFront />} />
      <Route path="/EC2" element={<EC2 />} />
      <Route path="/Cognito" element={<Cognito />} />
      <Route path="/Database" element={<Database />} />
      <Route path="/ECS" element={<ECS />} />
      <Route path="/Lambda" element={<Lambda />} />

    </Routes>
  )
}

export default App
