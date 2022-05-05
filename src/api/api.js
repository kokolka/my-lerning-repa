import axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7b2bf063-5f39-45d3-b53c-542238da0668"
    }
});


export const usersAPI = {
    getUsers(page = 1, pageSize = 10){
        return instance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data)
    }
}




