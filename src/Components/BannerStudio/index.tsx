import React from 'react';
import Camera from '../../assets/img/camera1.jpg'
import Logo from '../../assets/img/logoStudio.png'
import { Column, Row, StyledCard, Title } from '../../styles';
import { makeStyles } from '@material-ui/core/styles';

import { Container } from './styles';
import { Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        width: 300,
        minHeight: 300,
        backgroundColor: '#F8F8F8',

    },
    media: {
        height: 260,
        overflow: 'hidden'
    },

});


function createCards() {
    return (
        <StyledCard>
            <CardActionArea>
                <CardMedia
                // className={`${classes.media} media`}
                >
                    {/* <img src={data.img} alt="" width="300" /> */}
                </CardMedia>
                <CardContent className='card-content'>
                    <Typography gutterBottom variant="h5"
                        component="h3"
                    >
                        {/* {data.name} */}
                    </Typography>
                    <Typography variant="body2"
                        component="h4"
                    >
                        {/* {data.office} */}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions onClick={() => handleOpen(data)}>
                <Button size="small" color="primary">
                    Saber mais...
          </Button>
            </CardActions> */}
        </StyledCard>
    )
}


const BannerStudio: React.FC = () => {
    return (
        <Container img={Camera}>
            <Column justifyContent='center' style={{ height: '100%' }}>
                <Row justifyContent='space-between'>
                    <Column>
                        <Title>Um Click, uma história!</Title>
                        <Title>Marque a tua sessão e conte-nos a tua história</Title>
                    </Column>
                    <img src={Logo} alt="" width="300" />
                </Row>
                <Row>
                    {createCards()}
                    {createCards()}
                    {createCards()}
                    {createCards()}
                </Row>
            </Column>
        </Container>
    );
}

export default BannerStudio;