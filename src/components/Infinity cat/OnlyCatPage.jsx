import React, { useEffect, useState } from 'react';
import s from './OnlyCatPage.module.css';
import MediaQuery, { useMediaQuery } from 'react-responsive';

let arrowImg = [];


let initArrow = []; //main arrow



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
    //let columns = 7; //number of columns

    let [columns, setColumns] = useState(1);
    let [lengthArrow, setLengthArrow] = useState(arrowImg.length);

    useEffect(() => {
        // alert(columns)
    }, [lengthArrow, columns]);

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

    if (arrowImg.length === 0) { //initial set size colum img
        GetRandomSizeImg(10);
    }

    let sizeBox = {
        parentSize280: useMediaQuery({ minWidth: 279 }, undefined, (() => { setColumns(1) })),
        parentSize375: useMediaQuery({ minWidth: 374 }, undefined, (() => { setColumns(2) })),
        parentSize600: useMediaQuery({ minWidth: 625 }, undefined, (() => { setColumns(3) })),
        parentSize768: useMediaQuery({ minWidth: 765 }, undefined, (() => { setColumns(4) })),
        //parentSize912 : useMediaQuery({minWidth: 907}, undefined, (() => {setColumns(4)})),
        parentSize1024: useMediaQuery({ minWidth: 1020 }, undefined, (() => { setColumns(5) })),
        // parentSize1280 : useMediaQuery({minWidth: 1270}, undefined, (() => {setColumns(5)})),
        parentSize1366: useMediaQuery({ minWidth: 1360 }, undefined, (() => { setColumns(7) })),
        parentSize1440: useMediaQuery({ minWidth: 1430 }, undefined, (() => { setColumns(8) })),
        parentSize1600: useMediaQuery({ minWidth: 1590 }, undefined, (() => { setColumns(8) })),
        parentSize1680: useMediaQuery({ minWidth: 1670 }, undefined, (() => { setColumns(8) })),
        parentSize1920: useMediaQuery({ minWidth: 1900 }, undefined, (() => { setColumns(8) })),
        parentSize2560: useMediaQuery({ minWidth: 2550 }, undefined, (() => { setColumns(10) })),
        parentSize3440: useMediaQuery({ minWidth: 3430 }, undefined, (() => { setColumns(12) }))
    }

    return (
        <div>
            <div>
                {/* {sizeBox.parentSize3440
                ? <p>3440</p>
                : sizeBox.parentSize2560
                ? <p>2560</p>
                : sizeBox.parentSize1920 
                ? <p>1920</p>
                : sizeBox.parentSize1680
                ? <p>1680</p>
                : sizeBox.parentSize1600
                ? <p>1600</p>
                : sizeBox.parentSize1440
                ? <p>1440</p>
                : sizeBox.parentSize1366
                ? <p>1366</p>
                // : sizeBox.parentSize1280
                // ? <p>1280</p>
                : sizeBox.parentSize1024
                ? <p>1024</p>
                // : sizeBox.parentSize912
                // ? <p>912</p>
                : sizeBox.parentSize768
                ? <p>768</p>
                : sizeBox.parentSize375
                ? <p>375</p>
                : sizeBox.parentSize280
                ? <p>280</p>
                : <p>more low size</p>
                } */}
                <MediaQuery minWidth={280} onChange={() => { setColumns(1) }}>
                <MediaQuery minWidth={375} onChange={() => { setColumns(2) }}>
                <MediaQuery minWidth={767} onChange={() => { setColumns(3) }}>
                <MediaQuery minWidth={992} onChange={() => { setColumns(4) }}>
                <MediaQuery minWidth={1200} onChange={() => { setColumns(7) }}>
                        <MediaQuery minWidth={1440} onChange={() => { setColumns(7) }}>
                        <MediaQuery minWidth={1600} onChange={() => { setColumns(7) }}>
                        <MediaQuery minWidth={1920} onChange={() => { setColumns(7) }}>
                        <MediaQuery minWidth={3440} onChange={() => { setColumns(7) }}>
                        <MediaQuery minWidth={8000} onChange={() => { setColumns(7) }}>
                        </MediaQuery>
                        </MediaQuery>
                        </MediaQuery>
                        </MediaQuery>
                        </MediaQuery>
                </MediaQuery>
                </MediaQuery>
                </MediaQuery>
                </MediaQuery>
                </MediaQuery>
                

            </div>
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