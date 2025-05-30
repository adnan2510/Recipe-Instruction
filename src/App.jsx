import React from 'react'
import Mainrouter from './routes/Mainrouter'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='w-screen h-screen overflow-hidden bg-red-500'>
      <Navbar />
      <Mainrouter />
    </div>
  )
}

export default App