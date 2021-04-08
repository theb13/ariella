import axios from "axios"
import { Posts } from "../helpers/types"

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
})
const YOUTUBE_PLAYLIST_ITEMS_API =
    "https://www.googleapis.com/youtube/v3/playlistItems"

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

export const getYoutubeVideos = () =>
    new Promise((resolve, reject) => {
        api.get(
            `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=6&playlistId=PL-As4Eo2YksHrCRElwSAACvqVPYpAxTqa&key=${process.env.REACT_APP_API_GOOGLE}`
        )
            .then((response) => {
                resolve(response.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
// const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}`)
// const data = await res.json()
// return {
//     props: {
//         data,
//     },
// }
