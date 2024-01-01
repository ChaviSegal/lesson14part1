import{useDispatch}from "react-redux";
import { deletedWatch, selectedWatchForEdit, selectedWatchesToSee } from "./Store/actions";

const ListItem=({one})=>{
    let dispatch=useDispatch()
    return(
        <div>
            <h3>{one.name}</h3>
            <input type="button" onClick={()=>{dispatch(deletedWatch(one.id))}}value="מחק אותי"/>
            <input type="button" onClick={()=>{dispatch(selectedWatchForEdit(one))}}value="ערוך אותי"/>
            <input type="button" onClick={()=>{dispatch(selectedWatchesToSee(one))}}value="הצג אותי"/>
        </div>
    )
}
export default ListItem;


