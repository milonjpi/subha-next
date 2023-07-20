import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const Policy = () => {
  return (
    <Box component="section">
      <Box
        sx={{
          backgroundImage: 'url(images/bg/bg.jpg)',
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
            Privacy Policy
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="lg">
        <Box sx={{ pt: 10, pb: 15 }}>
          {[1, 2, 3].map((el) => (
            <Typography
              key={el}
              sx={{
                fontFamily: 'open Sans',
                fontSize: 13,
                color: '#888888',
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
              quasi excepturi modi! Temporibus ipsa deleniti tempora dolorem
              corrupti eveniet ad quod beatae omnis eum fugit neque natus
              molestias, saepe eius laborum amet architecto aspernatur harum,
              quae rem qui. Amet necessitatibus eveniet nam vero veniam ab
              voluptas in saepe accusamus ullam fuga repellat, est veritatis
              dignissimos perspiciatis rerum nihil. Exercitationem vitae modi
              nobis assumenda blanditiis similique praesentium labore beatae
              est, nesciunt accusamus pariatur, id neque non? Iure ratione ut
              quis et nihil porro rerum nulla. Necessitatibus, nihil veniam
              voluptatibus, eos inventore, magni voluptates quidem qui
              distinctio expedita debitis iusto corrupti officia.
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Policy;
