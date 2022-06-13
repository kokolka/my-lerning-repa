import React from "react";

const AudioControl = (props) => {
    return (
        <div>
            <button onClick={props.toPrevTrack}>
                Prev
            </button>
            {props.isPlaying
                ? <button onClick={() => {
                    props.toPause(false)
                }}>Stop</button>
                : <button onClick={() => {
                    props.toPause(true)
                }}>Play</button>}
            <button onClick={props.toNextTrack}>
                Next
            </button>
        </div>
    )
}

export default AudioControl;