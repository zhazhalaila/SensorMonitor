import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import styles from '../../styles/Navbar';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Navbar extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('[Navbar props]', this.props);
  }

  handleRegister = () => {
    this.props.history.push("/register");
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit" onClick={this.handleRegister}>Register</Button>
        </Toolbar>
      </AppBar>
    </div>
    );
  }
}

export default withStyles(styles)(withRouter(Navbar));