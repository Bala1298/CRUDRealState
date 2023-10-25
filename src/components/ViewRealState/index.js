import React, {useState} from 'react';
import {viewRealState} from '../../utils/api';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

function ViewRealState(props) {

    const [objectApi, setObjectApi] = useState({})
    const [modal, setModal] = useState(false);

  

    const handlerOpenModal = async () => {
        const object = await viewRealState(props.id)
        setObjectApi(object)
        setModal(true);
    }
    if(props.id === 1){

        console.info("objectApi", props.id,  objectApi)
    }

    const toggle = () => setModal(!modal);
    return (
        <>
        <div>
            <Button color="info"
                onClick={handlerOpenModal}>
                View
            </Button>
            <Modal isOpen={modal}
                toggle={toggle}>
                <ModalHeader toggle={toggle}>View RealState</ModalHeader>
                <ModalBody>
                    <b>Id:</b> {objectApi.id}
                    <br />
                    <b>Address:</b> {objectApi.address}
                    <br />
                    <b>Bathrooms:</b> {objectApi.bathrooms}
                    <br />
                    <b>Bedrooms:</b> {objectApi.bedrooms}
                    <br />
                    <b>Built Area:</b> {objectApi.builtArea}
                    <br />
                    <b>Description:</b> < span dangerouslySetInnerHTML = {{__html:  objectApi.description}}/>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>
        </div>
        </>
    );
}
export default ViewRealState;
