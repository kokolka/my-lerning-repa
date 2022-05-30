import React, { useEffect, useState } from 'react';
import s from './OnlyCatPage.module.css';

// let arrowImg = [1, 2, 3, 1, 1, 1, 3, 3, 2, 2, 3, 1, 1, 2, 3, 3, 1, 1, 1, 2, 3, 2, 1, 3, 1, 1, 1, 2, 3, 3]; //arrow for size img

let arrowImg = [];

let columns = 7; //number of columns
let initArrow = []; //main arrow

let SetArrowColumns = () => {
    initArrow = [];
    for (let i = 0; i < columns; i++) {
        initArrow.push([]);
    }
}

let CreateArrowContent = () => {
    SetArrowColumns();
    let countBox = 0;
    for (let j = 0; j < arrowImg.length; j++) {
        initArrow[countBox].push(arrowImg[j]);

        countBox = countBox + 1;
        if (countBox >= columns) {
            countBox = 0;
        }
    }
    let arrowBoxElem = initArrow.map(el => {
        return <div className={s.columns_element}>
            {el.map(yt => {
                return <ElementFotoBox size={yt} />
            })}
        </div>
    })

    return arrowBoxElem;
}

const ElementFotoBox = (props) => {
    return <div className={props.size <= 1
        ? s.foto_block__1
        : props.size <= 2 && props.size > 1
            ? s.foto_block__2
            : props.size <= 3 && props.size > 2
                ? s.foto_block__3
                : s.foto_block__1
    }>
        <div className={props.size <= 1
            ? s.foto_block__element__1
            : props.size <= 2 && props.size > 1
                ? s.foto_block__element__2
                : props.size <= 3 && props.size > 2
                    ? s.foto_block__element__3
                    : s.foto_block__element__1
        }>
            <img src='https://cdn.mos.cms.futurecdn.net/5FmFtc974AjN255w6iELLj.jpg'
                className={props.size <= 1
                    ? s.foto_block__cat__1
                    : props.size <= 2 && props.size > 1
                        ? s.foto_block__cat__2
                        : props.size <= 3 && props.size > 2
                            ? s.foto_block__cat__3
                            : s.foto_block__cat__1
                }
            />
        </div>
    </div>
}

const GetRandomSizeImg = (number) => {
    for (let i = 0; i < number; i++) {
        arrowImg.push(Math.ceil(Math.random() * (3 - 1) + 1));
    }
}

const OnlyCatPage = () => {

    let [lengthArrow, setLengthArrow] = useState(arrowImg.length);

    useEffect(() => {
        
    }, [lengthArrow]);


    if(arrowImg.length === 0){
        GetRandomSizeImg(10);
    }

    return (
        <div>
            <div className={s.foto_main_block}>
                {CreateArrowContent()}
            </div>
            <div className={s.button_block}>
                <button
                    className={s.button_block__element}
                    onClick={() => {
                        GetRandomSizeImg(10);
                        setLengthArrow(arrowImg.length)
                    }}
                >
                    Add cat
                </button>
            </div>
        </div>
    );
}

export default OnlyCatPage;