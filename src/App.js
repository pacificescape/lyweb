import React from 'react';

import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Content from './components/Content';

function App() {
  return (
    <div className="app-wrapper">
      <button className="sidebar-toggle show" onClick={sidebarToggler}>
        <div className="sidebar-toggle-button">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <aside className="side-bar">
        <SideMenu />
      </aside>
      <div className="main">
      <section className="main-section">
        <div className="header">
          <Header />
        </div>
        <div className="cont">
          <Content />
        </div>
      </section>
      </div>
      <section className="back-grad"></section>
    </div>
  );
}

const sidebarToggler = (event) => {
  console.log(event.currentTarget)
  let bar = document.getElementsByClassName("side-bar");
  let main = document.getElementsByClassName('main');
  if(event.currentTarget.classList.contains('show')) {
    event.currentTarget.classList.remove('show');
    event.currentTarget.style.width = '38px';
    event.currentTarget.style.transition = 'ease-out .2s';
    main[0].style.left = '0px';
    bar[0].style.left = '-301px';
  } else {
    event.currentTarget.style.width = '300px';
    event.currentTarget.style.transition = 'ease-out 1s';
    event.currentTarget.classList.add('show');
    main[0].style.left = '300px';
    bar[0].style.left = '0px';
  }
}

export default App;
