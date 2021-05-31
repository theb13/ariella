import React from "react"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import { Paper } from "./styles"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "scroll",
        },
        paper: {
            border: "2px solid #000",
            boxShadow: theme.shadows[5],
            width: "500px",
            height: "500px",
        },
    })
)

interface Props {
    open: boolean
    setOpen: any
    img: string
}

const ModalView: React.FC<Props> = ({ open, setOpen, img }: Props) => {
    const classes = useStyles()

    const handleClose = () => {
        setOpen(false)
    }

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
                <Paper>
                    <img
                        src={img}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        alt=""
                    />
                </Paper>
            </Fade>
        </Modal>
    )
}

export default ModalView
