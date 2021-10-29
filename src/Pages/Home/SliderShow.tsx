import React from "react"
import Slider from "react-multi-carousel"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useApiContext } from "../../Context/ApiContext"

const StyledDiv = styled.div`
    width: 100%;
    height: 70vh;
    position: relative;
    transition: all 200ms ease;
    :hover {
        filter: brightness(0.9);
    }
    img {
        z-index: 1;
        width: 100%;
        height: 100%;
        object-fit: fill;
    }

    .content {
        z-index: 3;
        position: absolute;
        bottom: 0rem;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        color: white;
        padding: 3rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h3 {
            font-size: 1.7rem;
            margin-bottom: 1rem;
            border: 2px solid #007bff;
            padding: 1rem;
            border-radius: 20px;
            width: 75%;
        }
        .text {
            height: 50%;
            width: 75%;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    @media (max-width: 769px) {
        height: 60vh;
        .content {
            h3 {
                font-size: 1rem;
            }
            .text {
                height: 49%;
            }
            background: rgba(0, 0, 0, 0.8);
            width: 100%;
        }
    }
    @media (max-width: 375px) {
        .text {
            display: none;
        }
        h3 {
            font-size: 1.3rem;
        }
    }
`

const SliderShow: React.FC = () => {
    const { postList } = useApiContext()

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function renderPosts() {
        if (postList.length < 1) return <div />
        return postList.map((post, index) => {
            if (index > 4) return null
            return (
                <Link to={`blog/${post.id}`}>
                    <StyledDiv key={`${post.id}-${Math.random()}`}>
                        <img src={post.featured_media_src_url} alt="" />
                        <div className="content">
                            <h3>{post.title.rendered}</h3>
                            <div
                                className="text"
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{
                                    __html: post.content.rendered,
                                }}
                            />
                        </div>
                    </StyledDiv>
                </Link>
            )
        })
    }
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1200 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 1200, min: 940 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 940, min: 464 },
            items: 1,
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
            dotListClass="custom-dot-list-style"
            showDots
            autoPlaySpeed={3000}
            infinite
            autoPlay
        >
            {renderPosts()}
        </Slider>
    )
}
// <Swiper
//     slidesPerView={1}
//     navigation
//     pagination={{ clickable: true }}
//     className="w-full md:pb-12"
// >
//     <SwiperSlide>hoks</SwiperSlide>
// </Swiper>
export default SliderShow
