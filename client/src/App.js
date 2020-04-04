import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import Register from './containers/auth/Register';
import Login from './containers/auth/Login';
import Navbar from './component/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    )
  }
}

export default App;