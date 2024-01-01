export const selectedWatchesToSee=(watch)=>{
    return{
        type: "SELECT_WATCH_TO_SEE",
        watch:watch
    }
}

export const selectedWatchForEdit = (watch) => {
    return {
        type: "SELECT_WATCH_FOR_EDIT",
        payload: watch
    }
}


export const deletedWatch=(watchid)=>{
    return{
        type: "DELETE_WATCH",
        watchId: watchid
    }
}

export const addWatch=(watch)=>{
    return{
        type: "ADD_WATCH",
        payload: watch
    }
}

export const saveAditedWatch=(watch)=>{
    return{
        type: "SAVE_EDITED_WATCH",
        payload:watch
    }
}