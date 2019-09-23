import React, { Component } from 'react';
// import styles from './General.module.css';

class General extends Component {

    state = {
        gifs: [
            'CgADAQADJwADjj5JRQ7K3IDKCYJ_FgQ',
        ],
        isLoadingGIFs: true,
        isLoading: true
    }

    // getGifs = async (gifs) => {
    //    let Gifs = gifs.map((id, index) => {
    //             return (<video key={index} className={styles.video}loop="loop" src={'/file/' + id} autoPlay="autoplay"></video>)
    //         })
    //     return Gifs
    // }

    componentDidMount() {
        // (this.props.component === this.state.component) ? this.setState({isLoadingGIFs: false}) : this.setState({component: this.props.component})
    }



    render() {

        //let gifs = this.props.getGifs(this.state.gifs)
        // let component = this.props.component()
        console.log(this.props.component)

        return (
            <div>
                {this.props.component()}
            </div>
        )
    }
}

export default General;
