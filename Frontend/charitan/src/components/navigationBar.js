import React from 'react';
import { AppBar, Toolbar, Typography, Box, Link, Grid } from '@mui/material';
import CharitanLogo from './charitanLogo';

const NavigationBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Grid container alignItems="center">
            <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'left' }}>
                <CharitanLogo />
            </Grid>
          <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'right' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <Link>Home</Link>
                <Link href="/home" color="inherit" underline="none">
                    <Typography variant="button" sx={{ color: 'black' }}>Home</Typography>
                </Link>
                <Link href="/discovery" color="inherit" underline="none">
                    <Typography variant="button" sx={{ color: 'black' }}>Discovery</Typography>
                </Link>
                <Link href="/about-us" color="inherit" underline="none">
                    <Typography variant="button" sx={{ color: 'black' }}>About Us</Typography>
                </Link>
                <Link href="/leaderboard" color="inherit" underline="none">
                    <Typography variant="button" sx={{ color: 'black' }}>Leaderboard</Typography>
                </Link>
                <Link href="/history" color="inherit" underline="none">
                    <Typography variant="button" sx={{ color: 'black' }}>History</Typography>
                </Link>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;