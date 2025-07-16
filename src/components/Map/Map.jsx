import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material' ;
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';
import { useState } from 'react';


const Map = ({setCoordinations, setBounds, coordinations, places, setChildClicked}) => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div className='w-full h-[85vh] md:h-150'>
        <GoogleMapReact
          bootstrapURLKeys = {{ key:'AIzaSyDBNPNqtxt5Oyp8G3wkNjGWdVqIC_z34sc'}}
          defaultCenter={{ lat: 34, lng: -5 }}
          center={coordinations}
          defaultZoom={10}
          margin={[50,50,50,50]}
          option={''}
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
        </GoogleMapReact>
    </div>
  )
}

export default Map