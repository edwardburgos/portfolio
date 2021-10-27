import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import s from './NavBar.module.css'
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListItemText from '@mui/material/ListItemText';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

export default function NavBar() {

  const [showDrawer, setShowDrawer] = useState(false)


  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) return;
        setShowDrawer(open);
      };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar className={s.toolBar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              className={s.buttonMenu}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
            <p className={s.title}>Edward Burgos</p>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'flex' } }}>
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

      <Drawer
        anchor='left'
        open={showDrawer}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['Home', 'Skills', 'Portfolio'].map(text => (
              <ListItem button key={text}>
                <ListItemIcon>
                  { text === 'Home' ? <HomeOutlinedIcon /> : text === 'Skills' ? <LightbulbOutlinedIcon /> : <FolderOutlinedIcon /> }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

        </Box>
      </Drawer>
    </>
  );
}