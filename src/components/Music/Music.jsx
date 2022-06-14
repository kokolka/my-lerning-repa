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
    let { title, artist, audioSrc, image, id } = props.songs[nowSong];

    //Refs
    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef = useRef(); //ссылка для setInterval
    const isReady = useRef(false); //готовность выполнения кого-то действия

    // Destructure for conciseness
    const { duration } = audioRef.current;

    const startTimer = () =>{
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => { 
            if(audioRef.current.ended){
                toNextTrack();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]); //считываем значение каждую секунду
    }

    useEffect(() => {
        if(isPlaying){
            audioRef.current.play(); //включение песни
            startTimer();
        } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
        }
    }, [isPlaying]); 

    useEffect(() => {
        audioRef.current.pause();

        audioRef.current = new Audio(audioSrc);
        setTrackProgress(audioRef.current.currentTime);

        if(isReady.current){
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        }else{
            isReady.current = true;
        }

    }, [nowSong]); //при переключении песни

    useEffect(() => {
        //остановка песни и отчитска интервала
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
    }, []);

    const toPrevTrack = () => { //для переключения на прошлый трек
        if(nowSong - 1 < 0){
            SetNowSong(props.songs.length - 1); //переходим на последнюю песню в списке
        } else {
            SetNowSong(nowSong - 1);//переходим на предыдушую песню
        }
    }
    const toNextTrack = () => { //для переключения на следующий трек
        if(nowSong < props.songs.length - 1){
            SetNowSong(nowSong + 1);//переход на следующию песню
        } else {
            SetNowSong(0);//переход на первую песню в списке
        }
    }

    const onScrub = (value) => {
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    }

    const onScrubEnd = () => {
        if(isPlaying){
            setIsPlaying(true);
        }
        startTimer();
    }

    return (
        <div className={s.audioPlayer_box}>
            <div className={s.audioPlayer_box__track_info}>
                <img
                    className={s.track_info__avatar}
                    src={image}
                    alt={`track artwork for ${title?title:'Undefined'} by ${artist?artist:'Undefined'}`}
                />
                <h2 className={s.track_info__title}>{title?title:'Undefined'}</h2>
                <h3 className={s.track_info__artist}>{artist?artist:'Undefined'}</h3>
                <input
                    type='range'
                    value={trackProgress}
                    step='1'
                    min='0'
                    max={duration ?duration :`${duration}`}
                    className={s.track_info__range}
                    onChange={(e) => onScrub(e.target.value)}
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                />
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