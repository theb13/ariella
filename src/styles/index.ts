import { Card } from "@material-ui/core"
import styled from "styled-components"

interface Props {
    justifyContent?: string
    alignItems?: string
    textAlign?: string
    height?: string
    width?: string
    color?: string
    fontSize?: string
    fontWeight?: string
    flexWrap?: boolean
    background?: boolean
    fontFamily?: boolean
}

export const Separator = styled.div`
    height: 1px;
    width: 100%;
    background-color: #d3e2e6;
    margin: 10px 0px;
`

export const Title = styled.h2`
    color: ${(props: Props) => props.color || "#4d6f80"};
    font-size: ${(props: Props) => props.fontSize || "22px"};
    text-align: ${(props: Props) => props.textAlign || "left"};
`

export const Text = styled.p`
    font-size: ${(props: Props) => props.fontSize || "1rem"};
    color: ${(props: Props) => props.color || "#5c8599"};
    font-weight: ${(props: Props) => props.fontWeight || "400"};
    font-family: ${({ fontFamily }: Props) =>
        fontFamily ? "Source Sans Pro" : "Nunito"};
`

export const Input = styled.input`
    color: ${(props: Props) => props.color || "#5c8599"};
    height: 50px;
    width: 100%;
    padding: 0 16px;
    background: #f5f8fa;
    border: 1px solid #d3e2e6;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${(props: Props) => props.justifyContent || "flex-start"};
    align-items: ${(props: Props) => props.alignItems || "center"};
    flex-wrap: ${({ flexWrap }: Props) => (flexWrap ? "wrap" : "nowrap")};
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${(props: Props) => props.justifyContent || "center"};
    align-items: ${(props: Props) => props.alignItems || "stretch"};
`

export const Padding = styled.div`
    padding: 40px;
    margin: 20px 0px;
    background: ${({ background }: Props) => (background ? "#F8F8F8" : "#fff")};
`

export const StyledCard = styled(Card)`
    position: relative;
    color: #fff;
    .card-content {
        display: none;
        position: absolute;
        top: 40%;
        left: 10%;
        z-index: 2;
    }
    .post-views {
        position: absolute;
        top: 5%;
        right: 5%;
        z-index: 2;
        background-color: #fff;
        width: 60px;
        /* padding: 2px 10px; */
        border-radius: 10px;
    }
    :hover {
        .card-content {
            display: block;
        }
        .media {
            ::before {
                width: 100%;
                height: 100%;
            }
        }
    }

    .media {
        ::before {
            display: block;
            position: absolute;
            z-index: 1;
            top: 0px;
            left: 0px;
            content: "";
            width: 0%;
            height: 0%;
            background-color: rgb(22, 75, 148, 0.8);
            transition: all 500ms ease;
            -moz-transition: all 500ms ease;
            -webkit-transition: all 500ms ease;
            -ms-transition: all 500ms ease;
            -o-transition: all 500ms ease;
        }
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
`
