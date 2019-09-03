import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
      secondary:{ main:'#4885ed'}//Google color
    }
  }
)
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper:{
      marginTop: theme.spacing(2), // space between the menu and the form
      padding: theme.spacing(5),
      textAlign: 'center',
    },
    button:{
      margin: theme.spacing(1)
    },
    input:{
      marginRight:theme.spacing(10),
      marginTop: theme.spacing(2)
    }
  }));

export default function Login(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Grid 
          container
          justify="center"
          alignItems="center"
          >
          <Grid item>
            <Paper className={classes.paper}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                >
                  <Typography variant="h2">Hello</Typography>
                  <Typography variant="subtitle1" >Sign in or create an account</Typography>

              </Grid>

              <Grid
                container
                direction="column"
                justify="center"
                className={classes.input}
              >
                <TextField
                  placeholder="Email"
                  type="email"
                  ></TextField>

                <TextField
                  placeholder="Password"
                  type="password"
                  ></TextField>

                <Button variant="contained" color="primary" className={classes.button}>Sign in</Button>

                <ThemeProvider theme={theme}>
                  <Button variant="contained" color="secondary" className={classes.button}>Sign in with Google</Button>
                </ThemeProvider>

              </Grid>

            </Paper>
          </Grid> 
      </Grid>  
    </div>
  );
}