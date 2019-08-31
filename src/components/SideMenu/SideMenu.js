import React, { Component } from 'react';
import styles from './SideMenu.module.css';
import '../../App.css';

const SideMenu = () => {
    let chatName = 'LyChat';
    return (
        <aside className={styles.sideBar}>
            <div className={styles.search}>
                <div className={styles.inputWrapper}>
                    <input type="search" placeholder="Search" onChange={inputSearch}></input>
                    <div className={styles.clearButton}>
                        <svg width="26" height="24">
                            <circle cx="12" cy="12" r="11" fill="#ccc"></circle>
                            <path stroke="white" strokeWidth="2" d="M8.25,8.25,15.75,15.75"></path>
                            <path stroke="white" strokeWidth="2" d="M8.25,15.75,15.75,8.25"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <button type="button" className={styles.dropdownChats}>Chat Name</button>
                <ul className={styles.chatsList}>
                    <li className={styles.chatToggle}><a href={'#' + chatName}>LyChat</a></li>
                </ul>
            </div>
            <ul>
                <li><a href="#Info">Info</a></li>
                <li>
                    <a href="#Settings" onClick={showSettings}>Settings</a>
                    <ul className={styles.dropdownSettings} style={{display: 'none'}}>
                        <li><a href="#Greetings">Greetings</a></li>
                        <li><a href="#Gifs">Gifs</a></li>
                        <li><a href="#Bananas">Bananas</a></li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                        <li>sdfsdf</li>
                    </ul>
                </li>
                <li><a href="#e">Other Projects</a></li>
            </ul>
        </aside>
    )
}


const inputSearch = (event) => {

}

const showSettings = (event) => {
    console.log(event)
    if (event.target.classList.contains('dropped')) {
        event.target.classList.remove('dropped');
        event.target.nextElementSibling.style.display = 'none';
    } else {
        event.target.classList.add('dropped');
        event.target.nextElementSibling.style.display = 'block';
    }
}


export default SideMenu;
