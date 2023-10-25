import React, {useState} from 'react';
import {editRealState, viewRealState} from '../../utils/api';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    FormGroup,
    Label
} from 'reactstrap';

function EditRealState(props) {
    const id = props.id;
    const [modal, setModal] = useState(false);
    const [address, setAddress] = useState("");
    const [bathrooms, setBathrooms] = useState(0);
    const [bedrooms, setBedrooms] = useState(0);
    const [builtArea, setBuiltArea] = useState(0);
    const [description, setDescription] = useState("");

    const handlerCloseModal = () => {
            setModal(false);
            setAddress("");
            setBathrooms(0);
            setBedrooms(0);
            setBuiltArea(0);
            setDescription("");
    }
    const handlerOpenModal = async () => {
        const object = await viewRealState(id)
            
        setAddress(object.address);
        setBathrooms(object.bathrooms);
        setBedrooms(object.bedrooms);
        setBuiltArea(object.builtArea);
        setDescription(object.description);

        setModal(true);
    }

    const toggle = () => setModal(!modal);
    return (
        <>
            <Button color="primary" onClick={handlerOpenModal}>
                Editar Real State
            </Button>
            <Modal isOpen={modal}
                toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Real State {id}</ModalHeader>
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
                        <button onClick={
                            () => {
                                editRealState({
                                    id,
                                    address,
                                    bathrooms,
                                    bedrooms,
                                    builtArea,
                                    description
                                })
                                handlerCloseModal()
                            }
                        }>Submit</button>
                        <button onClick={handlerCloseModal}>Cancelar</button>
                    </div>
                </ModalBody>
                <ModalFooter></ModalFooter>
            </Modal>
        </>
    );
}
export default EditRealState;
