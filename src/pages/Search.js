// import { useState } from 'react';
import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Container, Typography, Stack, TextField, Grid, Link, Chip } from '@material-ui/core';
// routes
//
import { varWrapEnter, varFadeInRight, varFadeInUp } from '../components/animate';
import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-outline';
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
  // const [age, setAge] = useState('');
  // const [value, setValue] = useState(new Date());
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <ContentStyle>
            <Container>
              <motion.div variants={varWrapEnter} style={{ color: "#29B2FE", }}>
                <Icon icon={homeFill} /> / Search Result
              </motion.div>
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
