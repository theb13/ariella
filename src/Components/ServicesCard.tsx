// eslint-disable-next-line no-use-before-define
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import styled from "styled-components"

import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined"
import SearchIcon from "@material-ui/icons/Search"
import CameraEnhanceOutlinedIcon from "@material-ui/icons/CameraEnhanceOutlined"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import CameraIcon from "@material-ui/icons/Camera"
// import TvIcon from "@material-ui/icons/RecentActors"
// import SubjectIcon from '@material-ui/icons/Subject';
import TvIcon from "@material-ui/icons/Tv"
import { Text, Title } from "../styles"

const useStyles = makeStyles({
    root: {
        width: 400,
        margin: 10,
        flexGrow: 1,
        height: 300,
    },
    media: {
        height: 100,
        padding: 10,
    },
})

const StyledCard = styled(Card)`
    position: relative;
    @media (max-width: 570px) {
        width: 280px;
    }
    ::before,
    ::after {
        position: absolute;
        content: "";
        bottom: 0px;
        height: 3px;
        width: 0px;
        transition: all 500ms ease;
        -moz-transition: all 500ms ease;
        -webkit-transition: all 500ms ease;
        -ms-transition: all 500ms ease;
        -o-transition: all 500ms ease;

        background-color: #3039ac;
    }
    ::before {
        left: 0px;
    }
    ::after {
        right: 0px;
    }
    :hover::before,
    :hover::after {
        width: 50%;
    }

    .changeColor {
        color: black;
    }
    :hover .changeColor {
        color: #3d4eaf;
    }
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
    const classes = useStyles()
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
                    <CameraEnhanceOutlinedIcon
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
        <StyledCard className={classes.root}>
            <CardActionArea onClick={() => handleOpen(data)}>
                <CardMedia className={classes.media} title={`${title}`}>
                    {renderIcon(icon)}
                </CardMedia>
                <CardContent>
                    <Title color="#111">{title}</Title>
                    <Text fontFamily fontWeight="300" color="#000">
                        {resumeDescription(text)}
                    </Text>
                </CardContent>
            </CardActionArea>
        </StyledCard>
    )
}

export default ServicesCard
