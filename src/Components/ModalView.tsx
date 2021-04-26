import React from "react"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import styled from "styled-components"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import Avatar from "@material-ui/core/Avatar"
import { Column, Row, Text, Title } from "../styles"
import { ModalProps } from "../helpers/types"

const OutlineAvatar = styled.div`
    position: relative;
    padding: 3px;
    border: 4px solid #007bff;
    border-radius: 200px;
    ::before {
        content: "";
        z-index: 2;
        position: absolute;
        top: 15px;
        right: 15px;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background: #fff;
    }
    ::after {
        content: "";
        z-index: 2;
        position: absolute;
        top: 20px;
        right: 20px;
        width: 30px;
        height: 30px;
        border-radius: 20px;
        background: #007bff;
    }
`
const StyledDiv = styled(Row)`
    position: relative;
    margin: 15px 5px;
    ::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 2px;
        background: #007bff;
    }
`

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        paper: {
            backgroundColor: "#F8F8F8",
            border: "2px solid #000",
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            maxWidth: "75%",
            maxHeight: "75%",
            overflow: "scroll",
        },
        size: {
            width: theme.spacing(30),
            height: theme.spacing(30),
        },
    })
)

interface Props {
    open: boolean
    setOpen: any
    dataModal: ModalProps
}

const ModalView: React.FC<Props> = ({ open, setOpen, dataModal }: Props) => {
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
                <Row
                    className={`${classes.paper} modal`}
                    flexWrap
                    justifyContent="center"
                >
                    {dataModal.img ? (
                        <OutlineAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src={dataModal.img}
                                className={classes.size}
                            />
                        </OutlineAvatar>
                    ) : null}

                    <Column style={{ width: "100%" }}>
                        <StyledDiv justifyContent="center">
                            <Title
                                color="#111"
                                style={{
                                    border: "2px solid #007bff",
                                    padding: 5,
                                    borderRadius: 20,
                                    background: "#fff",
                                    zIndex: 5,
                                }}
                            >
                                {dataModal.name
                                    ? dataModal.name
                                    : dataModal.title}
                            </Title>
                        </StyledDiv>
                        <Text style={{ padding: "0 15px" }}>
                            {dataModal.text}
                        </Text>
                        <StyledDiv />
                    </Column>
                </Row>
            </Fade>
        </Modal>
    )
}

export default ModalView
