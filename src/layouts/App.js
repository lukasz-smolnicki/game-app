import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import fire from '../config/fire';
import Home from './Home';
import Login from './Login'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
    }
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
          <h1>Imperium Galactica</h1>
          <header>
            {<Header />}
          </header>
          {this.state.user ? <Home /> : <Login />}

          <footer>
            {<Footer />}
          </footer>
          <h6>Terminal v. 0.01 <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Łukasz Smolnicki. All Rights Reserved</h6>
        </div>
      </Router>
    );
  }
}

export default App;
