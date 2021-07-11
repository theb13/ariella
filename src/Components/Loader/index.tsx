import React from "react"
import styled from "styled-components"

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #111;
    opacity: 0.6;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    &.active {
        display: none;
    }
    .loader {
        border: 9px solid #f3f3f3; /* Light grey */
        border-top: 9px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

interface Props {
    loading: boolean
}
const Loader: React.FC<Props> = ({ loading }: Props) => {
    return (
        <Container className={loading ? "" : "active"}>
            <div className="loader" />
        </Container>
    )
}

export default Loader
