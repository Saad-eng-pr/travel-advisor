import { useState, useEffect, use} from 'react'
import './App.css'
import Header from './components/Header/Header'
import Map from './components/Map/Map'
import List from './components/List/List'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'
import { CssBaseline } from '@mui/material' 
import { getPlacesData } from './api' 


const App = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [childClicked, setChildClicked] = useState(null);

  const [coordinations, setCoordinations] = useState({});
  const [bounds, setBounds] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinations({lat: latitude, lng: longitude});
    })
  }, []);

  useEffect (() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating])
  
  useEffect(() => {
    setIsLoading(true);

    if (bounds &&bounds.sw && bounds.ne) {
      getPlacesData(type, bounds.sw, bounds.ne)
      .then((data) =>{ console.log(data);
        setPlaces(data);
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
    
  }, [type, bounds]);

  return (
      <>
        <CssBaseline />
        <Header setCoordinations={setCoordinations}/>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
          <div className="md:col-span-4">
            <List 
              places = {filteredPlaces.length? filteredPlaces : places}
              childClicked = {childClicked}
              isLoading = {isLoading}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
          </div>
          <div className="md:col-span-8">
            <Map 
              setCoordinations={setCoordinations}
              setBounds={setBounds}
              coordinations={coordinations}
              places={filteredPlaces.length? filteredPlaces : places}
              setChildClicked={setChildClicked}
            />
          </div>
        </div>
        
      </>
  )
}

export default App
