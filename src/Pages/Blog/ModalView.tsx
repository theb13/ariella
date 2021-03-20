import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import { Row } from '../../styles';
import { PropsModalBLog } from '../../helpers/types';

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
      maxWidth: '80%',
      maxHeight: '80%',
    },
    size: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  }),
);


const StyledRow = styled(Row)`
  display:flex;
  flex-direction: column;
  overflow-y: scroll;
  ul{
    display:flex;
    flex-wrap: wrap;
    justify-content:space-around;
   li{
     flex:1;
     margin: 10px 0;
   } 
  }
  img{
    width:300px;
    height:250px;
  }
`
interface Props {
  open: boolean
  setOpen: any
  modalData: PropsModalBLog
}


const ModalView: React.FC<Props> = ({ open, setOpen, modalData }) => {
  const classes = useStyles();

  console.log(modalData)

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
        <StyledRow className={classes.paper} >
          <Typography gutterBottom variant="h5"
            component="h2"
            style={{ color: '#111', fontSize: '1.4rem',fontWeight: 'bold' }}
            dangerouslySetInnerHTML={{ __html: modalData.title }}
          />
          <Typography gutterBottom 
            component="p"
            style={{ color: '#111', fontSize: '1rem',marginTop:'15px' }}
            dangerouslySetInnerHTML={{ __html: modalData.body }}
          />
        </StyledRow>
      </Fade>
    </Modal>);
}

export default ModalView;
