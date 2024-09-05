import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './Components/Home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black'>
    <Home/>
    </div>
  )
}

export default App
