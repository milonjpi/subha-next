import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';

const SingleCloth = ({ data }) => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{ pl: { md: 10 }, textAlign: { xs: 'center', md: 'right' } }}
            >
              <Image
                src={data?.image}
                width={720}
                height={932}
                objectFit="cover"
                alt={data?.name}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ pr: { md: 10 } }}>
              <Typography
                sx={{
                  fontFamily: 'Open Sans',
                  fontSize: 24,
                  lineHeight: 1.5,
                  fontWeight: 500,
                  color: '#333',
                  pb: '14px',
                }}
              >
                {data?.name}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <StarIcon sx={{ fontSize: 22, color: '#FBBA42' }} />
                <StarIcon sx={{ fontSize: 22, color: '#FBBA42' }} />
                <StarIcon sx={{ fontSize: 22, color: '#FBBA42' }} />
                <StarIcon sx={{ fontSize: 22, color: '#FBBA42' }} />
                <StarIcon sx={{ fontSize: 22, color: '#FBBA42' }} />
              </Box>
              <Typography
                sx={{
                  fontFamily: 'open Sans',
                  fontSize: 13,
                  color: '#888888',
                  pt: '10px',
                  lineHeight: 1.8,
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                dolore velit asperiores voluptatibus mollitia est.
              </Typography>
              <Box sx={{ p: 3, mb: 4 }}>
                <Typography
                  sx={{
                    fontFamily: 'Open Sans',
                    fontSize: 13,
                    lineHeight: 1.8,
                    color: '#666666',
                    fontWeight: 500,
                    pb: 0.5,
                  }}
                >
                  <span style={{ display: 'inline-block', minWidth: 50 }}>
                    Color:
                  </span>

                  <span
                    style={{ fontSize: 12, fontWeight: 400, color: '#888888' }}
                  >
                    Black, Blue, Grey, Green, Red, White
                  </span>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Open Sans',
                    fontSize: 13,
                    lineHeight: 1.8,
                    color: '#666666',
                    fontWeight: 500,
                  }}
                >
                  <span style={{ display: 'inline-block', minWidth: 50 }}>
                    Size:
                  </span>
                  <span
                    style={{ fontSize: 12, fontWeight: 400, color: '#888888' }}
                  >
                    XS, S, M, L, XL, 2XL
                  </span>
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ pt: 2 }}>
                <Typography
                  sx={{
                    fontFamily: 'Open Sans',
                    color: '#222222',
                    fontSize: 16,
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}
                >
                  Description
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'open Sans',
                    fontSize: 13,
                    color: '#888888',
                    pt: '10px',
                    lineHeight: 1.8,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Totam dolore velit asperiores voluptatibus mollitia est. Lorem
                  ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SingleCloth;
