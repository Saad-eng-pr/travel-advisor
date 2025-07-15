import { useState } from 'react'
import { FormControl, InputLabel, CircularProgress, MenuItem, Select, Grid } from '@mui/material'

const List = () => {
  const [type, setType] = useState('Restaurants');
  const [rating, setRating] = useState('');

  const places = [
    { name: 'Cool Place' },
    { name: 'Best Place' },
    { name: 'Wonderful Place' },
    { name: 'Worst Place' }
  ];

  return (
    <div >
        <h2 className='text-3xl'>Search for Restaurants, Hotels & Attractions around you !</h2>
          <div className='min-w-[20px] mb-[30px] mt-5'>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
              </Select>
            </FormControl>
          </div>
            
          <div className='min-w-[50px] mb-[30px]'>
            <FormControl fullWidth>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>3.0 and above</MenuItem>
              <MenuItem value={4}>4.0 and above</MenuItem>
              <MenuItem value={4.5}>4.5 and above</MenuItem>
            </Select>
          </FormControl>
          </div>

          <Grid container spacing={3} className='mt-5'>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}> 
                <Card />
              </Grid>
            ))}
          </Grid>
        
    </div>
  )
}

export default List