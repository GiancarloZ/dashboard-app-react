import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Routes from './Routes';
import {Switch} from 'react-router-dom'
import SideBar from './Components/SideBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 160,
    },
    paddingTop: 65
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
function App() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
      <SideBar />
      <main className={classes.content}>
      <div className={classes.toolbar} />
        <Switch>
          <Routes />
        </Switch>
      </main>
    </div>
</>
    
  );
}

export default App;
