import React from "react";
import {
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton
} from "@material-ui/core";
import { makeStyles, useTheme  } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from "@material-ui/icons/Mail";
import { withRouter } from "react-router-dom";

import InboxIcon from '@material-ui/icons/MoveToInbox';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
const drawerWidth = 160;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const SideBar = props => {
  const { history, window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleOnClick = () => {
    history.push("/home")
  }

  const data = [
    {name: "Projects", onClick: () => history.push(`/projects`)}, 
    {name: "Chat", onClick: () => history.push(`/chat`)},
    {name: "Account", onClick: () => history.push(`/account`)}, 
  ]      
  const botData = [
    {name: "Settings", onClick: () => history.push(`/settings`)}, 
    {name: "Help", onClick: () => history.push(`/help`)},
  ]
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <>
    {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
              <Button component="h2" style={{fontSize: "1.5rem"}} color="inherit" onClick={handleOnClick}> DASHBOARD</Button>
        </Toolbar>
      </AppBar> */}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Button component="h6" noWrap color="inherit" onClick={() => { history.push('/home')}}> DASHBOARD</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {data.map((text, index) => (
            <ListItem button key={text.name} onClick={text.onClick}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {botData.map((text, index) => (
            <ListItem button key={text.name} onClick={text.onClick}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
</>
  );
};

export default withRouter(SideBar);