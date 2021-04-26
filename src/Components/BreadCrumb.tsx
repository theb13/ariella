import React from "react"
import { Breadcrumbs, Typography } from "@material-ui/core"
import Link from "@material-ui/core/Link"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import { Separator } from "../styles"

interface Props {
    text1: string
    text2: string
    link: string
}
const BreadCrumb: React.FC<Props> = ({ text1, text2, link }: Props) => {
    return (
        <>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                <Link color="inherit" href="/">
                    Início
                </Link>
                <Link color="inherit" href={link}>
                    {text1}
                </Link>
                <Typography color="textPrimary">{text2}</Typography>
            </Breadcrumbs>
            <Separator />
        </>
    )
}

export default BreadCrumb
