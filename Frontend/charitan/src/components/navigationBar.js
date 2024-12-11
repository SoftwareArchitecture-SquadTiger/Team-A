import React from 'react';
import { AppBar, Toolbar, Typography, Box, Link, Grid } from '@mui/material';
import CharitanLogo from './charitanLogo';
import NavLink from './navLink';

const NavigationBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Grid container alignItems="center">
            <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'left' }}>
                <CharitanLogo color="black"/>
            </Grid>
          <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'right' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <NavLink href="/home" color="black" size="1.2rem">Home</NavLink>
                <NavLink href="/discovery" color="black" size="1.2rem">Discovery</NavLink>
                <NavLink href="/about-us" color="black" size="1.2rem">About Us</NavLink>
                <NavLink href="/leaderboard" color="black" size="1.2rem">Leaderboard</NavLink>
                <NavLink href="/history" color="black" size="1.2rem">History</NavLink>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;