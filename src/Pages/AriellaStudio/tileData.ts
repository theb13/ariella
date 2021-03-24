import Abdala from "../../assets/img_our_team/Abdala.jpg"
import Amina from "../../assets/img_our_team/Amina.jpg"
import Stelio from "../../assets/img_our_team/Stelio.jpg"
import Herminia from "../../assets/img_our_team/Herminia.jpg"

export interface TileDataProps {
    cols: number
    img: string
}

export const tileData = [
    {
        img: Abdala,
        cols: 1,
    },
    {
        img: Amina,
        cols: 1,
    },
    {
        img: Stelio,
        cols: 1,
    },
    {
        img: Herminia,
        cols: 3,
    },

    {
        img: Abdala,
        cols: 2,
    },
    {
        img: Amina,
        cols: 1,
    },
    {
        img: Herminia,
        cols: 1,
    },
    {
        img: Stelio,
        cols: 2,
    },
] as TileDataProps[]
