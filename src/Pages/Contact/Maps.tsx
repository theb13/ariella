import React from "react"

import GoogleMapReact from "google-map-react"
import LocationOnIcon from "@material-ui/icons/LocationOn"
// import { Container } from './styles';
import styled from "styled-components"
import { Text } from "../../styles"

const IconDescription = styled.div`
    div {
        display: block;
        width: 400px;
    }
    :hover {
    }
`

const Maps: React.FC = () => {
    const location = {
        address:
            "Av. Agostinho Neto 1528 R/C, Flat 1 esquerdo, esquina com Av. Olof Palme Maputo, 1100",
        lat: -25.9613961,
        lng: 32.5798679,
    }

    const AnyReactComponent = ({ text }: any) => (
        <IconDescription>
            <LocationOnIcon />
            <div>
                {" "}
                <Text fontSize="1.3rem" color="#111">
                    {text}
                </Text>
            </div>
        </IconDescription>
    )

    return (
        <div style={{ height: "420px", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: `${process.env.REACT_APP_API_GOOGLE}`,
                }}
                defaultCenter={location}
                defaultZoom={19}
            >
                <AnyReactComponent
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    )
}

export default Maps
