import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import CameraEnhanceOutlinedIcon from '@material-ui/icons/CameraEnhanceOutlined';

const useStyles = makeStyles({
  root: {
    width: 400,
    margin: 10,
    flexGrow:1,
    flexShrink:1,
    minHeight:300,
  },
  media: {
    height: 100,
    padding: 10,
  },
});


const StyledCard = styled(Card)`
  position : relative;

  
  ::before,::after {
    position: absolute;
    content: '';
    bottom: 0px;
    height: 3px;
    width: 0px;
    transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -webkit-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
  
    background-color: #3039ac;
  }
  ::before {
    left: 0px;
    }
  ::after {
    right: 0px;
    }
  :hover::before,:hover::after {
    width: 50%;
  } 

  .changeColor{
    color: black;
  } 
  :hover .changeColor{
    color:#3D4EAF;
  }
`;

interface Props {
  title: string;
  icon: number;
  text: string;

}


const ServicesCard: React.FC<Props> = ({ title, icon, text }) => {
  const classes = useStyles();

  function renderIcon(val: number) {

    switch (val) {
      case 1: return (<ChatOutlinedIcon className='changeColor' style={{ fontSize: 80 }} />);
      case 2: return (<ChatOutlinedIcon className='changeColor' style={{ fontSize: 80 }} />);
      case 3: return (<CameraEnhanceOutlinedIcon className='changeColor' style={{ fontSize: 80 }} />);
      case 4: return (<ChatOutlinedIcon className='changeColor' style={{ fontSize: 80 }} />);
    }
  }

  return (
    <StyledCard className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title={title + ''}
        >
          {renderIcon(icon)}
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5"
            component="h2"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <Typography variant="body2" color="textSecondary"
            component="p"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        
      </CardActions> */}
    </StyledCard>
  );
};

export default ServicesCard;
