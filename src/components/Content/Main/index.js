import React, { Component } from 'react';
import { getFile } from '../../../API'
import styles from './Main.module.css';

class Main extends Component {

    state = {
        gifs: [
            'CgADAQADJwADjj5JRQ7K3IDKCYJ_FgQ',
            'CgADAQADJwADjj5JRQ7K3IDKCYJ_FgQ',
            'CgADAQADJwADjj5JRQ7K3IDKCYJ_FgQ',
        ],
        isLoadingGIFs: true,
        isLoading: true
    }

    getGifs = async (gifs) => {
       let listPromises = gifs.map(async (id) => {
                let link;
                let tag;
                await getFile(id)
                .then(res => link = res.link)

                tag = <video className={styles.video}loop="loop" src={link} autoPlay="autoplay"></video>

                return tag;
            })
        return Promise.all(listPromises);
    } // какая то хуета? всё переделать

    componentDidMount() {
        this.getGifs(this.state.gifs)
        .then(res=>{console.log(res); return res})
        .then(res => this.setState({isLoadingGIFs: false, gifs: res}))
    }



    render() {

        let link = this.state.gifs

        return (
            <div>
            {link}
        </div>
    )
}
}

export default Main;
