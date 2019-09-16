import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Info from './Info/';
import Settings from './Settings/';
import OtherProjects from './OtherProjects/';
import Main from './Main/';

class Content extends Component {

  constructor(props) {
    super(props);

    this.state = {
        currentGroup: this.props.currentGroup
    }
  }

    componentDidMount() {
        console.log('Content did mount')
        setTimeout(() => {console.log(this.props.store.getState())}, 3000)
        this.setState({
            currentGroup: this.props.store.getState()
        })
    }

    componentDidUpdate() {
        console.log('Content did update')
    }

    render() {
        setTimeout(() => console.log(this.state.currentGroup), 2000)
        return (
            <div style={{ margin: 'auto', textAlign: 'center' }}>
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
}

export default Content;
