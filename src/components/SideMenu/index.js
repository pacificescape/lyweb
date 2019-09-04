import React, { Component } from 'react';
import styles from './SideMenu.module.css';
import '../../App.css';
import { NavLink } from 'react-router-dom'


export default class SideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            styles: styles,
            chatName: "LyChat",
            showSettings: false,
            search: '',
            groups: this.props.groups,
            currentChat: 'Current Chat',

        }

        this.inputSearch = this.inputSearch.bind(this)
        this.showSettings = this.showSettings.bind(this)
    }


    inputSearch = (event) => {
        this.setState({search: event.target.value})
        event.target.value.length > 0 ?
            document.getElementsByClassName(this.state.styles.clearButton)[0].style.display = 'block' :
            document.getElementsByClassName(this.state.styles.clearButton)[0].style.display = 'none';
    }

    renderChatList = () => {
        return this.state.groups.map((group) => (<NavLink to="test_chat" className={this.state.styles.chatToggle}>{group.title}</NavLink>))
    }

    showSettings = () => {
        console.log('showSettings is ' + this.state.showSettings)
        if (!this.state.showSettings) {
            document.getElementsByClassName(this.state.styles.dropdownSettings)[0].style.display = 'block';
            this.setState({ showSettings: true })
        } else {
            document.getElementsByClassName(this.state.styles.dropdownSettings)[0].style.display = 'none';
            this.setState({ showSettings: false })

        }
    }

    render() {
        let ChatList = this.renderChatList()

        return (
            <aside className={this.state.styles.sideBar}>
                <div className={this.state.styles.search}>
                    <div className={this.state.styles.inputWrapper}>
                        <input type="search" placeholder="Search" onChange={this.inputSearch} value={this.state.search}></input>
                        <div className={this.state.styles.clearButton} onClick={() => this.setState({search: ''})}>
                            <svg width="26" height="24">
                                <circle cx="12" cy="12" r="11" fill="#ccc"></circle>
                                <path stroke="white" strokeWidth="2" d="M8.25,8.25,15.75,15.75"></path>
                                <path stroke="white" strokeWidth="2" d="M8.25,15.75,15.75,8.25"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" className={this.state.styles.dropdownChats}><div>{this.state.currentChat}</div></button>
                        <div className={this.state.styles.chatsList}>{ChatList}</div>
                </div>
                <ul>
                    <li><NavLink to="/Info">Info</NavLink></li>
                    <li>
                        <NavLink to={`${this.state.currentChat}/Settings"`} className="" onClick={this.showSettings}>Settings</NavLink>
                        <ul className={this.state.styles.dropdownSettings} style={{ display: 'none' }}>
                            <li><NavLink to="/Settings/Greetings">Greetings</NavLink></li>
                            <li><NavLink to="/Settings/Gifs">Gifs</NavLink></li>
                            <li><NavLink to="/Settings/Bananas">Bananas</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/OtherProjects">Other Projects</NavLink></li>
                </ul>
            </aside>
        )
    }
}
