import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/LoginPage'

import LoginButton from './components/button'
// >>>>>>> aed1f27ad2ad8215205036ec31baac1d34bbdd22

export default function App() {
  return (
<>
<LoginButton/>

    <h1 className="text-3xl font-bold underline">
      <LoginPage/>
    </h1>

</>
      
  )
}
