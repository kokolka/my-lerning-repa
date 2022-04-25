const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        //  { id: 1, firstName: 'Kirill', lastName: 'Balachoncev', location: { country: 'Russia', city: 'Tomsk' }, userStatus: 'Live is good', statusFriend: true, foto: 'https://aroundpet.ru/wp-content/uploads/kot-shartrez.jpg' },
        //  { id: 2, firstName: 'Kata', lastName: 'Mda', location: { country: 'Russia', city: 'Moskov' }, userStatus: 'Live is shop', statusFriend: false, foto: 'https://catnames.ru/sites/default/files/inline/images/medn_7.jpg' },
        //  { id: 3, firstName: 'Dima', lastName: 'Luzgin', location: { country: 'Russia', city: 'Tomsk' }, userStatus: 'Live is work', statusFriend: true, foto: 'https://lookw.ru/9/957/1566942074-72.jpg' }
    ]
};

const usersReducer = (state = initialState, action) => {

    switch(action.type){
        case FOLLOW:
            debugger;
            return{
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }; //заменяем в statusFriend на true
                    }
                    return u;
                }
                )
            };
        case UNFOLLOW:
            debugger;
            return{
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false };
                    }
                    return u;
                }
                )
            };
        case SET_USERS:
            debugger; 
            return {...state,
                users: [...state.users, ...action.users]} //склеиваем два массива, тот который был и тот который прищёл
        default:
            return state;
    }   
};

export const followAC = (userID) => {
    return { type: FOLLOW, userID };
};
export const unfollowAC = (userID) => {
    return { type: UNFOLLOW, userID };
};
export const setUsersAC = (users) => {
    return { type: SET_USERS, users };
};

export default usersReducer;