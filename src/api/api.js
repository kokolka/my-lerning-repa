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
    },
    followUser(id){
        return instance.post(`follow/${id}`, {}).then(response => response.data)
    },
    deleteUser(id){
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}

export const authAPI = {
    meUser(){
        return instance.get(`auth/me`).then(response => response.data)
    }
}

export const profileAPI = {
    getUserPage(id){
        return instance.get(`profile/${id}`).then(response => response.data)
    }
}