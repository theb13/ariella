import axios from "axios"
import { Medias, PostGroup, Posts, YoutubeType } from "../helpers/types"

const allowedFieldsPost =
    "author,id,title,views,content,featured_media,featured_media_src_url,img_url"
export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
})
const WP_JSON_API_LINK = "wp-json/wp/v2/"
export const getPosts = (
    offset: number,
    setLoading: (value: boolean) => void
) =>
    new Promise<PostGroup[]>((resolve, reject) => {
        api.get(
            `wp-json/wp/v2/posts?_fields=${allowedFieldsPost}&per_page=6&page=${offset}`
        )
            .then((response) => {
                resolve(response.data as PostGroup[])
            })
            .catch((err) => {
                reject(err)
            })
            .finally(() => {
                setLoading(false)
            })
    })
export const getSinglePost = (id: number) =>
    new Promise((resolve, reject) => {
        api.get(`${WP_JSON_API_LINK}posts/${id}`)
            .then((response) => {
                resolve(response.data as Posts)
            })
            .catch((err) => {
                reject(err)
            })
    })

export const getYoutubeVideos = (videoID: string) => {
    let url = `search`
    if (videoID !== "") {
        url = "playlistItems"
    }
    const YOUTUBE_API_LINK = `https://www.googleapis.com/youtube/v3/${url}?key=${process.env.REACT_APP_API_GOOGLE}&part=snippet`
    return new Promise<YoutubeType>((resolve, reject) => {
        api.get(
            `${YOUTUBE_API_LINK}&order=date&videoId=${videoID}&maxResults=9&playlistId=PL-As4Eo2YksHrCRElwSAACvqVPYpAxTqa&channelId=UCnZHU_FI3CQx3B1bg2ttscg`
        )
            .then((response) => {
                resolve(response.data as YoutubeType)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
export const getMedia = (author: number, offset: number) => {
    let url = `${WP_JSON_API_LINK}media?author=${author}&per_page=24&page=${offset}`
    if (author === 0) {
        url = `${WP_JSON_API_LINK}media?author_exclude=2&per_page=24&page=${offset}`
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
