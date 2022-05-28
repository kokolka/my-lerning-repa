import React, { useEffect, useState } from 'react';
import s from './OnlyCatPage.module.css';

let b = [];

const CreateArrow = (arr, elements) => {
    for (let i = 0; i < elements; i++) {
        arr.push(Math.random() * (3 - 1) + 1);
    }
}

const ElementBox = (props) => {
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

const OnlyCatPage = () => {

    let [elementForArrow, addElements] = useState(20);
    let [oldElement, setOldElement] = useState(0);
    CreateArrow(b, elementForArrow);

    useEffect(() => {
        CreateArrow(b, (elementForArrow - oldElement));
    }, [elementForArrow])

    return (
        <div>
            <div className={s.foto_main_block}>
                {b.map(el => {
                    return <ElementBox size={el} />
                })}
            </div>
            <div className={s.button_block}>
                <button className={s.button_block__element} onClick={() => {
                    setOldElement(elementForArrow);
                    addElements(elementForArrow + 10);
                    alert(elementForArrow)
                }}>
                    Add cat
                </button>
            </div>
        </div>
    );
}

export default OnlyCatPage;