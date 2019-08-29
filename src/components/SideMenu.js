import React from 'react';


const SideMenu = () => {
    let chatName = 'LyChat';
    return (
        <div>
            <div className="search">
                <div className="input-wrapper">
                    <input type="search" placeholder="Search"></input>
                    <div className="clear-button">
                        <svg width="26" height="24">
                            <circle cx="12" cy="12" r="11" fill="#ccc"></circle>
                            <path stroke="white" strokeWidth="2" d="M8.25,8.25,15.75,15.75"></path>
                            <path stroke="white" strokeWidth="2" d="M8.25,15.75,15.75,8.25"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <button type="button" className="dropdown-chats">Chat Name</button>
                <ul className="chats-list">
                    <li className="chat-toggle"><a href={'#' + chatName}>LyChat</a></li>
                </ul>
            </div>
            <ul>
                <li><a href="#Info">Info</a></li>
                <li>
                    <a href="#Settings" onClick={showSettings}>Settings</a>
                    <ul className="dropdown-settings" style={{display: 'none'}}>
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
        </div>
    )
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
