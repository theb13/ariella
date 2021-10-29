// import { createContext, useContext, useState } from "react"

import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react"
import { Item, Media, PostGroup } from "../helpers/types"
import { getPosts, getYoutubeVideos } from "../Services/api"

type ApiContextData = {
    postList: PostGroup[]
    youtubePlayList: Item[]
    mediaList: Media[]
    loading: boolean
    offset: number
    setOffset: (offset: number) => void
    getPostList: () => Promise<void>
}

interface Props {
    children: ReactNode
}

export const ApiContext = createContext({} as ApiContextData)

export const ApiContextProvider = ({ children }: Props) => {
    const oneTime = 1
    const [postList, setPostList] = useState<PostGroup[]>([])
    const [offset, setOffset] = useState(1)
    const [loading, setLoading] = useState(true)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [mediaList, setmediaList] = useState([])

    const [youtubePlayList, setYoutubePlayList] = useState<Item[]>([])

    async function getPostList() {
        setLoading(true)
        const data = await getPosts(offset, setLoading)
        setPostList([...postList, ...data])
    }
    async function getYoutubePlayList() {
        const data = await getYoutubeVideos("")
        const { items } = data
        setYoutubePlayList(items)
    }

    useEffect(() => {
        getPostList()
    }, [offset])

    useEffect(() => {
        getYoutubePlayList()
    }, [oneTime])

    return (
        <ApiContext.Provider
            value={{
                postList,
                getPostList,
                mediaList,
                youtubePlayList,
                loading,
                offset,
                setOffset,
            }}
        >
            {children}
        </ApiContext.Provider>
    )
}

export const useApiContext = () => {
    return useContext(ApiContext)
}
