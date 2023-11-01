import React, {createContext, useState} from 'react';
import {getRealState} from '../../utils/api';

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const [lista, setLista] = useState([]);

    async function updateList() {
        const listaRealState = await getRealState();
        setLista(listaRealState)
    }

    const contextValue = {
        lista,
        updateList
    };
    return (
        <DataContext.Provider value={contextValue}>
            {children} </DataContext.Provider>
    );
}
