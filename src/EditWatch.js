import { useDispatch, useSelector } from "react-redux"
import{useForm} from "react-hook-form"
import { saveAditedWatch } from "./Store/actions";

const EditWatch=()=>{
    let watchForEdit=useSelector(state=>state.selectedWatchForEdit);
    let disp=useDispatch();
    let { register, handleSubmit, formState:{errors} } = useForm({
        defaultValues: watchForEdit
    })
    

    const saveDetails=(data)=>{
        console.log(data);
        disp(saveAditedWatch(data))
    }
    return(<form onSubmit={handleSubmit(saveDetails)}>
        <label>שם</label>
        <input {...register("name",{minLength:2})}></input>
        {errors.name&&<span>שם לא תקין</span>}

        <label>מחיר</label>
        <input {...register("price")}></input>

        <input type="submit" />

    </form>)
}
export default EditWatch;