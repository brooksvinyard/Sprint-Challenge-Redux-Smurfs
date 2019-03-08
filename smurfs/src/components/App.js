import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import './Smurf.css'

import Header from './Header/Header'
import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'
import { connect } from "react-redux";
import { getSmurfs } from '../actions';

const Home = props => (
  <div className="home">
    <SmurfList />
  </div>
)

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/smurf-form" component={SmurfForm} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);