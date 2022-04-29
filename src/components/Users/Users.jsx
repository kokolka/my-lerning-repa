import React from 'react';
import axios from 'axios';
import s from './Users.module.css';
import noPhoto from '../../assets/imeges/noPhoto.png';

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            }
            );

    }

    onPageChanged = (page) =>{
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                return this.props.setUsers(response.data.items);
            }
            ); 
    }

    render() {

        let pagesCount = Math.ceil(this.props.pageTotalCount / this.props.pageSize);

        let arrPages = [];
        for (let i = 1; i <= pagesCount; i++) {
            arrPages.push(i);
        }
        debugger;
        return (
            <div>
                <div>
                    {arrPages.map(el => {
                        return (
                            <span className={el === this.props.currentPage ? s.activePage : s.pasivPage}
                                onClick={() => { this.onPageChanged(el) }}
                            >{el}</span>
                        );
                    })}
                </div>

                {/* <button onClick={this.getUsers} className={s.buttonGetUsers}>Get users</button> */}
                {
                    this.props.users.map(u => {
                        return (
                            <div className={s.userBox} key={u.id}>
                                <div className={s.userBox_foto}>
                                    <div>
                                        <img src={u.photos.small != null ? u.photos.small : noPhoto} className={s.foto} />
                                    </div>
                                    <div>
                                        {u.followed
                                            ? <button className={s.followButton} onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                            : <button className={s.followButton} onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
        )
    }
}

export default Users;