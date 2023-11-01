import React, {useState, useContext} from 'react';
import {deleteRealState} from '../../utils/api';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Tooltip
} from 'reactstrap';
import {DataContext} from '../contexto';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

function DeleteRealState(props) {
    const [procesing, setProcesing] = useState(false);
    const {updateList} = useContext(DataContext)
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const togg = () => setTooltipOpen(!tooltipOpen);

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
            <Button color="danger" id='delete'
                onClick={handlerOpenModal}>
                <FontAwesomeIcon icon={faTrash}/>
            </Button>
            <Tooltip isOpen={tooltipOpen}
                target={'delete'}
                toggle={togg}>
                Eliminar Real State
            </Tooltip>
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
                        disabled={procesing}
                        onClick={
                            async function () {
                                setProcesing(true)
                                await deleteRealState(props.id)
                                await updateList()
                                setProcesing(false)
                            }
                    }>
                        Delete
                    </Button>
                    <Button color="info"
                        onClick={handlerCloseModal}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
export default DeleteRealState;
