import React, {useEffect, useContext} from 'react';
import {Table} from 'reactstrap';
import ViewRealState from '../ViewRealState';
import EditRealState from '../EditRealState';
import DeleteRealState from '../DeleteRealState';
import {DataContext} from '../contexto';

function ListRealState() {
    const {lista, updateList} = useContext(DataContext);
    useEffect(() => {
        updateList()
    }, [])

    return (<Table striped bordered='bool' className='tablaLista'>
        <thead>
            <tr>
                <th className="col-lg-1">id</th>
                <th className="col-lg-3">Direcion</th>
                <th className="col-lg-1">bathrooms</th>
                <th className="col-lg-1">bedrooms</th>
                <th className="col-lg-1">builtArea</th>
                <th className="col-lg-2">description</th>
                <th className="col-lg-1">actions</th>
                <th className="col-lg-2">images</th>
            </tr>
        </thead>
        <tbody className='tablaLista'> {
            lista.map((v, i) => {
                return <tr>
                    <th scope="row"> {
                        v.id
                    }</th>
                    <td> {
                        v.address
                    }</td>
                    <td> {
                        v.bathrooms
                    }</td>
                    <td> {
                        v.bedrooms
                    }</td>
                    <td> {
                        v.builtArea
                    }</td>
                    <td> {
                        < span dangerouslySetInnerHTML = {{__html:  v.description}}
                        />
                    }</td>
                    <td className='botonesLista'>
                        <ViewRealState id={
                            v.id
                        }/>{' '}
                        <EditRealState id={
                            v.id
                        }/>{' '}
                        <DeleteRealState id={
                            v.id
                        }/>
                    </td>
                </tr>
        })
        } </tbody>
    </Table>);
}
export default ListRealState;
