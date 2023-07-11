import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageWrapper from '../../assets/customComponents/ImageWrapper';
import PageHeader from '../../assets/preComponents/PageHeader';
import CustomButton from '../../assets/customComponents/CustomButton';
import Link from 'next/link';

const WhoWeAre = () => {
  return (
    <Box
      component="section"
      sx={{ py: '100px', position: 'relative', overflow: 'hidden' }}
    >
      <Container>
        <Box>
          <Grid
            container
            spacing={5}
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Grid item xs={12} md={5} order={{ xs: 1, md: 0 }}>
              <Box>
                <Typography
                  component="h2"
                  sx={{
                    mb: '20px',
                    fontSize: { xs: 25, md: 40 },
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  Who
                  <Typography
                    component="span"
                    variant="span"
                    sx={{
                      color: '#157efb',
                      position: 'relative',
                      display: 'inline-block',
                      px: '5px',
                      mx: '5px',
                      '&:after': {
                        position: 'absolute',
                        content: "''",
                        left: 0,
                        bottom: 0,
                        width: '100%',
                        height: '40%',
                        backgroundColor: '#157efb',
                        opacity: '8%',
                      },
                    }}
                  >
                    We Are
                  </Typography>
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: 14, color: '#777', lineHeight: 2, mb: 2 }}
                >
                  We are a digital transformation consultancy and software
                  development company that provides vehicle management, visitor
                  management, e-commerce website develops, SEO services provider
                  and edge engineering solutions.
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: 14, color: '#777', lineHeight: 2 }}
                >
                  Helping Fortune 50 companies and enterprise clients untangle
                  complex issues that always emerge during their digital
                  evolution journey. Since 2015 we have been a visionary and a
                  reliable software engineering partner for world-class brands.
                </Typography>
                <Box sx={{ mt: '40px' }}>
                  <Link href="/services" passHref>
                    <Typography component="a">
                      <CustomButton style={{ padding: '15px 30px' }}>
                        Our Services
                      </CustomButton>
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 0, md: 1 }}>
              <Box>
                <ImageWrapper src="/images/about/whoWeAre.png" alt="" />
              </Box>
            </Grid>
          </Grid>
          {/* <PageHeader
            titleLeft="Who"
            titleRight="We Are"
            subTitle="We are a digital transformation consultancy and software development company that provides vehicle management, visitor management, e-commerce website develops, SEO services provider and edge engineering solutions, helping Fortune 50 companies and enterprise clients untangle complex issues that always emerge during their digital evolution journey. Since 2015 we have been a visionary and a reliable software engineering partner for world-class brands."
          />
          <PageHeader
            titleLeft="Vision and"
            titleRight="Mission"
            subTitle="TBZ Vision and Mission mutually are exciting our employees to achieve aim. To grow current position and get a larger market as well as to provide the simple IT solutions to client. We understand the client’s requirement, analyses it and provide the best IT solutions. We satisfy our clients by our services and implements it with more effective software solution strategies."
          />
          <PageHeader
            titleLeft="TBZ"
            titleRight="Vision"
            subTitle="Our Vision is to be a leading Web Solution company in IT sector and progress in our current position in market. We know that Customer’s growth is our growth, so we commit our customers to help in achieving their business goals. We believe in work with the accuracy and best quality. We want to be known as the reliable, innovative and user friendly software service provider in IT industry."
          />
          <PageHeader
            titleLeft="TBZ"
            titleRight="Mission"
            subTitle="Exceed client's expectations by going beyond software to provide best Web solutions that transform data into knowledge, enabling them to solve their problems."
          /> */}
        </Box>
      </Container>
      <ImageWrapper
        src="/images/bg/about_bubbles.png"
        alt=""
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          height: '100%',
          width: '50%',
          objectFit: 'contain',
          zIndex: -1,
          animation: 'rotate-center 100s linear infinite both',
        }}
      />
    </Box>
  );
};

export default WhoWeAre;
