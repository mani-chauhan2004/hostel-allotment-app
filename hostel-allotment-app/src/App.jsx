import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/LoginPage'

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <LoginPage/>
    </h1>
  )
}
