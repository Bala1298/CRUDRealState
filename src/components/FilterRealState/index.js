import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import {
    Button,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Tooltip
} from 'reactstrap';

function FilterRealState() {

    const [modal, setModal] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const togg = () => setTooltipOpen(!tooltipOpen);

    const toggle = () => setModal(!modal)

    return (
        <>
            <Button className="botonFiltrar" color="primary" id="filter"
                onClick={
                    () => setModal(true)
            }>
                <FontAwesomeIcon icon={faFilter}/>
                Filtrar
            </Button>
            <Tooltip isOpen={tooltipOpen}
                target={'filter'}
                toggle={togg}>
                Filtrar Elementos Real State
            </Tooltip>
            <Modal isOpen={modal}
                toggle={toggle}>
                <ModalHeader toggle={toggle}>Filtrar</ModalHeader>
                <ModalBody>
                    <div>
                        <FormGroup floating>
                            <Input id="exampleDirecion" name="Direcion" placeholder="Direcion" type="text"/>
                            <Label for="exampleDirecion">
                                direccion
                            </Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input id="exampleBathrooms" name="Bathrooms" placeholder="Bathrooms" type="text"/>
                            <Label for="exampleBathrooms">
                                bathrooms
                            </Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input id="exampleBedrooms" name="Bedrooms" placeholder="Bedrooms" type="text"/>
                            <Label for="exampleBedrooms">
                                bedrooms
                            </Label>
                        </FormGroup>
                        <Button color="info">Filtrar</Button>
                        {' '}
                        <Button color="danger">Cancelar</Button>
                    </div>
                </ModalBody>
                <ModalFooter></ModalFooter>
            </Modal>
        </>
    )
}

export default FilterRealState
