import React from "react"
import styled from "styled-components"
import { Column, Title, Row, Text } from "../../styles"

const ColumnRf = styled(Column)`
    flex: 1;
    min-width: 300px;
    margin: 10px;
`

const OurMission: React.FC = () => {
    return (
        <Row justifyContent="space-around" flexWrap>
            <ColumnRf alignItems="center">
                <svg
                    style={{ color: "#DC3545", width: "8rem" }}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="bullseye-arrow"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    data-fa-i2svg=""
                >
                    <path
                        fill="currentColor"
                        d="M305.05 98.74l23.96 53.62-92.33 92.33c-6.25 6.25-6.25 16.38 0 22.62 3.12 3.12 7.22 4.69 11.31 4.69s8.19-1.56 11.31-4.69l92.33-92.33 53.62 23.96a20.547 20.547 0 0 0 21.04-4.96l63.67-63.67c10.8-10.8 6.46-29.2-8.04-34.04l-55.66-18.55-18.55-55.65C404.73 13.08 396.54 8 388.16 8c-5.14 0-10.36 1.92-14.47 6.03L310.02 77.7a20.582 20.582 0 0 0-4.97 21.04zm78.18-48.99l12.7 38.09 5.06 15.18 15.18 5.06 38.09 12.7-44.93 44.93-49.09-21.93-21.93-49.09 44.92-44.94zm101.2 131.35l-26.18 26.18c3.63 15.69 5.75 31.95 5.75 48.72 0 119.1-96.9 216-216 216S32 375.1 32 256 128.9 40 248 40c16.78 0 33.04 2.11 48.72 5.75l26.18-26.18A247.848 247.848 0 0 0 248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248c0-26.11-4.09-51.26-11.57-74.9zM274.7 108.85a53.056 53.056 0 0 1-2.68-14.44C264.12 93.25 256.23 92 248 92c-90.65 0-164 73.36-164 164 0 90.65 73.36 164 164 164 90.65 0 164-73.36 164-164 0-8.35-1.25-16.35-2.45-24.36-4.89-.21-9.76-.79-14.41-2.34-2.12-.71 1.02.62-20.69-9.07C377.7 231.68 380 243.52 380 256c0 72.79-59.21 132-132 132s-132-59.21-132-132 59.21-132 132-132c12.48 0 24.32 2.3 35.77 5.55-9.69-21.7-8.36-18.56-9.07-20.7zM248 176c-44.11 0-80 35.89-80 80s35.89 80 80 80 80-35.89 80-80c0-3.77-.61-7.38-1.11-11.01l-44.95 44.95-.01-.01c-8.7 8.69-20.7 14.07-33.93 14.07-26.47 0-48-21.53-48-48 0-13.23 5.38-25.23 14.07-33.93l-.01-.01 44.95-44.95c-3.63-.5-7.24-1.11-11.01-1.11z"
                    />
                </svg>
                <Title>Missão</Title>
                <div className=" about-content">
                    <Text>
                        Prestar serviços e consultorias ligadas ao
                        desenvolvimento organizacional
                    </Text>
                </div>
            </ColumnRf>

            <ColumnRf alignItems="center">
                <svg
                    style={{ color: "#FFC107", width: "8rem" }}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="eye"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                >
                    <path
                        fill="currentColor"
                        d="M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z"
                    />
                </svg>
                <Title>Visão</Title>
                <div className="about-content">
                    <Text>
                        Levar empresas e organizações à altos níveis de
                        qualidade organizacional no serviço, que se propôs a
                        oferecer ao público.
                    </Text>
                </div>
            </ColumnRf>

            <ColumnRf alignItems="center">
                <svg
                    style={{ color: "#DC3545", width: "8rem" }}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="file-certificate"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                >
                    <path
                        fill="currentColor"
                        d="M497.9 97.98L414.02 14.1c-9-9-21.19-14.1-33.89-14.1H176c-26.5.1-47.99 21.6-47.99 48.09V165.7c-5.97 0-11.94-1.68-24.13-5.03-1.7-.46-3.36-.66-4.96-.66-5.56 0-10.43 2.5-13.66 5.79-17.95 18.26-17.07 17.77-41.7 24.5-6.7 1.81-11.97 7.21-13.78 14.07-6.47 24.67-6.09 24.16-24.02 42.32-4.95 5.04-6.9 12.48-5.08 19.43 6.56 24.38 6.52 24.39 0 48.76-1.82 6.95.12 14.4 5.08 19.45 18 18.15 17.58 17.79 24.02 42.29 1.8 6.88 7.08 12.27 13.78 14.1 1.8.48 2.92.8 4.46 1.21V496c0 5.55 2.87 10.69 7.59 13.61 4.66 2.91 10.59 3.16 15.56.7l56.84-28.42 56.84 28.42c2.25 1.12 4.72 1.69 7.16 1.69h272c26.49 0 47.99-21.5 47.99-47.99V131.97c0-12.69-5.1-24.99-14.1-33.99zM384.03 32.59c2.8.7 5.3 2.1 7.4 4.2l83.88 83.88c2.1 2.1 3.5 4.6 4.2 7.4h-95.48V32.59zM33.28 316.68c5.7-22.3 5.7-30.23.01-52.39 15.65-16.2 19.56-22.98 25.63-45.06 21.57-6.13 28.06-9.92 43.88-25.69 9.8 2.62 16.82 4.15 25.21 4.15 8.28 0 15.25-1.49 25.19-4.16 15.56 15.51 22.49 19.58 43.86 25.68 5.98 21.95 9.71 28.63 25.65 45.07-5.77 22.45-5.76 30 0 52.4-15.62 16.17-19.55 22.96-25.61 44.96-14.63 3.92-24 7.36-37.25 19.36-9.94-4.53-20.78-6.89-31.85-6.89s-21.9 2.36-31.85 6.9c-13.18-11.88-22.56-15.34-37.23-19.33-5.97-21.89-9.72-28.57-25.64-45zm101.89 133.01c-4.5-2.25-9.81-2.25-14.31 0l-40.84 20.42V409.9c.12.12.19.17.31.29 3.75 3.82 8.68 5.79 13.64 5.79 3.5 0 7.02-.98 10.16-2.97 7.25-4.59 15.56-6.88 23.87-6.88s16.62 2.29 23.87 6.86c3.16 2.02 6.68 3.01 10.17 3.01 4.96 0 9.87-1.99 13.63-5.79.13-.13.21-.18.34-.32v60.22l-40.84-20.42zm344.84 14.32c0 8.8-7.2 16-16 16h-256V391.9c1.54-.4 2.65-.71 4.44-1.19 6.7-1.82 11.97-7.22 13.77-14.08 6.47-24.68 6.09-24.16 24.03-42.32 4.95-5.04 6.9-12.49 5.07-19.44-6.53-24.33-6.55-24.34 0-48.76 1.83-6.95-.12-14.4-5.07-19.45-18-18.15-17.58-17.79-24.03-42.29-1.8-6.87-7.07-12.27-13.75-14.09-24.23-6.57-23.89-6.23-41.72-24.52-2.94-2.97-6.78-4.52-10.74-5.16V48.09c0-8.8 7.2-16.09 16-16.09h176.03v104.07c0 13.3 10.7 23.93 24 23.93h103.98v304.01z"
                    />
                </svg>
                <Title>Valores</Title>
                <Text>
                    Qualidade, boa reputação, excelência, verdade, honestidade,
                    simplicidade, vida, justiça, transparência, e
                    profissionalismo.
                </Text>
            </ColumnRf>
        </Row>
    )
}

export default OurMission
