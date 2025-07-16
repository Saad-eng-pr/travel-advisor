import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import{ styles } from './styles';
import SearchIcon from '@mui/icons-material/Search';
import { useState }  from 'react';

const Header = ({setCoordinations}) => {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace()?.geometry.location.lat();
    const lng = autocomplete.getPlace()?.geometry.location.lng();
    console.log(lat, lng);

    setCoordinations({ lat, lng });
  };

  return (
    <AppBar position="static">
      <Toolbar className= {styles.toolbar}>
        <Typography variant="h5" className={styles.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={styles.title}>
            Explore new places
          </Typography>
          
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={styles.search}>
              <div className={styles.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                styles={{ root: styles.inputRoot, input: styles.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
