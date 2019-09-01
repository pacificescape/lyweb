import React, { Component } from 'react';
import Loader from './components/Loader';
import Header from './components/Header/';
import './App.css';
import SideMenu from './components/SideMenu/';
import Content from './components/Content/';
import {getUserGroups} from './API'

export default class App extends Component {

  state = {
    isLoading: true,
    isAuth: false,
    data: {}
  }

  componentDidMount() {
    getUserGroups(this.props.data)
    .then(res => this.setState(res))
  }

  render() {
    //if (this.state.isAuth) return <div>Authentification: {JSON.stringify(this.state.isAuth)}</div>
    if (this.state.isLoading) return <Loader />
    return (
      <div className="app-wrapper">
      Authentification: {JSON.stringify(this.state.isAuth)}
        <button className="sidebar-toggle" onClick={sidebarToggler}>
          <div className="sidebar-toggle-button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div>
          <SideMenu />
        </div>
        <div className="main">
          <Header user={this.props.user} />
          <section className="main-section">
            <div className="cont">
              <Content />
            </div>
          </section>
        </div>
        <section className="back-grad"></section>
      </div>
    );
  }
}

const sidebarToggler = () => {
  if (document.getElementsByTagName('body')[0].classList.contains('close')) {
    document.getElementsByTagName('body')[0].classList.remove('close');
  } else {
    document.getElementsByTagName('body')[0].classList.add('close');
  }
}
