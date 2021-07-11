// import { createContext, useContext, useState } from "react"

import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react"
import { Media, PostGroup } from "../helpers/types"
import { getPosts } from "../Services/api"

type ApiContextData = {
    postList: PostGroup[]
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
    const [postList, setPostList] = useState<PostGroup[]>([])
    const [offset, setOffset] = useState(1)
    const [loading, setLoading] = useState(true)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [mediaList, setmediaList] = useState([])

    async function getPostList() {
        setLoading(true)
        const data = await getPosts(offset)
        setPostList([...postList, ...data])
        setLoading(false)
    }

    useEffect(() => {
        getPostList()
    }, [offset])
    return (
        <ApiContext.Provider
            value={{
                postList,
                mediaList,
                getPostList,
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
