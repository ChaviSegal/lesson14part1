import { useSelector } from "react-redux"

const WatchDetails=()=>{
    let watch=useSelector(state=>state.selectedWatch)
    return(<div className="watchDetales">
        פרטי השעון הנבחר:
        <h3>{watch.name}</h3>
        <h3>{watch.price}</h3>
        <img src={watch.src} alt={watch.name} width="100" height="170"/>

    </div>)
}
export default WatchDetails;
