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
            currentTitle: 'Current Chat',
            currentGroup: {},
            clearButtonDisplay: 'none'
        }

        this.inputSearch = this.inputSearch.bind(this);
        this.showSettings = this.showSettings.bind(this);
        this.clearButton = this.clearButton.bind(this);

    }

    clearButtonElement = React.createRef();
    dropdownSettings = React.createRef();

    componentDidMount() {
        console.log('sidebar is mounted')
        console.log( this.props.store.getState())
        this.setState({
            currentTitle: this.props.store.getState().currentGroup.title || 'no chats'
        })
    }

    clearButton = () => {
        this.setState({search: ''})
        debugger;
        this.clearButtonElement.current.style.display = 'none';
    }

    inputSearch = (event) => {
        this.setState({search: event.target.value})
        event.target.value.length > 0 ?
            this.clearButtonElement.current.style.display = 'block' :
            this.clearButtonElement.current.style.display = 'none';
    }

    renderChatList = () => {
        return this.state.groups.map((group, index) =>
            <NavLink
                to={group.title}
                className={this.state.styles.chatToggle}
                onClick={() => {this.props.getCurrentGroup(group)}}
                key={index}>
                {group.title}
            </NavLink>
        );
    }

    showSettings = () => {
        console.log('showSettings is ' + this.state.showSettings)
        if (!this.state.showSettings) {
            this.dropdownSettings.current.style.display = 'block';
            this.setState({ showSettings: true })
        } else {
            this.dropdownSettings.current.style.display = 'none';
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
                        <div ref={this.clearButtonElement} className={this.state.styles.clearButton} onClick={this.clearButton}>
                            <svg width="26" height="24">
                                <circle cx="12" cy="12" r="11" fill="#ccc"></circle>
                                <path stroke="white" strokeWidth="2" d="M8.25,8.25,15.75,15.75"></path>
                                <path stroke="white" strokeWidth="2" d="M8.25,15.75,15.75,8.25"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" className={this.state.styles.dropdownChats}><div>{this.state.currentTitle}</div></button>
                        <div className={this.state.styles.chatsList}>{ChatList}</div>
                </div>
                <ul>
                    <li><NavLink to="/Info">Info</NavLink></li>
                    <li>
                        <NavLink to={`${this.state.currentTitle}/Settings`} className="" onClick={this.showSettings}>Settings</NavLink>
                        <ul ref={this.dropdownSettings} className={this.state.styles.dropdownSettings} style={{ display: 'none' }}>
                            <li><NavLink to={`${this.state.currentTitle}/Settings/Greetings`}>Greetings</NavLink></li>
                            <li><NavLink to={`${this.state.currentTitle}/Settings/Gifs`}>Gifs</NavLink></li>
                            <li><NavLink to={`${this.state.currentTitle}/Settings/Bananas`}>Bananas</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/OtherProjects">Other Projects</NavLink></li>
                </ul>
            </aside>
        )
    }
}
