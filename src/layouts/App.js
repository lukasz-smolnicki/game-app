import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.css';
import fire from '../config/fire';

class App extends Component {

  state = {

  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid)
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user')
      }
    });
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <header><Header /></header>
          <main><Main /></main>
          <footer><Footer /></footer>
        </div>
      </Router>
    )
  }
}

export default App