import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Info from './Info/';
import Settings from './Settings/';
import OtherProjects from './OtherProjects/';
import Main from './Main/';

const Content = () => {
    return (
        <div style={{margin: 'auto', textAlign: 'center'}}>
            <h2>Main content</h2>
            <Switch>
                <Route path='/Info' component={Info}></Route>
                <Route path='/Settings' component={Settings}></Route>
                <Route path='/OtherProjects' component={OtherProjects}></Route>
                <Route path='/' component={Main}></Route>
            </Switch>
        </div>
    )
}

export default Content;
