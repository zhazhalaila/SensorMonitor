import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Profile extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('[Auth token is]', localStorage.getItem('access_token'));
  }

  render() {
    return (
      <h1>Hello</h1>
    );
  }
}

export default withRouter(Profile);