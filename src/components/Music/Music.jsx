import React from 'react';
import prof from './Music.module.css';
//import './Profile.css';

const Music = () => {

    return (
        <div>
            Music
            <div>
                <button onClick={() => {
                    new Promise(function(resolve, reject){
                        setTimeout(() => resolve('result'), 2000)
                    })
                        .finally(() => alert('Promise is out'))
                        .then(result => alert(result));
                }}>
                    Test setTimeout and promise
                </button>
            </div>
        </div>
    );
}

export default Music;