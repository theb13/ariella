import React, { useEffect, useState } from "react"
import OurServices from "../../common/OurServices"
import BannerStudio from "../../Components/BannerStudio"
import { getMedia } from "../../Services/api"
import { Padding } from "../../styles"
// import ImageGridList from "../../Components/ImageGridList"
import Galery from "../../Components/Galery"

// import { Container } from './styles';

const AriellaStudio: React.FC = () => {
    const [media, setMedia] = useState()
    const x = 0
    useEffect(() => {
        getMedia(0, 1)
            .then((values: any) => {
                setMedia(values)
            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .catch((err) => {
                // console.log(err)
            })
            .finally(() => {})
    }, [x])

    return (
        <>
            <BannerStudio />
            <Padding>
                <OurServices studio />
            </Padding>
            <Galery medias={media} view />
        </>
    )
}

export default AriellaStudio
