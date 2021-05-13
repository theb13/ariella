import styled from "styled-components"
import { Container as ContainerM } from "@material-ui/core"

export const Container = styled(ContainerM)`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 30px;
    h2 {
        /* margin-top: 20px; */
    }
    p:first-of-type {
        width: 80%;
        margin-bottom: 30px;
    }

    .width {
        max-width: 600px;
        margin: 0 20px;
    }
`
