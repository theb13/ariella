import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ImageGridList from "../../Components/ImageGridList"
import Loader from "../../Components/Loader"
import { getMedia } from "../../Services/api"

// import { Container } from './styles';

const SingleViewMedia: React.FC = () => {
    const { id } = useParams() as any
    const [media, setMedia] = useState()
    const [loading, setLoading] = useState(true)

    const x = 0
    function author() {
        if (id === "publicidade") return 3
        if (id === "photoshoot") return 4
        return 5
    }
    useEffect(() => {
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
            <Loader loading={loading} />
            {media ? <ImageGridList medias={media} /> : null}
        </>
    )
}

export default SingleViewMedia
