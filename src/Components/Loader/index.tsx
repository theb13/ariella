import React, { useEffect } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props{
  loading: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

const Loader: React.FC<Props> = ({loading}) => {
  const classes = useStyles();
  return (
    <div>
     
      <Backdrop className={classes.backdrop} open={loading} >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Loader;
