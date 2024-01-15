import logo from './logo.svg';
import './App.css';
import WatchesList from './WatchesList';
import WatchDetails from './WatchDetails'
import {useSelector}from "react-redux";
import EditWatch from './EditWatch';
import WatchList from './featutes/watches/WatchList';
import { addWatch } from './Store/actions';

function App() {
  let selected=useSelector(state=>state.selectedWatch)
  let selectedForEdit=useSelector(state=>state.selectedWatchForEdit)
  return (<>
  <WatchList/>
  <addWatch/>
{/* <WatchesList/>
{selected&&<WatchDetails/>}
{selectedForEdit&&<EditWatch/>} */}
  </>);
}

export default App;
