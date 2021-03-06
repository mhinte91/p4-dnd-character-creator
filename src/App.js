import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import CharacterEditPage from './components/pages/CharacterEditPage';
import userService from './utils/userService';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      characters: []
    };
  }

  /*------ Callback Methods ----*/

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar
            user={this.state.user}
            handleLogout={this.handleLogout}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
          <Switch>
            <Route
              exact
              path='/'
              render={({ history }) =>
                userService.getUser() ? (
                  <Home history={history} />
                ) : (
                  <Redirect to='login' />
                )
              }
            />{' '}
            <Route exact path='/about' component={About} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/edit' component={CharacterEditPage} />
            <Route
              exact
              path='/login'
              render={({ history }) => (
                <Login
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;

//
