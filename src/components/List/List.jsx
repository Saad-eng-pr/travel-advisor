import { useState, useEffect, createRef } from 'react'
import { FormControl, InputLabel, CircularProgress, MenuItem, Select, Grid } from '@mui/material'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef()); 
    setElRefs(refs);
  }, [places]);

  return (
    <div className="h-[85vh] overflow-y-auto pr-2 ">
        <h2 className='text-3xl'>Search for Restaurants, Hotels & Attractions around you !</h2>
          { isLoading ? (
            <div className='flex justify-center items-center'>
              <CircularProgress size="5rem" />
            </div>
          ) : (
            <>
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

              <Grid container spacing={3} className='mt-5 '>
                {places?.map((place, i) => (
                  <Grid ref = {elRefs[i]} item key={i} size={12} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> 
                    <PlaceDetails 
                      place={place}
                      selected={Number(childClicked) === i}
                      refProp={elRefs[i]}
                      
                    ></PlaceDetails>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
    </div>
  )
}

export default List