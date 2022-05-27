import React from "react";
import s from './Users.module.css';

let Paginetion = (props) => {

    let pagesCount = Math.ceil(props.pageTotalCount / props.pageSize);

    //логика для отображения номеров страниц 
    let arrPages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pagesCount > 10) {
            if (props.currentPage >= 2 && props.currentPage === i) {
                if (props.currentPage >= 100) {
                    arrPages.push(1);
                    arrPages.push(i - 1);
                    arrPages.push(i);
                    if (i + 1 <= pagesCount) {
                        arrPages.push(i + 1);
                    }
                } else {
                    arrPages.push(i - 1);
                    arrPages.push(i);
                    arrPages.push(i + 1);
                    arrPages.push(pagesCount);
                }
            }
            else if (props.currentPage < 2 && props.currentPage === i) {
                arrPages.push(i);
                arrPages.push(i + 1);
                arrPages.push(i + 2);
                arrPages.push(pagesCount);
            }

        }
        else {
            arrPages.push(i);
        }
    }

    return (
            <div className={s.numberPage}>
                <div className={s.numberPage_box}>
                    {arrPages.map(el => { //отображение номеров страниц для переключения с изменением стиля 
                        return (
                            <span key={el} className={el === props.currentPage ? s.activePage : s.pasivPage}
                                onClick={() => { props.onPageChanged(el) }}
                            >{el}</span>
                        );
                    })}
                </div>
            </div>
    );
}

export default Paginetion;