import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import HeaderContact from './HeaderContact';
import { useRouter } from 'next/router';

//assets
const brandImage = '/images/logo.png';

const BrandImage = styled.img`
  display: inline-block;
`;

const pages = [
  { title: 'Home', path: '/' },
  { title: 'Clothes', path: '/clothes' },
  { title: 'Accessories', path: '/accessories' },
  { title: 'Blog', path: '/blog' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
  return (
    <AppBar
      position={trigger ? 'sticky' : 'static'}
      enableColorOnDark={true}
      color="common"
      elevation={trigger ? 4 : 0}
      sx={{ py: 3, transition: 'all ease 1s' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              lineHeight: 0,
              mr: '40px',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Link href="/" passHref>
              <Typography
                component="a"
                sx={{
                  textDecoration: 'none',
                  color: '#222',
                  fontFamily: 'Open Sans',
                  fontWeight: 700,
                  fontSize: 30,
                  // letterSpacing: 2,
                }}
              >
                SUBHA<span style={{ color: '#e53637' }}>.</span>
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              // size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  sx={{
                    width: '90vw',
                    backgroundColor: page.path === router.pathname && '#f6f9ff',
                    borderBottom:
                      page.path === router.pathname && '1px solid #e53637',
                  }}
                >
                  <Link href={page.path} passHref>
                    <Typography
                      component="a"
                      textAlign="center"
                      sx={{
                        textTransform: 'capitalize',
                        textDecoration: 'none',
                        fontSize: 12,
                        color: 'inherit',
                        fontFamily: 'Open Sans',
                        letterSpacing: '0.2em',
                      }}
                    >
                      {page.title}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem
                disableRipple
                sx={{ '&:hover': { background: 'transparent' } }}
              >
                <HeaderContact display="flex" />
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            <Link href="/" passHref>
              <Typography
                component="a"
                sx={{
                  textDecoration: 'none',
                  color: '#222',
                  fontFamily: 'Open Sans',
                  fontWeight: 700,
                  fontSize: 30,
                  // letterSpacing: 2,
                }}
              >
                SUBHA<span style={{ color: '#e53637' }}>.</span>
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              <Link key={page.title} href={page.path} passHref>
                <Button
                  onClick={handleCloseNavMenu}
                  component="a"
                  sx={{
                    color: 'inherit',
                    display: 'block',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    fontSize: 12,
                    fontFamily: 'Open Sans',
                    letterSpacing: '0.15em',
                    mr: 0.5,
                    backgroundColor: page.path === router.pathname && '#f6f9ff',
                    borderBottom:
                      page.path === router.pathname && '1px solid #e53637',
                  }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <SearchIcon fontSize="small" sx={{ mr: 2, cursor: 'pointer' }} />
            <ShoppingCartOutlinedIcon
              fontSize="small"
              sx={{ cursor: 'pointer' }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

export async function getServerSideProps({ params }) {
  return {
    props: { params },
  };
}
