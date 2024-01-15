import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import OneWatch from "./OneWatch";
import { getAllWatches } from "./watchApi";


const WatchList = () => {
let [arr,setArr]=useState([]);
useEffect(()=>{
    getAllWatches().then(res=>{
        setArr(res.data);
    }).catch(err=>{
        alert("לא יכול להביא את השעונים"+err)
    })
},[])
    return (<ul>
    {arr.map(item => {return <li key={item._id}><OneWatch one={item}/></li>})}
    </ul>  );
}
 
export default WatchList;