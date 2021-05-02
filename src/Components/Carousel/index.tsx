import React from "react"

import Slider from "react-multi-carousel"

interface Props {
    children: any
}
const Carousel: React.FC<Props> = ({ children }: Props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1200 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1200, min: 940 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 940, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }
    return (
        <Slider
            responsive={responsive}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            showDots
            autoPlaySpeed={3000}
            infinite
            autoPlay
            itemClass="carousel-item"
        >
            {children}
        </Slider>
    )
}
export default Carousel
