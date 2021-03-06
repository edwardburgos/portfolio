import React, { useState, useEffect } from 'react';
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
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SchoolIcon from '@mui/icons-material/SchoolOutlined';
import { useDispatch } from 'react-redux';
import { modifyApp } from '../../actions';
import { HashLink as Link } from "react-router-hash-link";

export default function NavBar() {

  const dispatch = useDispatch();

  const [showDrawer, setShowDrawer] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  function darkApp() {
    if (localStorage.getItem('dark') === 'true') {
      if (!document.body.classList.contains('dark-mode')) {
        document.body.classList.add('dark-mode')
        if (!darkMode) setDarkMode(true)
      }
    } else {
      if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode')
        if (!darkMode) setDarkMode(false)
      }
    }
  }

  useEffect(() => {
    darkApp()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode])

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
            <Link to='#home' className={s.title}>Edward Burgos</Link>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'flex' } }}>
              <IconButton
                aria-label="show more"
                color="inherit"
                className={s.buttonMore}
                onClick={() => { localStorage.setItem('dark', `${!darkMode}`); setDarkMode(!darkMode); }}
              >
                {!darkMode ? <NightsStayIcon fontSize="small" /> : <LightModeOutlinedIcon fontSize="small" />}
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
          sx={{ width: 250, color: !darkMode ? 'black' : 'white', backgroundColor: darkMode ? 'black' : 'white', height: '100%' }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['Home', 'Portfolio', 'Skills', 'Education'].map((text, index) => (
              <ListItem button key={index}>
                <Link to={`#${text.toLowerCase()}`} className={s.noDecoration} onClick={() => { if (text === 'Portfolio') dispatch(modifyApp('dogsapp')) }}>
                  <ListItemIcon sx={{ color: !darkMode ? 'black' : 'white' }}>
                    {text === 'Home' ? <HomeOutlinedIcon /> : text === 'Skills' ? <LightbulbOutlinedIcon /> : text === 'Education' ? <SchoolIcon /> : <FolderOutlinedIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            ))}
          </List>

        </Box>
      </Drawer>
    </>
  );
}