import React from 'react'
import { NavLink as RouterLink, useLocation, useNavigate } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, AppBar, Toolbar, Container, Stack, Button, Typography } from '@material-ui/core';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// components
import Logo from '../../components/Logo';
// import Label from '../../components/Label';
import { MHidden } from '../../components/@material-extend';
//
// import AccountPopover from './AccountPopover';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';

// import useAuth from '../../hooks/useAuth';
// for search input
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 162;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.longer
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  console.log(pathname)
  const pathArray = pathname.split('/')
  console.log(pathArray)
  // const { isAuthenticated, logout } = useAuth();
  const isHome = pathname === '/';

  const [city, setCity] = React.useState('');
  const [name, setName] = React.useState('');
  const navigate = useNavigate();

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const findBusiness = () => {
    console.log("findBusiness button=>", city, name)
    if (city != '' && name != '') {
      console.log(`/${city}/${name}`);
      navigate(`/search/${city}&${name}`)
    }
  }

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent', borderBottom: '#f0f0f5 1px solid' }}>
      {/* <Container
          maxWidth="lg"
        > */}
      {
        pathArray[1] === 'search' ?
          <Stack direction="row" spacing={3} justifyContent="center" alignItems="center"
            style={{
              backgroundColor: '#f5f6fa',
              border: '#f0f0f5 1px solid',
              padding: '10px'
            }}>
            <Typography sx={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#083f62',
            }}>
              Search Top Rated Local® Businesses
            </Typography>
            <FormControl sx={{ width: '300px' }}>
              <InputLabel id="demo-simple-select-label">select city...</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                label="City"
                onChange={handleChangeCity}
                sx={{ borderRadius: '50px' }}
                type="search"
              >
                <MenuItem value={'newyork-ny'}>New York, NY - USA</MenuItem>
                <MenuItem value={'losangeles-ca'}>Los Angeles, CA - USA</MenuItem>
                {/* <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>

            <FormControl sx={{ width: '300px' }}>
              <InputLabel id="demo-simple-select-label">Business Name, Plumber, HVAC...</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={name}
                label="Name"
                onChange={handleChangeName}
                sx={{ borderRadius: '50px' }}
              >
                <MenuItem value={'accounting-firms'}>Accounting Firms & CPA</MenuItem>
                <MenuItem value={'acupunturist'}>Acupunturist</MenuItem>
                {/* <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              onClick={findBusiness}
              sx={{
                border: "solid 2px #ffb03d",
                borderRadius: '50px',
                backgroundColor: "#ffb03d",
                color: 'white',
                padding: '10px',
                width: '200px'
              }}>
              Find Business
            </Button>
          </Stack>
          :
          ''
      }
      {/* </Container> */}
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 80 },
          })
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // pr: 20
          }}
        >
          <RouterLink to="/">
            <Logo
              sx={{
                transition: 'transform 0.3s',
                ...(isOffset && {
                  transform: 'scale(0.5)'
                }),
                height: '90px'
              }}
            />
          </RouterLink>
          <Box sx={{ flexGrow: 1 }} />

          <MHidden width="mdDown">
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>

          {/* {isAuthenticated ? (
            <Button variant="contained" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button component={RouterLink} variant="contained" to="/auth/login">
              Login
            </Button>
          )} */}
          {/* <AccountPopover /> */}

          <MHidden width="mdUp">
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
