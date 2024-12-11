import React from 'react';
import { Box, Typography, Avatar, Tooltip } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const WelcomeBox = ({ userName = 'Vinh Company' }) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      {/* Welcome Message */}
      <Typography variant="h6" sx={{ color: 'black' }}>
        Hi, {userName}
      </Typography>

      {/* Avatar with Tooltip */}
      <Tooltip title="You have logged in!" arrow>
        <Avatar
          sx={{
            bgcolor: 'transparent',
            border: '1px solid black',
            color: 'black',
            width: 40,
            height: 40,
            cursor: 'pointer',
          }}
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            {/* Icon Inside Avatar */}
            <Typography component="span" variant="h5">
              👤
            </Typography>
          </Box>
        </Avatar>
      </Tooltip>

      {/* Dropdown Arrow */}
      <ArrowDropUpIcon sx={{ fontSize: '24px', color: 'black' }} />
    </Box>
  );
};

export default WelcomeBox;
