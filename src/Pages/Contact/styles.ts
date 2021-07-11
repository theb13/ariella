import styled from "styled-components"
import { Container as ContainerM } from "@material-ui/core"

export const Container = styled(ContainerM)`
    display: flex;
    flex-direction: column;
    align-items: center;

    p:first-of-type {
        width: 80%;
        margin-bottom: 30px;
    }

    .width {
        /* width: 400px; */
        max-width: 20rem;
        margin: 0 20px;
    }
`
