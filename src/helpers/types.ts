export type Post = {
    author: string
    content: { rendered: any; protected: boolean }
    date: string
    date_gmt: string
    excerpt: { rendered: string; protected: boolean }
    id: number
    views: number
    featured_media_src_url: string
    template: ""
    title: { rendered: string }
    type: string
}

export type PostGroup = {
    author: string
    id: number
    content: { rendered: any; protected: boolean }
    views: number
    featured_media_src_url: string
    title: { rendered: string }
}

export type Posts = {
    posts: Post[]
}

export type PropsModalBLog = {
    title: string
    body: string
}

export type Media = {
    id: number
    author: string
    guid: { rendered: string }
    title: { rendered: string }
}

export type Medias = {
    medias: Media[]
}

export type ModalProps = {
    id: number
    name: string
    office: string
    text: string
    title: string
    icon: any
    img: string
}

export interface YoutubeType {
    items: Item[]
}

export interface Item {
    kind: string
    etag: string
    id: ID
    snippet: Snippet
}

interface ID {
    kind: string
    videoId: string
}

interface Snippet {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: Thumbnails
    channelTitle: string
    liveBroadcastContent: string
    publishTime: string
}

interface Thumbnails {
    default: Default
    medium: Default
    high: Default
}

interface Default {
    url: string
    width: number
    height: number
}
