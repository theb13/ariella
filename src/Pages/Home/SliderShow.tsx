import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import { Title } from '../../styles';



function Item(props: any) {
    return (
        <Paper>
            <img src={props.item.img} className="slide-img"></img>
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
    let items = [
        {
            img: 'https://demo.themeansar.com/consultup/transparent/wp-content/uploads/2019/03/slide9.jpg',
            name: "ARIELLA BOATS & SERVICES S.A.",
            description: "É uma das poucas firmas moçambicanas que conta com uma excelente equipa de profissionais focalizada em áreas de desenvolvimento organizacional e assistência técnica especializada."
        },
        {
            img: 'https://demo.themeansar.com/consultup/transparent/wp-content/uploads/2019/03/slide11.jpg',
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    return (
        <Carousel
            className="slide"
            animation='slide'
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    );
}

export default SliderShow;