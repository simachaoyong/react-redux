import React, { Component } from 'react';
import {Redirect,Switch,Route,withRouter} from 'react-router-dom';
import './App.css';
// 引入组件
import Xheader from './components/Xheader.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/home" component={Xheader}></Route>
          <Redirect from="/" to="/home" />
        </Switch> 
      </div>
    );
  }
}

export default withRouter(App);
