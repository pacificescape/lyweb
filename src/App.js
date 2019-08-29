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
  let bar = document.getElementsByClassName("side-bar")[0];
  if(document.getElementsByTagName('body')[0].classList.contains('show')) {
    document.getElementsByTagName('body')[0].classList.remove('show');
    //bar.style.transform = 'translateX(-301px)';
  } else {
    document.getElementsByTagName('body')[0].classList.add('show');
    //bar.style.transform = 'translateX(0px)';
  }
}

export default App;
