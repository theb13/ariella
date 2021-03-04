import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from './styles';

const useStyles = makeStyles({
  root: {
    width: 345,
    margin:10,
  },
  media: {
    height: 140,
  },
});


interface Props {
  title: string;
  img: string;
  text: string;

}


const PostCard: React.FC<Props> = ({title, img, text}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title={title+''}
        />
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
      <CardActions>
        <Button size="small" color="primary">
          Continuar a ler...
        </Button>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default PostCard;
