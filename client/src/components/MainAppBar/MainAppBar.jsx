import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function MainAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button className={classes.menuButton} color="inherit" component={RouterLink} to="/">
            HOME
          </Button>
          <Button
            className={classes.menuButton}
            color="inherit"
            component={RouterLink}
            to="/overview"
          >
            Overview
          </Button>
          <Button
            className={classes.menuButton}
            color="inherit"
            component={RouterLink}
            to="/paycheck"
          >
            PAYCHECK
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
