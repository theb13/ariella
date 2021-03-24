import axios from "axios"
import { Posts } from "../helpers/types"

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
})
export const getPosts = (offset: number) =>
    new Promise((resolve, reject) => {
        api.get(`wp-json/wp/v2/posts?per_page=6&page=${offset}`)
            .then((response) => {
                resolve(response.data as Posts)
            })
            .catch((err) => {
                reject(err)
            })
    })

export const getSinglePost = () =>
    new Promise((resolve, reject) => {
        api.get("auth")
            .then((response) => {
                resolve(response.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
