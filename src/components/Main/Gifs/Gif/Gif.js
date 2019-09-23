import React, { Component } from 'react'
import styles from './Gif.module.css'

export default class Gif extends Component {
    render() {
        let id = this.props.id
        return (
            <div>
                <video
                playsInline
                autoPlay={true}
                style={{borderRadius: "10px"}}
                preload="auto"
                loop = {true}
                muted = {true}
                controls = {false}
                src={'/file/' + id}
                className={styles.video}
                type='video/mp4'
                ></video>
            </div>)
    }
}
