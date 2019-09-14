import React, { Component } from 'react';
import Loader from './components/Loader';
import Header from './components/Header/';
import './App.css';
import SideMenu from './components/SideMenu/';
import Content from './components/Content/';
import { getCookies, getUserGroups, getGroup } from './API'
// http://localhost:3000/login?id=686968130&first_name=Аркаша Одесская 🇸🇴&username=im_the_bot&photo_url=https%3A%2F%2Ft.me%2Fi%2Fuserpic%2F320%2Fim_the_bot.jpg&auth_date=1561386715&hash=474d370a659c2fd9fa4ea87de5ba5a15e642e62ffe63e6076663dae0203a0dc9
export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isAuth: false,
      data: {},
    }

    this.sidebarToggler = this.sidebarToggler.bind(this);
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
        .then(() => this.getCurrentGroup(this.state.data.groups[0]))
    }
  }

  sidebarToggler = () => {
    if (document.body.classList.contains('close')) {
      document.body.classList.remove('close');
    } else {
      document.body.classList.add('close');
    }
  }

  getCurrentGroup = async (group) => {
    await getGroup(group.id)
    .then((res) => this.props.store.dispatch({
        type: 'SET_CURRENT',
        newCurrent: res
    }))
}




  render() {
    //if (this.state.isAuth) return <div>Authentification: {JSON.stringify(this.state.isAuth)}</div>
    if (this.state.isLoading || !this.state.isAuth) return <Loader />
    return (
      <div className="app-wrapper">
        <span className="statusBar">Authentification: {JSON.stringify(this.state.isAuth)}</span>
        <button className="sidebar-toggle" onClick={this.sidebarToggler}>
          <div className="sidebar-toggle-button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div>
          <SideMenu store={this.props.store} groups={this.state.data.groups}/>
        </div>
        <div className="main">
          <Header user={this.props.user}/>
          <section className="main-section">
            <div className="cont">
              <Content store={this.props.store} />
            </div>
          </section>
        </div>
        <section className="back-grad"></section>
      </div>
    );
  }
}
