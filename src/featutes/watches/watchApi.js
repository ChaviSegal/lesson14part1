import axios from "axios"
export const getAllWatches=()=>{
    return (
        axios.get("http://localhost:4000/api/watch")
    )
}

export const getWatchById=(id)=>{
    axios.get("http://localhost:4000/api/watch/"+id)
}

export const deleteWatch=(id)=>{
    axios.delete("http://localhost:4000/api/watch/"+id)
}