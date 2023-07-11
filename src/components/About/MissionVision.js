import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React from 'react';
import CustomButton from '../../assets/customComponents/CustomButton';
import ImageWrapper from '../../assets/customComponents/ImageWrapper';

const MissionVision = () => {
  return (
    <Box component="section">
      <Container>
        <Box>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  height: '400px',
                  minHeight: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  p: 2,
                  '&:before': {
                    position: 'absolute',
                    content: "''",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '10px',
                    background: 'linear-gradient(to top, #0066ff17, #0066ff05)',
                  },
                }}
              >
                <ImageWrapper
                  src="/images/about/mission.png"
                  alt
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
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
                  Mission and
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
                    Vision
                  </Typography>
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: 14, color: '#777', lineHeight: 2, mb: 2 }}
                >
                  TBZ Vision and Mission mutually are exciting our employees to
                  achieve aim. To grow current position and get a larger market
                  as well as to provide the simple IT solutions to client.
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: 14, color: '#777', lineHeight: 2 }}
                >
                  We understand the clients requirement, analyses it and provide
                  the best IT solutions. We satisfy our clients by our services
                  and implements it with more effective software solution
                  strategies.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default MissionVision;
