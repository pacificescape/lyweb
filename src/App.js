import React from 'react';
import Header from './components/Header/';
import './App.css';
import SideMenu from './components/SideMenu/';
import Content from './components/Content/';

function App() {
  return (
    <div className="app-wrapper">
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
                <Header />
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

const sidebarToggler = () => {
  if (document.getElementsByTagName('body')[0].classList.contains('close')) {
    document.getElementsByTagName('body')[0].classList.remove('close');
  } else {
    document.getElementsByTagName('body')[0].classList.add('close');
  }
}

export default App;
