export interface Post {
    author: string
    comment_status: string
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

export interface Posts {
    posts: Post[]
}

export interface PropsModalBLog {
    title: string
    body: string
}

export interface Media {
    id: number
    author: string
    guid: { rendered: string }
    title: { rendered: string }
}

export interface Medias {
    medias: Media[]
}

export interface ModalProps {
    id: number
    name: string
    office: string
    text: string
    title: string
    icon: any
    img: string
}
