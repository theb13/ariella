import sccm from "../../assets/img_our_partners/sscm.jpg"
import anjur from "../../assets/img_our_partners/anjur.jpg"
import cism from "../../assets/img_our_partners/cism.png"
import kuwaka from "../../assets/img_our_partners/kuwaka.jpeg"

export interface OurPartnerProps {
    id: number
    img: string
}

export const ourPartnerData = [
    {
        id: 1,
        img: sccm,
    },
    {
        id: 2,
        img: anjur,
    },
    {
        id: 3,
        img: cism,
    },
    {
        id: 4,
        img: kuwaka,
    },
] as OurPartnerProps[]
