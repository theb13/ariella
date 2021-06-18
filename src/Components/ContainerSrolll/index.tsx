/* eslint-disable react/destructuring-assignment */
import React from "react"
import Menu from "../Menu"

import Footer from "./Footer"
import ScrollTop from "./ScrollTop"

interface Props {
    children: React.ReactElement
}

const ContainerSrolll: React.FC<Props> = ({ children }: Props) => {
    return (
        <>
            <Menu />
            <div style={{ marginTop: "4rem", minHeight: "100vh" }}>
                {children}
            </div>
            <ScrollTop />
            <Footer />
        </>
    )
}

export default ContainerSrolll
