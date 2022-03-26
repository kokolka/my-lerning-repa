import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://steamuserimages-a.akamaihd.net/ugc/107355289194191020/345573EF77314191D5F6A7226451A176B8409095/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true' ></img>
            <p>{props.message}</p>
            <div>
                <span>Like:</span>
                <span className={s.likeCounts}>{props.likeCounts}</span>
            </div>
        </div>
    );
}

export default Post;