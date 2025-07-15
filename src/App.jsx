import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Map from './components/Map/Map'
import List from './components/List/List'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'
import { CssBaseline } from '@mui/material' 



const App = () => {

  return (
      <>
        <CssBaseline />
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
          <div className="md:col-span-4">
            <List />
          </div>
          <div className="md:col-span-8">
            <Map />
          </div>
        </div>
        
      </>
  )
}

export default App
