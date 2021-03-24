import React from "react"
import Carousel from "react-material-ui-carousel"
import { Paper } from "@material-ui/core"
import Img from "../../assets/img/banner2.png"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Item(props: any) {
    return (
        <Paper>
            {/* <img src={props.item.img} className="slide-img" /> */}
            {/* <div className="float">
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                <Button className="CheckButton">
                    Check it out!
            </Button>
            </div> */}
        </Paper>
    )
}

const SliderShow: React.FC = () => {
    const items = [
        {
            img: Img,
            name: "ARIELLA BOATS & SERVICES S.A.",
            description:
                "É uma das poucas firmas moçambicanas que conta com uma excelente equipa de profissionais focalizada em áreas de desenvolvimento organizacional e assistência técnica especializada.",
        },
        {
            img:
                "https://demo.themeansar.com/consultup/transparent/wp-content/uploads/2019/03/slide9.jpg",
            name: "ARIELLA BOATS & SERVICES S.A.",
            description:
                "É uma das poucas firmas moçambicanas que conta com uma excelente equipa de profissionais focalizada em áreas de desenvolvimento organizacional e assistência técnica especializada.",
        },
        {
            img:
                "https://demo.themeansar.com/consultup/transparent/wp-content/uploads/2019/03/slide11.jpg",
            name: "Random Name #2",
            description: "Hello World!",
        },
    ]
    return (
        <Carousel className="slide" animation="slide">
            {items.map((item, i) => (
                <Item key={`${i + Math.random() * 1000}`} item={item} />
            ))}
        </Carousel>
    )
}

export default SliderShow
