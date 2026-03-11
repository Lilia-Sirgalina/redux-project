import { useState } from 'react'
import './App.css'
import Dishes from './Components/DishesComponents/Dishes'
import Cart from './Components/Cart/Cart'
import AllCategories from './Components/Filter/AllCategories'

function App() {
  

  return (
    <div className='App'>
      <div className='block'>
        <AllCategories />        
        <Cart />
      </div>

      <div className='block'>
        <Dishes />
      </div>      
    </div>
  )
}

export default App
