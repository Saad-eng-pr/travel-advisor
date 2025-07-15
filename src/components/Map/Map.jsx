import GoogleMapReact from 'google-map-react';

const Map = () => {
  
  return (
    <div className='w-full h-80 md:h-150'>
        <GoogleMapReact
          bootstrapURLKeys = {{ key:'AIzaSyDBNPNqtxt5Oyp8G3wkNjGWdVqIC_z34sc'}}
          defaultCenter={{ lat: 10, lng: 10 }}
          center={{ lat: 34, lng: -5 }}
          defaultZoom={10}
          margin={[50,50,50,50]}
          option={''}
          onChange={''}
          onChildClick={''}
        >

        </GoogleMapReact>
    </div>
  )
}

export default Map