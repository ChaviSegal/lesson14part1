import logo from './logo.svg';
import './App.css';
import WatchesList from './WatchesList';
import WatchDetails from './WatchDetails'
import {useSelector}from "react-redux";
import EditWatch from './EditWatch';

function App() {
  let selected=useSelector(state=>state.selectedWatch)
  let selectedForEdit=useSelector(state=>state.selectedWatchForEdit)
  return (<>
<WatchesList/>
{selected&&<WatchDetails/>}
{selectedForEdit&&<EditWatch/>}
  </>);
}

export default App;
