import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Info from './Info/Info';
import Settings from './Settings/Settings';
import OtherProjects from './OtherProjects/OtherProjects';
import General from './General/General';
import Gifs from './Gifs/Gifs'


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
        currentGroup: this.props.currentGroup
    }

}

componentDidMount() {
    console.log('Content did mount')
    this.setState({
        currentGroup: this.props.store.getState()
    })
    }

    componentDidUpdate() {
        console.log('Content did update')
    }

    render() {
        return (
            <div style={{ margin: 'auto', textAlign: 'center' }}>
                <h2>Main content</h2>
                <Switch>
                    <Route path='/Info' component={() => <General component={() => <Info/>} /> }></Route>
                    <Route exact path='*/Settings' component={() => <General component={() => <Settings/>}/> }></Route>
                    <Route path='*/OtherProjects' component={() => <General component={() => <OtherProjects/>} />}></Route>
                    <Route path='*/Gifs' component={() => <General component={() => <Gifs getGifs={this.props.getGifs}/>} /> }></Route>
                </Switch>
            </div>
        )
    }
}

export default Main;
