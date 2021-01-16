import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SideNav from './SideNav.js';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: 'auto',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    gutters: {
        paddingLeft: "0px",
    },
    colorPrimary: {
        background: 'linear-gradient(0deg, rgba(1,0,19,1) 70%, rgba(177,81,13,1) 85%, rgba(255,111,0,1) 100%)'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar>
                <Toolbar className={classes.gutters}>
                    <SideNav edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                    </SideNav>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}