import React, { Component } from 'react'
import styles from './Gif.module.css'

export default class Gif extends Component {
    render() {
        let id = this.props.id
        return (
            <div>
                <video
                loop
                muted='muted'
                // playsInline='playsinline'
                // loop
                // muted
                // controls
                autoPlay='autoplay'
                preload="auto"
                // autoPlay="autoplay"
                src={'/file/' + id}
                className={styles.video}
                type='video/mp4'
                ></video>
            </div>)
    }
}
