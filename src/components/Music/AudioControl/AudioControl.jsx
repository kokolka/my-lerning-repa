import React from "react";
import s from './AudioControl.module.css';
import Play from '../../../assets/imeges/play.png';
import Pause from '../../../assets/imeges/Stop.png';
import Next from '../../../assets/imeges/next.png';
import Prev from '../../../assets/imeges/back.png';

const AudioControl = (props) => {
    return (
        <div className={s.control_box}>
            <div>
                {props.isPlaying
                    ? <button
                        className={s.button_audio__play}
                        onClick={() => {
                            props.toPause(false)
                        }}><img src={Pause} /></button>
                    : <button
                        className={s.button_audio__play}
                        onClick={() => {
                            props.toPause(true)
                        }}><img src={Play} /></button>}
            </div>
            <div>
                <button
                    className={s.button_audio_next}
                    onClick={props.toPrevTrack}>
                    <img src={Prev} />
                </button>
            </div>
            <div>
                <button
                    className={s.button_audio_next}
                    onClick={props.toNextTrack}>
                    <img src={Next} />
                </button>
            </div>
        </div>
    )
}

export default AudioControl;