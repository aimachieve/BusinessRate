import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Stack, Button, TextField } from '@material-ui/core';
// routes
//
import { varWrapEnter, varFadeInRight } from '../../animate';
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
    // height: '500px',
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
  paddingBottom: theme.spacing(30),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'center'
  }
}));

// ----------------------------------------------------------------------

export default function StoreHero() {
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
              <Typography sx={{ color: '#235789', fontSize: 20, fontWeight: 600, textAlign: 'center', fontStyle: 'Poppins', mt: 1, mb:2 }}>
                Everyday, we analyze ratings & reviews from hundreds of verified review sites online and then rank businesses based on their overall Rating Score™. This allows you to quickly and confidently find the truly Top Rated Local® businesses in your area.
              </Typography>
              <Stack direction="row" spacing={3} justifyContent="center" alignItems="center">
                <TextField label="select city..." sx={{color: 'white', borderRadius: '50px'}} type="search" />
                <TextField label="Business Name, Plumber, HVAC..." sx={{color: 'white', borderRadius: '50px'}} type="search" />
                <Button variant="contained" sx={{
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
