/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react"
import CreateIcon from "@material-ui/icons/CreateOutlined"
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined"
import SearchIcon from "@material-ui/icons/Search"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import CameraIcon from "@material-ui/icons/Camera"
import TvIcon from "@material-ui/icons/Tv"
import styled from "styled-components"
import { Text, Title, PolygonCard } from "../styles"

const SpanShadown = styled.span`
    filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.24));
`
interface Props {
    title: string
    icon: number
    text: string
    handleOpen: any
}

const ServicesCard: React.FC<Props> = ({
    title,
    icon,
    text,
    handleOpen,
}: Props) => {
    const resumeDescription = (textSlice: string) => {
        return `${textSlice.slice(0, 205)}...`
    }
    function renderIcon(val: number) {
        switch (val) {
            case 1:
                return (
                    <ChatOutlinedIcon
                        className="changeColor"
                        style={{ fontSize: 80 }}
                    />
                )
            case 2:
                return (
                    <SearchIcon
                        className="changeColor"
                        style={{ fontSize: 80 }}
                    />
                )
            case 3:
                return (
                    <CreateIcon
                        className="changeColor"
                        style={{ fontSize: 80 }}
                    />
                )
            case 4:
                return (
                    <SupervisorAccountIcon
                        className="changeColor"
                        style={{ fontSize: 80 }}
                    />
                )
            case 5:
                return (
                    <CameraIcon
                        className="changeColor"
                        style={{ fontSize: 80 }}
                    />
                )
            default:
                return (
                    <TvIcon className="changeColor" style={{ fontSize: 80 }} />
                )
        }
    }
    const icone = renderIcon(icon)
    const data = { title, icon: icone, text }
    return (
        <SpanShadown>
            <PolygonCard>
                <div onClick={() => handleOpen(data)}>
                    <div>{renderIcon(icon)}</div>
                    <div>
                        <Title color="#111">{title}</Title>
                        <Text
                            style={{ fontFamily: "Source Sans Pro" }}
                            fontWeight="300"
                            color="#000"
                        >
                            {resumeDescription(text)}
                        </Text>
                    </div>
                </div>
            </PolygonCard>
        </SpanShadown>
    )
}

export default ServicesCard
