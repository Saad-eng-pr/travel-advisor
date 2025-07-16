import { useState, useEffect} from 'react'
import './App.css'
import Header from './components/Header/Header'
import Map from './components/Map/Map'
import List from './components/List/List'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'
import { CssBaseline } from '@mui/material' 
import { getPlacesData } from './api' 


const App = () => {
  const [places, setPlaces] = useState([]);
    const [childClicked, setChildClicked] = useState(null);

  const [coordinations, setCoordinations] = useState({});
  const [bounds, setBounds] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinations({lat: latitude, lng: longitude});
    })
  }, []);

  useEffect(() => {
    setIsLoading(true);

    if (bounds) {
      getPlacesData(bounds.sw, bounds.ne)
      .then((data) =>{ console.log(data);
        setPlaces(data)
        setIsLoading(false);
      });
    }
    
  }, [coordinations, bounds]);

  return (
      <>
        <CssBaseline />
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
          <div className="md:col-span-4">
            <List 
              places = {places}
              childClicked = {childClicked}
              isLoading = {isLoading}

            />
          </div>
          <div className="md:col-span-8">
            <Map 
              setCoordinations={setCoordinations}
              setBounds={setBounds}
              coordinations={coordinations}
              places={places}
              setChildClicked={setChildClicked}
            />
          </div>
        </div>
        
      </>
  )
}

export default App
