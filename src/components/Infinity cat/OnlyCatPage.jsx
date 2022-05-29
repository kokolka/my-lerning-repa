import React, { useEffect, useState } from 'react';
import s from './OnlyCatPage.module.css';

let b = [1, 2, 3, 1, 2, 3, 3, 3, 2, 2, 2];
let colum = 6;
let fotoOnColum = Math.ceil(b.length / colum);
console.log(`fotoOnColum: ${fotoOnColum}`);
let lastElement = 0;
let a = 1;

// const CreateArrow = (arr, elements) => {
//     for (let i = 0; i < elements; i++) {
//         arr.push(Math.ceil(Math.random() * (3 - 1) + 1));
//     }
// }

const ArrFotoOnColum = () => {
    let componentFt = [];
    for(let j = lastElement; j < b.length; j++){
        if(a <= fotoOnColum){
            a = a + 1;
            componentFt.push(<ElementFotoBox size={b[j]}/>);
        }else{
            a = 0;
            lastElement = j;
            break;
        }
    }

    return componentFt;
}

const ColumnsElement = () => {
    let componentEl = []
    for(let i = 1; i <= colum; i++){
        componentEl.push(<div className={s.ggg}>
            <ArrFotoOnColum />
        </div>)
    }

    return componentEl;
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

const OnlyCatPage = () => {

    const n = [1, 2, 3, 4, 5, 6];
    // let [elementForArrow, addElements] = useState(5);
    // let [oldElement, setOldElement] = useState(0);
    // CreateArrow(b, elementForArrow);

    // useEffect(() => {
    //     CreateArrow(b, elementForArrow);
    // }, [elementForArrow])

    return (
        <div>
            <div className={s.foto_main_block}>
                <ColumnsElement />
                {/* {
                    n.map(p => {
                        return (
                            <ColumnsElement />
                        );
                    })} */}
                {/* {b.map(el => {
                    return <ElementBox size={el} />
                })} */}
            </div>
            <div className={s.button_block}>
                <button
                    className={s.button_block__element}
                // onClick={() => {
                //     setOldElement(elementForArrow);
                //     addElements(elementForArrow + 10);
                //     alert(elementForArrow)
                // }}
                >
                    Add cat
                </button>
            </div>
        </div>
    );
}

export default OnlyCatPage;