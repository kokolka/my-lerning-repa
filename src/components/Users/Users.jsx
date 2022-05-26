import React from "react";
import s from './Users.module.css';
import noPhoto from '../../assets/imeges/noPhoto.png';
import Preloader from "../common/Preloader/Preloader";
import { NavLink } from "react-router-dom";
import Paginetion from "./Paginetion";

let Users = (props) => {
    return (
        <div>
            <Paginetion pageTotalCount={props.pageTotalCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
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