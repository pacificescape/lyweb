// import React from 'react';

// const Header = () => {
//     return (<div>
//         <a href="#s">Home</a>
//         <a href="#s">News Feed</a>
//         <a href="#s">Messages</a>
//     </div>);
// }

// export default Header;
// import ava from '../../img/ava.jpg' // default avatar
import styles from './Header.module.css';
import React, { Component } from 'react';
import {readCookie} from '../../utils'
// import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
// import { Home, Gifs, Greetings, NotFound } from './index'

export default class Header extends Component {

    render() {

        let nickName = readCookie("userName");
        let avatar = readCookie("userPhoto")
        return (
            <div className={styles.header}>
                <div className={styles.logo}>
                    <span className="">
                        LyAdminBot
                    </span>
                </div>
                <div className={styles.user}>
                        <img alt="avatar" src={avatar} className={styles.ava}></img>
                        <span>{nickName}</span>
                </div>
            </div>
        )
    }
}
