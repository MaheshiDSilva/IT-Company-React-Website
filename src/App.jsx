import { useState } from 'react'
import './App.css'
import img from './assets/pic 1 edit.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <img>{img}</img>
        <h1 className='sidebar'>dashboard</h1>
      </div>
    </>
  )
}

export default App
