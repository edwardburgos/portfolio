import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import s from './NavBar.module.css'
import NightsStayIcon from '@mui/icons-material/NightsStay';

export default function NavBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar className={s.toolBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            className={s.buttonMenu}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <p className={s.title}>Edward Burgos</p>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex'} }}>
            <IconButton
              aria-label="show more"
              color="inherit"
              className={s.buttonMore}
              onClick={() => document.body.classList.toggle("dark-mode")}
            >
              <NightsStayIcon fontSize="small" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}