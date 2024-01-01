import { useSelector } from "react-redux";
import ListItem from "./ListItem";

export default function WatchesList(){
let arr=useSelector(state=>state.arr);
return<>
כל השעונים<ul>
    {arr.map(item => <li key={item.id}>
        <ListItem one={item}/>
    </li>)}
</ul>
</>


}