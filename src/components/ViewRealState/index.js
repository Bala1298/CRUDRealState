import React, {useState} from 'react';
import {viewRealState} from '../../utils/api';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Tooltip
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';


function ViewRealState(props) {

    const [objectApi, setObjectApi] = useState({})
    const [modal, setModal] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const togg = () => setTooltipOpen(!tooltipOpen);

    const handlerOpenModal = async () => {
        const object = await viewRealState(props.id)
        setObjectApi(object)
        setModal(true);
    }
    if (props.id === 1) {
        console.info("objectApi", props.id, objectApi)
    }

    const handlerClosedModal = async () => {
        setModal(false)
    }

    const toggle = () => setModal(!modal);
    return (<>
            <Button color="info" id='view'
                onClick={handlerOpenModal}>
                <FontAwesomeIcon icon={faEye}/>
            </Button>
            <Tooltip
        isOpen={tooltipOpen}
        target={'view'}
        toggle={togg}
      >
        Tooltip Content!
      </Tooltip>
            <Modal isOpen={modal}
                toggle={toggle}>
                <ModalHeader toggle={toggle}>View RealState</ModalHeader>
                <ModalBody>
                    <b>Id: </b>
                    {
                    objectApi.id
                }
                    <br/>
                    <b>Address: </b>
                    {
                    objectApi.address
                }
                    <br/>
                    <b>Bathrooms: </b>
                    {
                    objectApi.bathrooms
                }
                    <br/>
                    <b>Bedrooms: </b>
                    {
                    objectApi.bedrooms
                }
                    <br/>
                    <b>Built Area: </b>
                    {
                    objectApi.builtArea
                }
                    <br/>
                    <b>Description: </b>
                    <span dangerouslySetInnerHTML={
                        {__html: objectApi.description}
                    }/>
                    <Button color='danger' onClick={handlerClosedModal}>Closed</Button>
                </ModalBody>
                <ModalFooter></ModalFooter>
            </Modal>
    </>);
}
export default ViewRealState;
