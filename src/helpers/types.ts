export interface Post {
    author: string;
    // categories: [1]
    comment_status: string;
    content: { rendered:string , protected: boolean }
    date: string;
    date_gmt:string;
    // excerpt: { rendered: "<p>adsfadfad</p>↵", protected: false }
    // featured_media: 0
    // format: "standard"
    // guid: { rendered: "https://theb.co.mz/wp/?p=9" }
    id: number
    // link: "https://theb.co.mz/wp/seco/"
    // meta: []
    // modified: "2020-11-29T22:40:49"
    // modified_gmt: "2020-11-29T22:40:49"
    // ping_status: "open"
    slug: string
    status: string
    // sticky: false
    // tags: []
    template: ""
    title: { rendered: string }
    type: string
}

export interface Posts{
    posts:Post[]
} 