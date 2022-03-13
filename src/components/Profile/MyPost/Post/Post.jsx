import React from 'react';
import prof from './Post.module.css';
//import './Profile.css';

const Post = () => {
    return (
        <div className={prof.item}>
            <img src='https://steamuserimages-a.akamaihd.net/ugc/107355289194191020/345573EF77314191D5F6A7226451A176B8409095/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true' ></img>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;