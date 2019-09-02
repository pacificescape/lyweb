import React from 'react';
import { Redirect } from 'react-router-dom';
import styles from './Loader.module.css';

const Loader = () => (

    <div className={styles.bananaContainer}>
        <Redirect from="/ew" to="/" />
        <div className={styles.banana}>
            <img alt='ban' src='https://media.giphy.com/media/2yzIXo95cy4Y7sGCNM/giphy.gif' width="100" className=''></img>
        </div>
        <div id="authButton" className={styles.authButton} />
    </div>
)

export default Loader;


                // <div className="mt-5">
                //     <Redirect from="/we" to="/" />
                //     <div className="mx-auto" style={{width: "fit-content"}}>
                //         <img alt='' src='https://media.giphy.com/media/2yzIXo95cy4Y7sGCNM/giphy.gif' width="100" className=''></img>
                //     </div>
                //     <div className="mx-auto" style={{width: "fit-content"}}>
                //         <h2 className="text-warning text-center">Войти</h2>
                //         <div id="authButton"></div>
                //     </div>
                // </div>
