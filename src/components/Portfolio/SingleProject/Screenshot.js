import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';

const Screenshot = ({ screenshot }) => {
  return (
    <Box sx={{ mb: '100px' }}>
      <Grid container spacing={4}>
        {screenshot.map((item) => (
          <Grid key={item} item xs={12} md={6}>
            <Box
              sx={{
                height: 400,
                overflow: 'hidden',
                borderRadius: '20px',
                background: '#d9dde7',
              }}
            >
              <ImageWrapper
                src={item}
                alt="screenshot"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Screenshot;
