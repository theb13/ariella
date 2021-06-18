// import { createContext, useContext, useState } from "react"

import React, { createContext, ReactElement, useContext, useState } from "react"
import { Media, Post, PostGroup } from "../helpers/types"

type ApiContextData = {
    postList: PostGroup[]
    mediaList: Media[]
    getPostList: (list: Post[]) => void
}

interface Props {
    children: ReactElement
}

export const ApiContext = createContext({} as ApiContextData)

export const ApiContextProvider = ({ children }: Props) => {
    const [postList, setPostList] = useState<PostGroup[]>([])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [mediaList, setmediaList] = useState([])

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function getPostList(list: PostGroup[]) {
        const data = postList.concat(list)
        setPostList(data)
    }
    return (
        <ApiContext.Provider value={{ postList, mediaList, getPostList }}>
            {children}
        </ApiContext.Provider>
    )
}

export const useApiContext = () => {
    return useContext(ApiContext)
}
