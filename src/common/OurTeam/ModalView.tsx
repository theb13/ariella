import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';
import Img from '../../assets/img_our_team/Amina.jpg';
import { OurTeamProps } from './data'
import { Column, Row, Text, Title } from '../../styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: '#F8F8F8',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      maxWidth:'80%',
      
    },
    size: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  }),
);

interface Props {
  open:boolean
  setOpen: any
  person:OurTeamProps
}


 const ModalView: React.FC<Props> = ({open , setOpen,person}) =>    {
  const classes = useStyles();
  

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    className={classes.modal}
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      <Row className={classes.paper}>
       <Avatar alt="Remy Sharp" src={person.img} className={classes.size} />
        <Column style={{margin:'0 20px'}}>
        <Title >{person.name}</Title>
        <Text>{person.text}</Text>
        </Column>
      </Row>
    </Fade>
  </Modal>  );
}

export default ModalView;
