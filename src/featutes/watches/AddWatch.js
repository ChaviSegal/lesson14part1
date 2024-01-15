import { useDispatch } from "react-redux"
import {AddToArr} from "./watchSlice"
import { useForm } from "react-hook-form"

const AddWatch=()=>{
    let dispatch = useDispatch
    let {register, handleSubmit}=useForm();
    const save = (data) => {
        dispatch(AddToArr(data));
    }
return(
    <>
    <form onSubmit={handleSubmit(save)}>
        <label>הכנס שם</label>
        <input {...register("name")}/>
        <label>הכנס מחרי</label>
        <input {...register("price")}/>
        <label>הכנס אלבום</label>
        <input {...register("album")}/>
        <label>הכנס תמונה</label>
        <input {...register("src")}/>
        <input type="submit" />
    </form>
    </>
)

}