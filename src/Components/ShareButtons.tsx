import React, { useEffect, useState } from "react"
import {
    FacebookIcon,
    FacebookShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share"
import LinkIcon from "@material-ui/icons/Link"
import styled from "styled-components"
import { Column, Row, Text } from "../styles"

interface Props {
    url: string
    title: string
    hashtag: string
}

const StyledDiv = styled.div`
    p {
        font-size: 0.6rem;
    }
    .none {
        display: none;
    }
`
const ShareButtons: React.FC<Props> = ({ title, url, hashtag }: Props) => {
    const [copy, setCopy] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setCopy(false)
        }, 1000)
    }, [copy])
    const copyLink = () => {
        navigator.clipboard.writeText(url)
        setCopy(true)
    }

    return (
        <Column alignItems="flex-end">
            <Text fontSize="0.7rem" style={{ margin: 5 }}>
                Partilhar
            </Text>
            <Row justifyContent="space-between" style={{ gap: 5 }}>
                <WhatsappShareButton url={url} title={title}>
                    <WhatsappIcon size={20} />
                </WhatsappShareButton>
                <FacebookShareButton url={url} quote={title} hashtag={hashtag}>
                    <FacebookIcon size={20} />
                </FacebookShareButton>
                <StyledDiv>
                    <button
                        className={copy ? "none" : ""}
                        onClick={() => copyLink()}
                        type="button"
                    >
                        <LinkIcon style={{ fontSize: 30 }} />
                    </button>
                    <p className={copy ? "" : "none"}>copiado!</p>
                </StyledDiv>
            </Row>
        </Column>
    )
}

export default ShareButtons
