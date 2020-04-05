import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import styles from '../../styles/Navbar';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MyButton from '../Button/Button';

class Navbar extends Component {
  
  componentDidMount() {
    console.log('[Navbar props]', this.props);
  }

  handleOnClick = (url) => {
    this.props.history.push(url);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <MyButton handleClick={() => this.handleOnClick('register')}>Register</MyButton>
          <MyButton handleClick={() => this.handleOnClick('login')}>Login</MyButton>
        </Toolbar>
      </AppBar>
    </div>
    );
  }
}

export default withStyles(styles)(withRouter(Navbar));