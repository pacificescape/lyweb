import React from 'react';
import style from './Gifs.module.css'
import Gif from './Gif/Gif';


const Gifs = (props) => {

    let gifs = props.getGifs()

    let Gifs = gifs.map((id, index) => {
        return <Gif key={index} id={id}/>
    })


    return (
        <div className={style.gifs}>
            {Gifs}
        </div>
    )
}

export default Gifs;

// return (<video key={index} loop="loop" src={'/file/' + id} autoPlay="autoplay"></video>)


// удаление гифки по переданному id
// loop="loop" onHover
