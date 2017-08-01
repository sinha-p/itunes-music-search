import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography type="title" color="inherit">
                ReactTunes
              </Typography>
            </Toolbar>
          </AppBar>
      </div>
    );
  }
}

export default App;
