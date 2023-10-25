import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import {getRealState} from '../../utils/api';
import ViewRealState from '../ViewRealState';
import EditRealState from '../EditRealState';
import DeleteRealState from '../DeleteRealState';


function ListRealState() {
    const [lista, setLista] = useState([]);
    useEffect(() => {
        setElementInTheList()
    }, [])
    async function setElementInTheList() {
        const listaRealState = await getRealState();
        setLista(listaRealState)
    }
    return (
        <Table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Direcion</th>
                    <th>bathrooms</th>
                    <th>bedrooms</th>
                    <th>builtArea</th>
                    <th>description</th>
                </tr>
            </thead>
            <tbody> {
                lista.map((v, i) => {
                    return <tr>
                        <th scope="row">
                            {v.id}</th>
                        <td>{
                            v.address
                        }</td>
                        <td>{
                            v.bathrooms
                        }</td>
                        <td>{
                            v.bedrooms
                        }</td>
                        <td>{
                            v.builtArea
                        }</td>
                        <td>{
                            < span dangerouslySetInnerHTML = {{__html:  v.description}}
                            />
                        }</td>
                        <td>
                            <ViewRealState id={v.id}/>
                            <EditRealState id={v.id}/>
                            <DeleteRealState id={v.id}/>
                        </td>
                    </tr>
            })
            } </tbody>
        </Table>
    );
}
export default ListRealState;
