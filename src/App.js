import React from 'react'
import './App.css'

import {Footer, Home, Modules, Navbar} from './containers'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Home/>
        <Modules/>
      </div>
      <Footer/>
    </div>
  )
}

export default App