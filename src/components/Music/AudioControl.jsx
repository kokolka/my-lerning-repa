import React from "react";
import s from './Music.module.css';
import Play from '../../assets/imeges/play.png';
import Pause from '../../assets/imeges/Stop.png';
import Next from '../../assets/imeges/next.png';
import Prev from '../../assets/imeges/back.png';

const AudioControl = (props) => {
    return (
        <div>
            <button
                className={s.button_audio}
                onClick={props.toPrevTrack}>
                <img src={Prev} />
            </button>
            {props.isPlaying
                ? <button
                    className={s.button_audio}
                    onClick={() => {
                        props.toPause(false)
                    }}><img src={Pause} /></button>
                : <button
                    className={s.button_audio}
                    onClick={() => {
                        props.toPause(true)
                    }}><img src={Play} /></button>}
            <button
                className={s.button_audio}
                onClick={props.toNextTrack}>
                <img src={Next} />
            </button>
        </div>
    )
}

export default AudioControl;