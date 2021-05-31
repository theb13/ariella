import React from "react"
import styled from "styled-components"

import { Link } from "react-router-dom"
import VisibilityIcon from "@material-ui/icons/Visibility"

import { Row, Text, Title } from "../../styles"

const StyledCard = styled.div`
    position: relative;
    width: 345px;
    margin: 20;
    flex-grow: 1;
    height: 330px;
    background: #f8f8f8;
    border-radius: 0.4rem;
    /* clip-path: polygon(
        0 45px,
        45px 0,
        100% 0,
        100% calc(100% - 45px),
        calc(100% - 45px) 100%,
        0 100%,
        0 45px
    ); */
    box-shadow: 0px 2px 2px -2px rgb(0, 0, 0, 20%),
        0px 2px 2px 0px rgb(0, 0, 0, 14%), 0px 2px 4px 0px rgb(0, 0, 0, 12%);
    .media {
        height: 260px;
        overflow: "hidden";
    }
    img {
        border-radius: 0.4rem;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .post-views {
        position: absolute;
        top: 5%;
        right: 5%;
        z-index: 2;
        background-color: #fff;
        width: 60px;
        border-radius: 10px;
    }
`

const StyledText = styled(Title)`
    overflow: hidden;
    padding: 10px;
    text-overflow: ellipsis;
    color: #111;
    font-size: 1rem;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
`
interface Props {
    title: string
    img: string
    // eslint-disable-next-line react/require-default-props
    views?: number
    to: string
}

const PostCard: React.FC<Props> = ({ title, img, views, to }: Props) => {
    return (
        <Link to={to}>
            <StyledCard>
                {views ? (
                    <Row justifyContent="center" className="post-views">
                        <Text>{views}</Text>
                        <VisibilityIcon
                            style={{ color: "#5c8599", marginLeft: 5 }}
                        />
                    </Row>
                ) : null}

                <div>
                    <div className="media">
                        <img src={img} alt="" />
                    </div>
                    <StyledText>{title}</StyledText>
                </div>
            </StyledCard>
        </Link>
    )
}

export default PostCard
