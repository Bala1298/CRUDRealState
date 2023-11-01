import React, {useContext, useState} from 'react';
import {createRealState} from '../../utils/api';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    FormGroup,
    Label,
    Toast,
    ToastHeader,
    ToastBody,
    Tooltip
} from 'reactstrap';
import {DataContext} from '../contexto';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolderPlus} from '@fortawesome/free-solid-svg-icons';

function CreateRealState() {
    const {updateList} = useContext(DataContext);

    const [imagen, setImagen] = useState('')
    const [modal, setModal] = useState(false);
    const [address, setAddress] = useState("");
    const [bathrooms, setBathrooms] = useState(0);
    const [bedrooms, setBedrooms] = useState(0);
    const [builtArea, setBuiltArea] = useState(0);
    const [description, setDescription] = useState("");
    const [confirmacion, setConfirmacion] = useState(false);

    const [tooltipOpen, setTooltipOpen] = useState(false);

    const togg = () => setTooltipOpen(!tooltipOpen);

    const handlerCloseModal = () => {
        setModal(false);
        setAddress("");
        setBathrooms(0);
        setBedrooms(0);
        setBuiltArea(0);
        setDescription("");
    }

    const toggle = () => setModal(!modal);
    return (
        <>
            <Button className='botonCrearEstado' color="primary" id='create'
                onClick={
                    () => setModal(true)
            }>
                <FontAwesomeIcon icon={faFolderPlus}/>
                Crear Nuevo
            </Button>
            <Tooltip isOpen={tooltipOpen}
                target={'create'}
                toggle={togg}>
                Crear Nuevo Real State
            </Tooltip>
            <Modal isOpen={modal}
                toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Real State</ModalHeader>
                <ModalBody>
                    <div>
                        <FormGroup floating>
                            <Input id="exampleDirecion" name="Direcion" placeholder="Direcion" type="text"
                                value={address}
                                onChange={
                                    (e) => setAddress(e.target.value)
                                }/>
                            <Label for="exampleDirecion">
                                Direcion
                            </Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input id="exampleBathrooms" name="bathrooms" placeholder="Bathrooms" type="number"
                                value={bathrooms}
                                onChange={
                                    (e) => setBathrooms(e.target.value)
                                }/>
                            <Label for="exampleBedrooms">
                                Bathrooms
                            </Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input id="exampleBedrooms" name="bedrooms" placeholder="Bedrooms" type="number"
                                value={bedrooms}
                                onChange={
                                    (e) => setBedrooms(e.target.value)
                                }/>
                            <Label for="exampleBedrooms">
                                Bedrooms
                            </Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input id="example Built Area" name="built Area" placeholder="Built Area" type="number"
                                value={builtArea}
                                onChange={
                                    (e) => setBuiltArea(e.target.value)
                                }/>
                            <Label for="Built Area">
                                Built Area
                            </Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input id="description" name="description" placeholder="Description" type="straing"
                                value={description}
                                onChange={
                                    (e) => setDescription(e.target.value)
                                }/>
                            <Label for="description">
                                Description
                            </Label>
                        </FormGroup>
                    </div>
                    <div>
                        <Button color='primary' onClick={
                            async () => {
                                const resultado = await createRealState({
                                    address,
                                    bathrooms,
                                    bedrooms,
                                    builtArea,
                                    description
                                })
                                await updateList()
                                handlerCloseModal()
                                if (resultado.id > 0) {
                                    setConfirmacion(true)
                                    setTimeout((e) => {
                                        setConfirmacion(false)
                                    }, 3000)
                                }
                            }
                        }>Submit</Button>{' '}
                        <Button color='danger' onClick={handlerCloseModal}>Cancelar</Button>
                    </div>
                </ModalBody>
                <ModalFooter></ModalFooter>
            </Modal>
            <Toast isOpen={confirmacion}>
                <ToastHeader icon="primary">
                    Mensaje
                </ToastHeader>
                <ToastBody>
                    Objeto creado con exito!
                </ToastBody>
            </Toast>
        </>
    );
}
export default CreateRealState;
