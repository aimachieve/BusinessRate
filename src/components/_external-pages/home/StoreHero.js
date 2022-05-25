import * as React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Button, TextField } from '@material-ui/core';
// routes
import { varWrapEnter, varFadeInRight } from '../../animate';
// for search input
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  // backgroundColor: theme.palette.grey[400],
  background: 'url(https://s3.amazonaws.com/topratedlocal/home_page/TRL-Hero-Illustration.svg)',
  backgroundSize: 'cover',
  [theme.breakpoints.up('md')]: {
    top: 200,
    left: 0,
    width: '100%',
    // height: '100%',
    display: 'flex',
    // position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack alignItems={'center'} spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(5),
  paddingBottom: '500px',
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'center'
  }
}));

// ----------------------------------------------------------------------

export default function StoreHero() {
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
    if(city != '' && name != '') {
      console.log(`/${city}/${name}`);
      navigate(`/search/${city}&${name}`)
    }
  }

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        {/* <HeroOverlayStyle alt="overlay" src="/static/overlay.svg" variants={varFadeIn} /> */}

        {/* <HeroOverlayStyle alt="hero" src="/images/hero-bg.png" variants={varFadeIn} /> */}

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: '#235789', fontSize: 80, fontWeight: 700, lineHeight: '90px', textAlign: 'center', fontStyle: 'Poppins', mt: 1 }}>
                Top Rated Local® Businesses In Your Area
              </Typography>
              <Typography sx={{ color: '#235789', fontSize: 20, fontWeight: 600, textAlign: 'center', fontStyle: 'Poppins', mt: 1, mb: 2 }}>
                Everyday, we analyze ratings & reviews from hundreds of verified review sites online and then rank businesses based on their overall Rating Score™. This allows you to quickly and confidently find the truly Top Rated Local® businesses in your area.
              </Typography>
              <Stack direction="row" spacing={3} justifyContent="center" alignItems="center">
                <FormControl sx={{ width: '50%' }}>
                  <InputLabel id="demo-simple-select-label">select city...</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={city}
                    label="City"
                    onChange={handleChangeCity}
                    sx={{ borderRadius: '50px'}}
                    type="search"
                  >
                    <MenuItem value={'newyork-ny'}>New York, NY - USA</MenuItem>
                    <MenuItem value={'losangeles-ca'}>Los Angeles, CA - USA</MenuItem>
                    {/* <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                </FormControl>

                <FormControl sx={{ width: '50%' }}>
                  <InputLabel id="demo-simple-select-label">Business Name, Plumber, HVAC...</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={name}
                    label="Name"
                    onChange={handleChangeName}
                    sx={{ borderRadius: '50px'}}
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
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
