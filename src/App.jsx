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
import ComputerSingle from './singles/ComputerSingle'
import WatchSingle from './singles/WatchSingle'
import MenSingle from './singles/MenSingle'
import WomanSingle from './singles/WomanSingle'
import BookSingle from './singles/BookSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import AcSingle from './singles/AcSingle'
import KitchenSingle from './singles/KitchenSingle'
import FridgeSingle from './singles/FridgeSingle'
import SpeakerSingle from './singles/SpeakerSingle'
import TvSingle from './singles/TvSingle'


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
        <Route path='/computers/:id' element = {<ComputerSingle/>} />
        <Route path='/watches/:id' element = {<WatchSingle/>} />
        <Route path='/men/:id' element = {<MenSingle/>} />
        <Route path='/woman/:id' element = {<WomanSingle/>} />
        <Route path='/books/:id' element = {<BookSingle/>} />
        <Route path='/furniture/:id' element = {<FurnitureSingle/>} />
        <Route path='/ac/:id' element = {<AcSingle/>} />
        <Route path='/kitchen/:id' element = {<KitchenSingle/>} />
        <Route path='/fridges/:id' element = {<FridgeSingle/>} />
        <Route path='/speakers/:id' element = {<SpeakerSingle/>} />
        <Route path='/tv/:id' element = {<TvSingle/>} />
        {/* cart */}
        <Route path='/cart' element = {<UserCart/>}/>
      </Routes>
      
    </div>
  )
}

export default App
