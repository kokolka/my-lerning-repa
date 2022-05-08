import React from "react";
import axios from 'axios';
import s from './Users.module.css';
import noPhoto from '../../assets/imeges/noPhoto.png';
import Preloader from "../common/Preloader/Preloader";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

let Users = (props) => {

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
        <div>
            <div className={s.numberPage}>
                <div className={s.numberPage_box}>
                    {arrPages.map(el => { //отображение номеров страниц для переключения с изменением стиля 
                        return (
                            <span className={el === props.currentPage ? s.activePage : s.pasivPage}
                                onClick={() => { props.onPageChanged(el) }}
                            >{el}</span>
                        );
                    })}
                </div>
            </div>
            {props.isFetching ?
                <Preloader />: //если данные с сервера не пришли, то запускаем анимацию загрузки
                props.users.map(u => { //отображение пользователь по одному
                    return (
                        <div className={s.userBox} key={u.id}>
                            <div className={s.userBox_foto}>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img src={u.photos.small != null ? u.photos.small : noPhoto} className={s.foto} />
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button
                                            disabled={props.followingIsProgress.some(id => id === u.id)}
                                            className={s.followButton}
                                            onClick={() => { props.unfollow(u.id); }}
                                        >Unfollow</button>
                                        : <button
                                            disabled={props.followingIsProgress.some(id => id === u.id)}
                                            className={s.followButton}
                                            onClick={() => { props.follow(u.id); }}
                                        >Follow</button>
                                    }
                                </div>
                            </div>
                            <div className={s.userBox_userData}>
                                <div className={s.userData_profile}>
                                    <div className={s.userName}>
                                        {`${u.name}`}
                                    </div>
                                    <div className={s.userStatus}>
                                        {`Status: ${u.status != null ? u.status : ''}`}
                                    </div>
                                </div>
                                <div className={s.userLocation}>
                                    <div className={s.userLocation_city}>
                                        {'u.location.city'}
                                    </div>
                                    <div className={s.userLocation_country}>
                                        {'u.location.country'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Users;