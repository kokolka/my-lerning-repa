import React from "react";
import Preloader from "../common/Preloader/Preloader";
import Paginetion from "./Paginetion";
import User from "./User";

let Users = (props) => {
    return (
        <div>
            <Paginetion pageTotalCount={props.pageTotalCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            {props.isFetching ?
                <Preloader /> : //если данные с сервера не пришли, то запускаем анимацию загрузки
                props.users.map(u => { //отображение пользователь по одному
                    return (
                        <User
                            user={u}
                            unfollow={props.unfollow}
                            follow={props.follow}
                            followingIsProgress={props.followingIsProgress}
                            key={u.id}
                        />
                    )
                })
            }
        </div>
    );
}

export default Users;