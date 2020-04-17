import React, { Component } from 'react'
import Header from './components/layouts/Header'
import TerminalPage from './components/layouts/TerminalPage'
import Navbar from './components/layouts/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import DetailsPage from './components/layouts/DetailsPage'
import Footer from './components/layouts/Footer'
import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
// import fire from '../../config/fire';

class App extends Component {
  // componentDidMount() {
  //   this.authListener();
  // }

  // authListener() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     // console.log(user);
  //     if (user) {
  //       this.setState({ user });
  //       // localStorage.setItem('user', user.uid)
  //     } else {
  //       this.setState({ user: null });
  //       // localStorage.removeItem('user')
  //     }
  //   });
  // }

  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <header><Header /></header>
          <main>
            <article>
              <section>
                <TerminalPage />
              </section>
              <section>
                <article class="home">
                  <nav><Navbar /></nav>
                  <section class="dashboard"><Dashboard /></section>
                </article>
              </section>
              <section>
                <DetailsPage />
              </section>
            </article>
          </main>
          <footer><Footer /></footer>
        </div>
      </BrowserRouter>
    )
  }
}

export default App