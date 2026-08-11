import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CampaignIcon from '@mui/icons-material/Campaign';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const LangImage = styled.img``;

const TopHeader = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #222 0%, #333 100%)',
        height: '41px',
      }}
    >
      <Container maxWidth="xl">
        <Grid container sx={{ alignItems: 'center' }}>
          <Grid
            item
            xs={12}
            md={8}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  background: '#111',
                  height: '41px',
                  width: '41px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CampaignIcon sx={{ color: '#fff' }} />
              </Box>
              <Typography component="p" sx={{ fontSize: 11, color: '#fff' }}>
                <Typography
                  component="strong"
                  variant="strong"
                  sx={{ px: 1.3 }}
                >
                  Contact Us:
                </Typography>
                <Typography component="span" sx={{ fontSize: 11 }}>
                  +8801915985017
                </Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: 41,
                justifyContent: { xs: 'space-between', md: 'flex-end' },
              }}
            >
              <Box sx={{ lineHeight: 0 }}>
                <TwitterIcon
                  color="common"
                  sx={{ mx: 0.5, cursor: 'pointer', fontSize: 16 }}
                />
                <Link href="https://facebook.com/oliveandcom" passHref>
                  <a target="_blank">
                    <FacebookIcon
                      color="common"
                      sx={{ mx: 0.5, cursor: 'pointer', fontSize: 16 }}
                    />
                  </a>
                </Link>

                <LinkedInIcon
                  color="common"
                  sx={{ mx: 0.5, cursor: 'pointer', fontSize: 16 }}
                />
                <InstagramIcon
                  color="common"
                  sx={{ ml: 0.5, cursor: 'pointer', fontSize: 16 }}
                />
              </Box>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                  mx: 2,
                  background: '#fff',
                  display: { xs: 'none', md: 'block' },
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    '& .lang': {
                      color: '#0a58ca',
                    },
                  },
                }}
              >
                <LangImage
                  style={{ width: 16, height: 16, display: 'inline-block' }}
                  src="/images/lang.png"
                  alt="lang"
                />

                <Typography
                  component="p"
                  className="lang"
                  sx={{ pl: 1, fontSize: 11, color: '#fff', lineHeight: 0 }}
                >
                  English
                </Typography>
                <KeyboardArrowDownIcon
                  className="lang"
                  color="common"
                  sx={{ mr: 0.5, fontSize: 15 }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopHeader;
