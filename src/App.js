import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateRealState from './components/CreateRealState';
import ListRealState from './components/ListRealState';


function App() {

    return (
        <div className="App">
        <CreateRealState/>
            <ListRealState/>
        </div>
    );
}
export default App;
