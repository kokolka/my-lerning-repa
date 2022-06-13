import React, { useState, useEffect, useRef } from 'react';
import AudioControl from './AudioControl';
import s from './Music.module.css';


const Music = (props) => {
    //Плеер на основе статьи: https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
    //state
    const [nowSong, SetNowSong] = useState(0); //текущий номер песни из массива
    const [trackProgress, setTrackProgress] = useState(0); //прогресс песни
    const [isPlaying, setIsPlaying] = useState(false); //Играет ли песня

    //деструкторизация данных с store.state.music.songs
    let { title, artist, audioSrc, image, color } = props.songs[nowSong];

    //Refs
    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef = useRef(); //ссылка для setInterval
    const isReady = useRef(false); //готовность выполнения кого-то действия

    // Destructure for conciseness
    const { duration } = audioRef.current;

    const toPrevTrack = () => { //для переключения на прошлый трек
        console.log('TODO go to prev');
    }
    const toNextTrack = () => { //для переключения на следующий трек
        console.log('TODO go to next');
    }


    return (
        <div className={s.audioPlayer_box}>
            <div className={s.audioPlayer_box__track_info}>
                <img
                    className={s.track_info__avatar}
                    src={image}
                    alt={`track artwork for ${title} by ${artist}`}
                />
                <h2 className={s.track_info__title}>{title}</h2>
                <h3 className={s.track_info__artist}>{artist}</h3>
                <AudioControl
                    isPlaying={isPlaying}
                    toPrevTrack={toPrevTrack}
                    toNextTrack={toNextTrack}
                    toPause={setIsPlaying}
                />
            </div>
        </div>
    );
}

export default Music;