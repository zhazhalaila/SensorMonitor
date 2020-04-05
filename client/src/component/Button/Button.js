import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

class MyButton extends Component{

  componentDidMount() {
    console.log('[Button props]', this.props);
  }

  handleClick = () => {
    this.props.handleClick();
  }

  render() {
    return (
      <Button color="inherit" onClick={this.handleClick}>{this.props.children}</Button>
    );
  }
}

export default MyButton;