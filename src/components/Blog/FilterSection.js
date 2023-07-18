import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import productData from './../../assets/data/products';
import ClothSideCard from '../ui/ClothSideCard';

const FilterSection = () => {
  return (
    <Box>
      <Box sx={{ pb: 3 }}>
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
            height: 50,
            color: '#555555',
            lineHeight: 1.8,
            px: '23px',
            borderRadius: '23px',
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
            fontSize: { xs: 20, md: 18, lg: 20 },
            color: '#333333',
            lineHeight: 1.2,
            fontFamily: 'Cinzel',
            pt: '45px',
            pb: '34px',
            fontWeight: 600,
          }}
        >
          Featured Products
        </Typography>
        {productData?.slice(0, 5).map((el) => (
          <ClothSideCard key={el.id} data={el} />
        ))}
      </Box>
    </Box>
  );
};

export default FilterSection;
