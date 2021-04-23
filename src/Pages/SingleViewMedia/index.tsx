import { Container } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
    OurServicesProps,
    ourServicesStudioData,
} from "../../common/OurServices/data"
import ImageGridList from "../../Components/ImageGridList"
import Loader from "../../Components/Loader"
import { getMedia } from "../../Services/api"
import Overview from "./Overview"

// import { Container } from './styles';

const SingleViewMedia: React.FC = () => {
    const { id } = useParams() as any
    const [data, setData] = useState<any>()
    const [media, setMedia] = useState()
    const [loading, setLoading] = useState(true)
    const x = 0
    function author() {
        if (id === "Publicidade") return 3
        if (id === "Photoshoot") return 4
        return 5
    }

    useEffect(() => {
        ourServicesStudioData.forEach((service: OurServicesProps) => {
            if (service.id === id) {
                setData(service)
                return null
            }
            return null
        })
        getMedia(author(), 1)
            .then((values: any) => {
                setMedia(values)
            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .catch((err) => {
                // console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [x])
    return (
        <>
            <Container>{data ? <Overview data={data} /> : <div />}</Container>

            <Loader loading={loading} />
            {media ? <ImageGridList medias={media} /> : null}
        </>
    )
}

export default SingleViewMedia
