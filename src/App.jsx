import React from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import { Route,Routes } from 'react-router-dom'
import Navbar from './stores/components/Navbar/Navbar'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import BookPage from './stores/pages/BookPage'
import FurniturePage from './stores/pages/FurniturePage'
import ACPage from './stores/pages/ACPage'
import KitchenPage from './stores/pages/KitchenPage'
import FridgePage from './stores/pages/FridgePage'
import SpeakerPage from './stores/pages/SpeakerPage'
import TVPage from './stores/pages/TVPage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/UserCart/UserCart'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<LandingPage/>} />
        <Route path='/mobiles' element = {<MobilePage/>} />
        <Route path='/computers' element = {<ComputerPage/>} />
        <Route path='/watches' element = {<WatchPage/>} />
        <Route path='/men' element = {<MenPage/>} />
        <Route path='/woman' element = {<WomanPage/>} />
        <Route path='/books' element = {<BookPage/>} />
        <Route path='/furniture' element = {<FurniturePage/>} />
        <Route path='/ac' element = {<ACPage/>} />
        <Route path='/kitchen' element = {<KitchenPage/>} />
        <Route path='/fridges' element = {<FridgePage/>} />
        <Route path='/speakers' element = {<SpeakerPage/>} />
        <Route path='/tv' element = {<TVPage/>} />
        {/* single pages below */}
        <Route path='/mobiles/:id' element = {<MobileSingle/>} />
        {/* cart */}
        <Route path='/cart' element = {<UserCart/>}/>
      </Routes>
      
    </div>
  )
}

export default App
