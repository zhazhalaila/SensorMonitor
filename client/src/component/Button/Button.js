import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

class MyButton extends Component{
  
  handleClick = () => {
    this.props.handleClick(this.props.history);
  }

  render() {
    return (
      <Button color="inherit" onClick={this.handleClick}>{this.props.children}</Button>
    );
  }
}

export default MyButton;