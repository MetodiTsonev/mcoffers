import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './NavMenu.css';

export function NavMenu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h4">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', fontFamily: "cursive" }}>McOffers</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <List>
            <ListItem button component={Link} to="/" >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/schedule">
              <ListItemText primary="Schedule" />
            </ListItem>
            <ListItem button component={Link} to="/shiftPool">
              <ListItemText primary="ShiftPool" />
            </ListItem>
            <ListItem button component={Link} to="/income">
              <ListItemText primary="Income" />
            </ListItem>
            <ListItem button component={Link} to="/profile">
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </header>
  );
};