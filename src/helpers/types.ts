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
