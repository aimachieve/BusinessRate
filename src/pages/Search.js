import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Container, Typography, Stack, TextField, Grid, Link, Chip } from '@material-ui/core';
// for search input
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// routes
import { varWrapEnter, varFadeInRight, varFadeInUp } from '../components/animate';
import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-outline';
// For Google Map API
import Script from 'react-load-script';
import types from '../utils/mock-data/types.js'
import axios from 'axios'
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  // backgroundColor: theme.palette.grey[400],
  // background: 'url(/images/banner1.jpg)',
  backgroundSize: 'cover',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    // height: '100vh',
    display: 'flex',
    // position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(35),
  // paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

// ----------------------------------------------------------------------

export default function Search() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  // Store autocomplete object in a ref.
  // This is done because refs do not trigger a re-render when changed.
  const autocompleteRef = useRef(null);
  const handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ['(cities)'],
      componentRestrictions: { country: "us" }
    };

    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    autocompleteRef.current = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options
    );

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components and formatted
    // address.
    autocompleteRef.current.setFields(['address_components', 'formatted_address', 'place_id', 'geometry']);

    // Fire Event when a suggested name is selected
    autocompleteRef.current.addListener('place_changed', handlePlaceSelect);
  };

  const handlePlaceSelect = () => {
    // Extract City From Address Object
    const addressObject = autocompleteRef.current.getPlace();
    const address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      console.log("addressObject, address", addressObject, address)
      console.log(addressObject.geometry.location.lat())
      console.log(addressObject.geometry.location.lng())
      setLocation(addressObject.geometry.location.lat() + ',' + addressObject.geometry.location.lng());
      setQuery(addressObject.formatted_address);
    }
  };

  const findBusiness = async () => {
    console.log("findBusiness==>", location, type)
    var config = {
      mode: 'no-cors',
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=5000&types=${type}&key=AIzaSyCjjz655L5SuMd-IT0q0Pe2nXRlsW4-_qw`,
      headers: {
        // 'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
        'Access-Control-Allow-Credentials':'true'
      }
    };

    if (location !== '' && type !== '') {
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Please select both of city and business name!")
    }
  }

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <Container>
              <motion.div variants={varWrapEnter} style={{ color: "#29B2FE", }}>
                <Icon icon={homeFill} /> / Search Result
              </motion.div>
              {/* Google Map API */}
              <Script
                url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjjz655L5SuMd-IT0q0Pe2nXRlsW4-_qw&libraries=places"
                onLoad={handleScriptLoad}
              />
              <Stack direction="row" spacing={3} justifyContent="center" alignItems="center"
                style={{
                  backgroundColor: '#f5f6fa',
                  border: '#f0f0f5 1px solid',
                  padding: '10px'
                }}>
                <TextField
                  id='autocomplete'
                  placeholder="type here..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                <FormControl sx={{ width: '300px' }}>
                  <InputLabel id="demo-simple-select-label">Business Name, Plumber, HVAC...</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="Name"
                    onChange={(e) => setType(e.target.value)}
                    MenuProps={MenuProps}
                  >
                    {
                      types.map((type, index) => (
                        type.type !== "" && <MenuItem key={index} value={type.type} sx={{ backgroundColor: 'ddd' }}>{type.name}</MenuItem>
                      ))
                    }
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
              <Container sx={{ mt: 5 }}>
                <motion.div variants={varFadeInUp}>
                  <Typography sx={{ fontFamily: 'PoppinsBold', fontSize: 35, color: '#0b4064', textAlign: 'center' }}>
                    Top Rated Local® Los Angeles Acupuncturists
                  </Typography>
                  <Typography sx={{ fontFamily: 'Poppins', fontSize: 20, color: '#0b4064', textAlign: 'center' }}>
                    Last updated May 2022
                  </Typography>
                </motion.div>
                <motion.div variants={varFadeInUp}>
                  <Typography sx={{ mb: 3, color: "#173858", }}>
                    Showing 1-10 of 150 Items.
                  </Typography>
                  <Grid container spacing={2} sx={{ width: 1, mt: 2, border: '1px solid #f0f0f0' }} justifyContent={'center'} alignItems={'center'}>
                    <Grid item xs={12} md={3}>
                      <img src="https://d22s7xnafxduco.cloudfront.net/logos/Robert-Youngs-Acupuncture-2019-9-1-19-26-52-logo.png" alt="business_logo" />
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Stack spacing={3}>
                        <Link to="#" sx={{ fontFamily: 'PoppinsBold', color: "#0d7abc", fontSize: 30, cursor: 'pointer' }}>
                          1. Robert Youngs Acupuncture
                        </Link>
                        <Chip label="99.76 Rating Score ™" color='primary' sx={{ width: '200px' }} />
                        <Typography sx={{ color: "#0a4063", fontSize: 20 }}>
                          Of 274 ratings/reviews posted on 4 verified review sites, this business has an average rating of 5.00 stars. This earns them a Rating Score™ of 98.00 which ranks them #1 in the Los Angeles area.
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Stack direction={'column'} justifyContent={'flex-start'} alignItems="center" spacing={3} p={2}>
                        <Button variant='contained' fullWidth sx={{
                          borderRadius: '50px',
                          height: '50px',
                          fontSize: '25px'
                        }}>
                          View Profile
                        </Button>
                        <Button variant='outlined' fullWidth sx={{
                          borderRadius: '50px',
                          height: '50px',
                          fontSize: '25px'
                        }}>
                          Rate Business
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                  {/* Test Data */}
                  <Grid container spacing={2} sx={{ width: 1, mt: 2, border: '1px solid #f0f0f0' }} justifyContent={'center'} alignItems={'center'}>
                    <Grid item xs={12} md={3}>
                      <img src="https://d22s7xnafxduco.cloudfront.net/logos/george-dimov-cpa-reviews-1515184318-logo.png" alt="business_logo" />
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Stack spacing={3}>
                        <Link to="#" sx={{ fontFamily: 'PoppinsBold', color: "#0d7abc", fontSize: 30, cursor: 'pointer' }}>
                          2. George Dimov CPA
                        </Link>
                        <Chip label="96.40 Rating Score ™" color='primary' sx={{ width: '200px' }} />
                        <Typography sx={{ color: "#0a4063", fontSize: 20 }}>
                          Of 466 ratings/reviews posted on 3 verified review sites, this business has an average rating of 4.94 stars. This earns them a Rating Score™ of 96.40 which ranks them #1 in the Long Island City area.
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Stack direction={'column'} justifyContent={'flex-start'} alignItems="center" spacing={3} p={2}>
                        <Button variant='contained' fullWidth sx={{
                          borderRadius: '50px',
                          height: '50px',
                          fontSize: '25px'
                        }}>
                          View Profile
                        </Button>
                        <Button variant='outlined' fullWidth sx={{
                          borderRadius: '50px',
                          height: '50px',
                          fontSize: '25px'
                        }}>
                          Rate Business
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </motion.div>
              </Container>
            </Container>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
