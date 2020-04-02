import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import validateForm from '../../component/FormValidate';
import styles from '../../styles/Register';

import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      mqtt_topic: null,
      password: null,
      password2: null,
      errors: {
        username: '',
        email: '',
        mqtt_topic: '',
        password: '',
        password2: ''
      },
      alertOpen: false,
      alertColor: 'error',
      responseMessage: ''
    }
  }

  handleAlert = () => {
    this.setState({alertOpen: false});
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch(name) {
      case 'password':
        errors.password = 
          value.length < 4
            ? 'Password must be 4 characters long!' : '';
        break;
      case 'password2':
        errors.password2 = 
          value === this.state.password
            ? '': 'Password2 must be equal password';
          break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      let data = {
        username: this.state.username,
        email: this.state.email,
        mqtt_topic: this.state.mqtt_topic,
        password: this.state.password,
      }
      axios.post('/api/users/register', data)
        .then(res => {
          console.log(res);
          this.setState({alertOpen: true, alertColor: "success", responseMessage: res.data.message});
        })
        .catch(err => {
          let responseMessage = err.response.data.message;
          console.log(err.response);
          this.setState({alertOpen: true, responseMessage: responseMessage});
        })
    } else {
      console.error('Invalid Form')
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.root}>
          <Collapse in={this.state.alertOpen}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={this.handleAlert}
                >
                <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              severity={this.state.alertColor}
            >
              {this.state.responseMessage}
            </Alert>
          </Collapse>
          <CssBaseline />
        </div>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}  noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Username"
              name="username"
              autoFocus
              error={this.state.errors.username !== ''}
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              autoFocus
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Mqtt Topic"
              name="mqtt_topic"
              autoFocus
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={this.state.errors.password !== ''}
              helperText={this.state.errors.password}
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Repeat Password"
              type="password"
              id="password"
              error={this.state.errors.password2 !== ''}
              helperText={this.state.errors.password2}
              onChange={this.handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);