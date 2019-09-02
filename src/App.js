import React, { Component } from 'react';
import Loader from './components/Loader';
import Header from './components/Header/';
import './App.css';
import SideMenu from './components/SideMenu/';
import Content from './components/Content/';
import { getCookies, getUserGroups } from './API'
// http://localhost:3000/login?id=686968130&first_name=Аркаша Одесская 🇸🇴&username=im_the_bot&photo_url=https%3A%2F%2Ft.me%2Fi%2Fuserpic%2F320%2Fim_the_bot.jpg&auth_date=1561386715&hash=474d370a659c2fd9fa4ea87de5ba5a15e642e62ffe63e6076663dae0203a0dc9
export default class App extends Component {

  state = {
    isLoading: true,
    isAuth: false,
    data: {}
  }

  componentDidMount() {
    if (this.props.url.indexOf('login') !== -1) {
      getCookies(this.props.user)
        .then(() => {
          getUserGroups()
            .then(res => this.setState(res))
        })
    } else {
      getUserGroups()
        .then(res => this.setState(res))
    }
  }

  // componentDidMount() {
  //   if (this.props.url.indexOf('login') !== -1) {
  //     // let url = this.getUrlData(this.props.url)
  //     getCookies(this.props.user)
  //     .then((res) => {
  //         console.log('cookies: ' + res)
  //         getUserGroups()                          // лишний запрос чатов без куков...
  //         .then(res => {
  //             this.setState(res)
  //             console.log(res)
  //         })
  //     })
  // } else {
  //     getUserGroups()
  //     .then(res => this.setState(res))
  // }
  // }

  render() {
    //if (this.state.isAuth) return <div>Authentification: {JSON.stringify(this.state.isAuth)}</div>
    if (this.state.isLoading) return <Loader />
    if (!this.state.isAuth) return <Loader />
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
