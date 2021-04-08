import Abdala from "../../assets/img_our_team/Abdala.jpg"
import Amina from "../../assets/img_our_team/Amina.jpg"
import Stelio from "../../assets/img_our_team/Stelio.jpg"
import Herminia from "../../assets/img_our_team/Herminia.jpg"
import Casamento from "../../assets/img_ariella_studio/casamento.jpg"
import Jen from "../../assets/img_ariella_studio/jen.jpg"
import Mel from "../../assets/img_ariella_studio/mel.jpg"
import Namoro from "../../assets/img_ariella_studio/namoro.jpg"

export interface TileDataProps {
    cols: number
    img: string
}

export const tileData = [
    {
        img: Casamento,
        cols: 1,
    },
    {
        img: Amina,
        cols: 1,
    },
    {
        img: Namoro,
        cols: 1,
    },
    {
        img: Mel,
        cols: 3,
    },

    {
        img: Abdala,
        cols: 2,
    },
    {
        img: Stelio,
        cols: 1,
    },
    {
        img: Herminia,
        cols: 1,
    },
    {
        img: Jen,
        cols: 2,
    },
] as TileDataProps[]
