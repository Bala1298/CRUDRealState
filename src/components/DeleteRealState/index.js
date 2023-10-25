import React, {useState} from 'react';
import {deleteRealState} from '../../utils/api';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

function DeleteRealState(props) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal)
    const handlerOpenModal = () => {
        setModal(true)
    }
    const handlerCloseModal = () => {
        setModal(false)
    }

    return (
        <>
            <div>
                <Button color="danger"
                    onClick={handlerOpenModal}>
                    Delete
                </Button>
                <Modal isOpen={modal}
                    toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        <b>ALERTA!</b>
                    </ModalHeader>
                    <ModalBody>
                        Desea borrar este elemento?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger"
                            onClick={
                                (e) => deleteRealState(props.id)
                        }>
                            Delete
                        </Button>
                        <Button color="info"
                            onClick={handlerCloseModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    );
}
export default DeleteRealState;
