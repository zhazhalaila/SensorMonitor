import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import Register from './containers/auth/Register';
import Navbar from './component/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    )
  }
}

export default App;