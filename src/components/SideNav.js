import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ChartIcon from '@material-ui/icons/ShowChart';
import InfoIcon from '@material-ui/icons/Info';
import AccountIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false
  });

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <h1 style={{ paddingLeft:'10px' }}>Wildfire Stocks</h1>
      <List>
          <ListItem button key="home">
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button key="stocks">
            <ListItemIcon><ChartIcon/></ListItemIcon>
            <ListItemText primary="Stocks" />
          </ListItem>
          <ListItem button key="about">
            <ListItemIcon><InfoIcon/></ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
      </List>
      <Divider/>
      <List>
        <ListItem button key="login">
          <ListItemIcon><AccountIcon/></ListItemIcon>
          <ListItemText primary="Login"/>  
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment>
          <Button onClick={toggleDrawer(true)}><MenuIcon/></Button>
          <SwipeableDrawer
            anchor="left"
            open={state.open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
