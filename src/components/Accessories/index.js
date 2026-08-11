import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Accessories = () => {
  return (
    <Box component="section">
      <Box
        sx={{
          backgroundImage: 'url(/images/accessories/bg.jpg)',
          minHeight: 200,
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
            Accessories
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Box sx={{ py: 10 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={3}>
              <Box>
                <Box sx={{ mb: 5 }}>
                  <InputBase
                    fullWidth
                    placeholder="Search Accessories..."
                    endAdornment={
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    }
                    sx={{
                      border: '1px solid #ccc',
                      height: 46,
                      fontSize: 14,
                      color: '#555555',
                      lineHeight: 1.8,
                      px: '23px',
                      borderRadius: 2,
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: 'Open Sans',
                    fontSize: 18,
                    color: '#333333',
                    lineHeight: 1.5,
                    fontWeight: 700,
                    pb: '10px',
                    mb: 2,
                  }}
                >
                  Filter
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography
                  sx={{
                    fontFamily: 'Open Sans',
                    fontSize: 18,
                    color: '#555555',
                    lineHeight: 1.5,
                    mb: 1.5,
                  }}
                >
                  Color
                </Typography>
                <Box sx={{ mb: 5 }}>
                  {[
                    '#00bbcc',
                    '#2c6ed5',
                    '#ffa037',
                    '#ff5337',
                    '#a88c77',
                    '#393939',
                    '#cccccc',
                  ].map((el) => (
                    <Box
                      key={el}
                      sx={{
                        display: 'inline-block',
                        width: 25,
                        height: 25,
                        borderRadius: '50%',
                        mr: 1.5,
                        backgroundColor: el,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: 13,
                  color: 'red',
                  p: 1,
                  border: '1px solid #66666617',
                  borderRadius: 2,
                }}
              >
                No Accessories Found
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Accessories;
