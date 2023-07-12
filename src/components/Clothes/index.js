import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Clothes = () => {
  return (
    <Box component="section">
      <Box
        sx={{
          backgroundImage: 'url(images/heading/clothHead.jpg)',
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
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'Open Sans',
                    fontSize: 18,
                    color: '#333333',
                    lineHeight: 1.5,
                    fontWeight: 700,
                    pb: '10px',
                  }}
                >
                  Categories
                </Typography>
                <Box sx={{ mb: 3 }}>
                  {['All', 'Women', 'Men', 'Kids'].map((el) => (
                    <ButtonBase
                      key={el}
                      disableRipple
                      sx={{
                        display: 'block',
                        height: 30,
                        textAlign: 'left',
                        fontSize: 15,
                        lineHeight: 1.8,
                        fontFamily: 'Open Sans',
                        color: '#888888',
                        transition: 'all 0.5s ease',
                        '&:hover': {
                          color: '#e65540',
                        },
                      }}
                    >
                      {el}
                    </ButtonBase>
                  ))}
                </Box>

                <Box>
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
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
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
                          width: 25,
                          height: 25,
                          borderRadius: '50%',
                          mr: 1.5,
                          backgroundColor: el,
                        }}
                      />
                    ))}
                  </Box>
                  <Box>
                    <InputBase
                      fullWidth
                      placeholder="Search Products..."
                      endAdornment={
                        <InputAdornment>
                          <SearchIcon />
                        </InputAdornment>
                      }
                      sx={{
                        border: '1px solid #ccc',
                        height: 58,
                        color: '#555555',
                        lineHeight: 1.8,
                        pl: '23px',
                        pr: '50px',
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Clothes;
