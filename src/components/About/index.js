import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const About = () => {
  return (
    <Box component="section">
      <Box
        sx={{
          backgroundImage: 'url(/images/about/bg.jpg)',
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
            About
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="lg">
        <Box sx={{ py: 10 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <Image
                src="/images/about/banner.jpg"
                width={720}
                height={866}
                objectFit="cover"
                alt="banner"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Box>
                <Typography
                  component="h2"
                  sx={{
                    fontSize: 25,
                    lineHeight: 1.2,
                    color: '#333333',
                    fontFamily: 'Cinzel',
                    pb: '16px',
                    fontWeight: 600,
                  }}
                >
                  Our Story
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: 'Open Sans',
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: '#888888',
                    pb: '28px',
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis rerum ea, atque veritatis aperiam architecto accusamus
                  minima fugit tenetur est explicabo voluptatem! Dolorum libero
                  eos suscipit? Tempora minus maxime laudantium ea, officiis
                  adipisci unde doloribus distinctio vero reiciendis repellat
                  iusto, dignissimos fugit neque aperiam in? Accusamus aperiam
                  at illum numquam neque velit magni exercitationem natus
                  tenetur, iure et assumenda, mollitia sapiente nostrum odit
                  sequi aut nihil harum laboriosam. Voluptatem recusandae
                  assumenda, quas placeat ipsa adipisci est id ab cum, quam
                  numquam beatae? Aspernatur libero similique nam assumenda,
                  voluptatibus quae, illum cum odio quod reprehenderit odit
                  ipsum esse nemo alias totam? Dignissimos magnam officiis
                  libero assumenda, mollitia corporis.
                </Typography>
                <Box
                  sx={{
                    borderLeft: '3px solid #e6e6e6',
                    ml: '9px',
                    pl: '29px',
                    pb: '10px',
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: 15,
                      fontFamily: 'Open Sans',
                      lineHeight: 1.7,
                      color: '#888888',
                      pb: '11px',
                    }}
                  >
                    Creativity is just connecting things. When you ask creative
                    people how they did something, they feel a little guilty
                    because they didn&apos;t really do it, they just saw
                    something. It seemed obvious to them after a while.
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      color: '#555555',
                      fontFamily: 'Open Sans',
                      lineHeight: 1.8,
                      fontSize: 13,
                    }}
                  >
                    - Steve Job&apos;s
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
