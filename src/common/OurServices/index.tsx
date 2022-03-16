import React from "react"
import ServicesCard from "../../Components/ServicesCard"
import { Column, Title, Text, Row } from "../../styles"

import {
    ourServicesData as info,
    ourServicesStudioData,
    OurServicesProps,
} from "./data"
import ModalView from "../../Components/ModalView"

interface Props {
    // eslint-disable-next-line react/require-default-props
    studio?: boolean
}

const OurServices: React.FC<Props> = ({ studio }: Props) => {
    const [open, setOpen] = React.useState(false)
    const [service, setService] = React.useState<any>()

    const handleOpen = (item: any) => {
        setService(item)
        setOpen(true)
    }

    function renderServices() {
        return info.map((data: OurServicesProps, index) => {
            return (
                <ServicesCard
                    key={`${index + data.title}`}
                    {...data}
                    handleOpen={handleOpen}
                />
            )
        })
    }
    function renderServicesStudio() {
        return ourServicesStudioData.map((data: OurServicesProps, index) => {
            return (
                <ServicesCard
                    key={`${index + data.title}`}
                    {...data}
                    handleOpen={handleOpen}
                />
            )
        })
    }
    return (
        <Column alignItems="center">
            <Title fontSize="2.2rem">Nossos Serviços</Title>
            <Text>
                Como parte da sua missão, a Ariella Group S.A. oferece os
                seguintes serviços:
            </Text>
            <Row
                flexWrap
                justifyContent="center"
                style={{ gap: 20, marginTop: 20 }}
            >
                {studio ? renderServicesStudio() : renderServices()}
            </Row>
            {service ? (
                <ModalView open={open} setOpen={setOpen} dataModal={service} />
            ) : null}
        </Column>
    )
}

export default OurServices
