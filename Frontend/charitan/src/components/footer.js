import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        py: 4,
        px: 8,
        textAlign: 'center',
      }}
    >
      {/* main grid */}
      <Grid 
        container 
        justifyContent="flex-start" 
        alignItems="center"
        sx={{
          px: 4, //padding for x-axis
        }}
        >

        {/* logo and text */}
        <Grid 
          item xs={12} // extra small screen size
          md={6} // medium screen size -> so set 6 means half of the screen
          textAlign={{ xs: 'center', md: 'left' }}>
          {/* Typography: similar with <p> but has reactive text size */}
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            <span style={{ color: 'pink', marginRight: '5px' }}>♥</span>
            Charitan
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Making the world better, one donation at a time.
          </Typography>
        </Grid>

        {/* nav links */}
        <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'right' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="/home" color="inherit" underline="hover">
              Home
            </Link>
            <Link href="/discovery" color="inherit" underline="hover">
              Discovery
            </Link>
            <Link href="/about-us" color="inherit" underline="hover">
              About Us
            </Link>
            <Link href="/leaderboard" color="inherit" underline="hover">
              Leaderboard
            </Link>
            <Link href="/history" color="inherit" underline="hover">
              History
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* rights */}
      <Box
        sx={{
          mt: 4,
          borderTop: '1px solid gray',
          pt: 2,
        }}
      >
        <Typography variant="body2">© 2024 Charitan Donation Platform. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
