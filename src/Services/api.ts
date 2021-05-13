import axios from "axios"
import { Medias, Posts } from "../helpers/types"

const allowedFieldsPost =
    "author,id,title,views,featured_media,featured_media_src_url,img_url"
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
})
const YOUTUBE_PLAYLIST_ITEMS_API =
    "https://www.googleapis.com/youtube/v3/playlistItems"

export const getPosts = (offset: number) =>
    new Promise((resolve, reject) => {
        api.get(
            `wp-json/wp/v2/posts?_fields=${allowedFieldsPost}&per_page=6&page=${offset}`
        )
            .then((response) => {
                resolve(response.data as Posts)
            })
            .catch((err) => {
                reject(err)
            })
    })
export const getSinglePost = (id: number) =>
    new Promise((resolve, reject) => {
        api.get(`wp-json/wp/v2/posts/${id}`)
            .then((response) => {
                resolve(response.data as Posts)
            })
            .catch((err) => {
                reject(err)
            })
    })

export const getYoutubeVideos = (videoID: any) =>
    new Promise((resolve, reject) => {
        api.get(
            `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&videoId=${videoID}&maxResults=6&playlistId=PL-As4Eo2YksHrCRElwSAACvqVPYpAxTqa&key=${process.env.REACT_APP_API_GOOGLE}`
        )
            .then((response) => {
                resolve(response.data)
            })
            .catch((err) => {
                reject(err)
            })
    })

export const getMedia = (author: number, offset: number) => {
    let url = `wp-json/wp/v2/media?author=${author}&per_page=10&page=${offset}`
    if (author === 0) {
        url = `wp-json/wp/v2/media?author_exclude=2,3&per_page=10&page=${offset}`
    }
    return new Promise((resolve, reject) => {
        api.get(url)
            .then((response) => {
                resolve(response.data as Medias)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
