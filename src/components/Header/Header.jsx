import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import{ styles } from './styles';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

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
          
            <div className={styles.search}>
              <div className={styles.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                styles={{ root: styles.inputRoot, input: styles.inputInput }}
              />
            </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
