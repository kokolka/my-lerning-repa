import React from 'react';
import s from './Users.module.css';

let Users = (props) => {

    // if (props.users.length === 0) {
    //     props.setUsers(
    //         [
    //             { id: 1, firstName: 'Kirill', lastName: 'Balachoncev', location: { country: 'Russia', city: 'Tomsk' }, userStatus: 'Live is good', statusFriend: true, foto: 'https://aroundpet.ru/wp-content/uploads/kot-shartrez.jpg' },
    //             { id: 2, firstName: 'Kata', lastName: 'Mda', location: { country: 'Russia', city: 'Moskov' }, userStatus: 'Live is shop', statusFriend: false, foto: 'https://catnames.ru/sites/default/files/inline/images/medn_7.jpg' },
    //             { id: 3, firstName: 'Dima', lastName: 'Luzgin', location: { country: 'Russia', city: 'Tomsk' }, userStatus: 'Live is work', statusFriend: true, foto: 'https://lookw.ru/9/957/1566942074-72.jpg' }
    //         ]
    //     );
    // }

    return (
        props.users.map(u => {
            return (
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.foto} className={s.foto} />
                        </div>
                        <div>
                            {u.statusFriend
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {`${u.firstName} ${u.lastName}`}
                            </div>
                            <div>
                                {u.userStatus}
                            </div>
                        </span>
                        <span>
                            <div>
                                {u.location.city}
                            </div>
                            <div>
                                {u.location.country}
                            </div>
                        </span>
                    </span>
                </div>
            )
        })
    )
};

export default Users;