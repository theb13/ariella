import React from "react"
import {
    FacebookIcon,
    FacebookShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share"
import LinkIcon from "@material-ui/icons/Link"
import { Column, Row, Text } from "../styles"

interface Props {
    url: string
    title: string
    hashtag: string
}
const ShareButtons: React.FC<Props> = ({ title, url, hashtag }: Props) => {
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
                <button
                    onClick={() => navigator.clipboard.writeText(url)}
                    type="button"
                >
                    <LinkIcon style={{ fontSize: 30 }} />
                </button>
            </Row>
        </Column>
    )
}

export default ShareButtons
