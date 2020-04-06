import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Aux from '../../hoc/Auxiliary';
import Input from '../../component/Input/Input';
import { loginUser } from '../../store/actions/authActions';
import { alertDelete } from '../../store/actions/alertActions';
import Alert from '../../component/Alert/Alert';

import styles from '../../styles/Register';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      nextProps.history.push('/profile');
    }
    return null;
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.loginUser(data);
  }

  render() {
    const { classes } = this.props;
    return (
      <Aux>
        <Container component="main" maxWidth="xs">
          <div className={classes.root}>
            <Alert
                alertOpen={this.props.alertOpen}
                alertDelete={() => this.props.alertDelete()}
                alertColor={this.props.alertColor}
                responseMessage={this.props.responseMessage}
            />
            <CssBaseline />
          </div>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
              <Input
                name="username"
                label="Username"
                handleChange={(event) => this.handleChange(event)}
              />
              <Input
                name="password"
                label="Password"
                type="password"
                id="password"
                handleChange={(event) => this.handleChange(event)}
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
      </Aux>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    alertOpen: state.err.open,
    alertColor: state.err.color,
    responseMessage: state.err.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (data) => dispatch(loginUser(data)),
    alertDelete: () => {
      console.log('[Button work?]');
      dispatch(alertDelete());
    }
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)
  (withRouter(Login))
);