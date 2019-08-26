import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    loginButton: {
      marginRight: theme.spacing(4),
      border: 0,
      bordeRadius: 4,
      backgroundColor: 'black',
      
    }
  }));

export default function Login(props) {
    const classes = useStyles();

  return (
    <div className={classes.root}>

    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    >

        <h1>Hello</h1>
        <h3>Sign in or create an account.</h3>

        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >


            <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-name"
                label="Email address"
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />

            <TextField
                id="outlined-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
            />


            </form>

        </Grid>

        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Button
                className={classes.loginButton}
                color="inherit">
                Confirm</Button>
            <Button
                className={classes.loginButton}
                color="inherit">
                Create an account</Button>

        </Grid>

    </Grid>
    </div>
  );
}
