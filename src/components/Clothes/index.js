import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ClothFIlter from './ClothFIlter';
import ClothProduct from './ClothProduct';

const Clothes = () => {
  return (
    <Box component="section">
      <Box
        sx={{
          backgroundImage: 'url(images/clothes/bg.jpg)',
          minHeight: 250,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: 'center',
              fontFamily: 'Cinzel',
              fontWeight: 500,
              fontSize: 50,
              color: '#fff',
            }}
          >
            Clothes
          </Typography>
          <Typography sx={{ fontSize: 18, color: '#fff', lineHeight: 1.8 }}>
            New Arrivals Collection {new Date().getFullYear()}
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Box sx={{ py: 5 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={3}>
              <ClothFIlter />
            </Grid>
            <Grid item xs={12} sm={9}>
              <ClothProduct />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Clothes;
