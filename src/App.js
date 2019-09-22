import React, { Component } from 'react';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import './App.css';
import SideMenu from './components/SideMenu/SideMenu';
import Main from './components/Main/Main';
import { getCookies, getUserGroups, getGroup } from './API'
// http://localhost:3000/login?id=686968130&first_name=Аркаша Одесская 🇸🇴&username=im_the_bot&photo_url=https%3A%2F%2Ft.me%2Fi%2Fuserpic%2F320%2Fim_the_bot.jpg&auth_date=1561386715&hash=474d370a659c2fd9fa4ea87de5ba5a15e642e62ffe63e6076663dae0203a0dc9
export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isError: false,
      error: {},
      isLoading: true,
      isAuth: false,
      data: {},
      currentGroup: this.props.store.getState().currentGroup
    }

    this.sidebarToggler = this.sidebarToggler.bind(this);
    this.getGifs = this.getGifs.bind(this);
  }

  componentDidMount() {

    if (this.props.url.indexOf('login') !== -1) {
      getCookies(this.props.url)
        .then(() => {
          getUserGroups()
          .then(res => this.setState(res))
        })
    } else {
      getUserGroups()
        .then(res => {this.setState(res); return res})
        .then((res) => this.getCurrentGroup(res.data.groups[0]))
        .catch((err) => console.log({isError: true, error: err}))
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
        payload: res
    }))
    .then((res)=> this.setState({currentGroup: res.payload.result }))
}

  getGifs = () => {
    return this.state.currentGroup.settings.welcome.gifs
  }

  render() {
    if (this.state.isLoading || !this.state.isAuth) return <Loader isAuth={this.state.isAuth} />
    return (
      <div className="app-wrapper">
        <button className="sidebar-toggle" onClick={this.sidebarToggler}>
          <div className="sidebar-toggle-button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div>
          <SideMenu store={this.props.store} getCurrentGroup={this.getCurrentGroup} groups={this.state.data.groups}/>
        </div>
        <div className="main">
          <Header user={this.props.user}/>
          <section className="main-section">
            <div className="cont">
              <Main store={this.props.store} getGifs={this.getGifs} currentGroup={this.state.currentGroup}  />
            </div>
          </section>
        </div>
        <section className="back-grad"></section>
      </div>
    );
  }
}
