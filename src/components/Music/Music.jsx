import React, { useState, useEffect } from 'react';
import s from './Music.module.css';

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => { //переключает playing в false когда закончилась музыка
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Music = () => {
    const [playing, setPlaying] = useState(false);
    let [src, setSrc] = useState('https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1')
    
    debugger
    let [audio] = useState(new Audio(src));

    //audio.src = 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effect-packs/zapsplat_pack_tropical_beach_preview.mp3';
    debugger

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing, src]);

    useEffect(() => { //переключает playing в false когда закончилась музыка
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return (
        <div>
            <button onClick={() => {
                setPlaying(!playing);
            }}>{playing ?'Pause' :'Play'}</button>
            <button onClick={() => {
                audio.src = 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effect-packs/zapsplat_pack_tropical_beach_preview.mp3';
            }}>Change</button>
            <button onClick={() => {
                audio.src = 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1';
            }}>Go back</button>
        </div>
    );
}

export default Music;