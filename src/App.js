import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateRealState from './components/CreateRealState';
import ListRealState from './components/ListRealState';
import {DataProvider} from './components/contexto';
import FilterRealState from './components/FilterRealState';

function App() {

    return (<>
        <DataProvider>
            <div className="App">
                <div className="botonesTablaSuperior">
                    <FilterRealState/>
                    {' '}
                    <CreateRealState/>
                </div>
                <ListRealState className="lista"/>
            </div>
        </DataProvider>
    </>);
}
export default App;
