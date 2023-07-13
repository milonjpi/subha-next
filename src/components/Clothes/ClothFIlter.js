import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const ClothFIlter = () => {
  return (
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
        <Box>
          <InputBase
            fullWidth
            placeholder="Search Products..."
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            sx={{
              border: '1px solid #ccc',
              height: 58,
              color: '#555555',
              lineHeight: 1.8,
              px: '23px',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ClothFIlter;
