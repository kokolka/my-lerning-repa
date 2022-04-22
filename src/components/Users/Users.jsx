import React from 'react';
import s from './Users.module.css';

let Users = (props) => {

    debugger;
    if (props.users.length === 0) {
        props.setUsers(
            [
                { id: 1, firstName: 'Kirill', lastName: 'Balachoncev', location: { country: 'Russia', city: 'Tomsk' }, userStatus: 'Live is good', statusFriend: true, foto: 'https://aroundpet.ru/wp-content/uploads/kot-shartrez.jpg' },
                { id: 2, firstName: 'Kata', lastName: 'Mda', location: { country: 'Russia', city: 'Moskov' }, userStatus: 'Live is shop', statusFriend: false, foto: 'https://catnames.ru/sites/default/files/inline/images/medn_7.jpg' },
                { id: 3, firstName: 'Dima', lastName: 'Luzgin', location: { country: 'Russia', city: 'Tomsk' }, userStatus: 'Live is work', statusFriend: true, foto: 'https://lookw.ru/9/957/1566942074-72.jpg' }
            ]
        );
    }
    
    return (
        props.users.map(u => {
            return (
                <div className={s.userBox} key={u.id}>
                    <div className={s.userBox_foto}>
                        <div>
                            <img src={u.foto} className={s.foto} />
                        </div>
                        <div>
                            {u.statusFriend
                                ? <button className={s.followButton} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button className={s.followButton} onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.userBox_userData}>
                        <div className={s.userData_profile}>
                            <div className={s.userName}>
                                {`${u.lastName} ${u.firstName[0]}`}
                            </div>
                            <div className={s.userStatus}>
                                {`Status: ${u.userStatus}`}
                            </div>
                        </div>
                        <div className={s.userLocation}>
                            <div className={s.userLocation_city}>
                                {u.location.city}
                            </div>
                            <div className={s.userLocation_country}>
                                {u.location.country}
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
};

export default Users;