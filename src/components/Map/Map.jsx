import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material' ;
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';
import mapStyles from './mapStyles';

const Map = ({setCoordinations, setBounds, coordinations, places, setChildClicked, weatherData}) => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div className='w-full h-[500px] md:h-[600px] '>
        <GoogleMapReact
          bootstrapURLKeys = {{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY , libraries: ['places', 'geometry', 'drawing']}}
          defaultCenter={{ lat: 34, lng: -5 }}
          center={coordinations}
          defaultZoom={14}
          margin={[50,50,50,50]}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            styles: mapStyles
          }}
          onChange={(e) => {
            setCoordinations({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw }); //ns: north-east, sw: south-west
          }}
          onChildClick={(child) => 
            setChildClicked(child)
          }
        >
          {places?.map((place, i) => (
            <div className='absolute z-[1] hover:z-[2] transform -translate-x-1/2 -translate-y-1/2'
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {
                !isDesktop ? (
                  <LocationOnOutlinedIcon color='primary' fontSize='large' />
                ) : (
                  <Paper elevation={3} className='p-[10px] flex flex-col justify-center w-[100px]'>
                    <Typography className='title' gutterBottom variant='subtitle2'>
                      {place.name}
                    </Typography>
                    <img className='cursor-pointer' src={place.photo? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={place.name} />
                    <Rating size='small' value={Number(place.rating)} readOnly/>
                  </Paper>
                )
              }
            </div>
          ))}

          {/* {weatherData?.list?.map((data, i) => (
            <div key={i} lat={data.coord.lat} lng={data.coord.lon} height={50} width={50} >
              <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
            </div>
          ))} */}
 
          
        </GoogleMapReact>
    </div>
  )
}

export default Map