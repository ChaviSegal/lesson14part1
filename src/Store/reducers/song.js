const initialState={
    arr:[
        {id:1,name:"watch1",album:"all watches" ,price:420, src: "pictuares/צילום מסך 2023-12-27 180724.png" },
        {id:2,name:"watch2",album:"all watches" ,price:350, src:"pictuares/צילום מסך 2023-12-27 180734.png"},
        {id:3,name:"watch3",album:"all watches" ,price:500, src:"pictuares/צילום מסך 2023-12-27 180749.png"},
        {id:4,name:"whatch4",album:"all watches" ,price:480, src:"pictuares/צילום מסך 2023-12-27 180807.png"}
    ],
selectedWatch:null,
selectedWatchForEdit:null
}
export const watchReducer=(state=initialState,action)=>{
    switch (action.type){
        case "ADD_WATCH":
            return{
                selectedWatch:state.selectedWatch,
                selectedWatchForEdit:state.selectedWatchForEdit,
                arr:[...state.arr,action.payload]
            }
        case "SELECT_WATCH_TO_SEE":  
            return{
                selectedWatch:action.watch,
                selectedWatchForEdit:state.selectedWatchForEdit,
                arr:state.arr
             } 
        case "DELETE_WATCH":
            return{
                selectedWatch:state.selectedWatch,
                selectedWatchForEdit:state.selectedWatchForEdit,
                arr:state.arr.filter(item=>item.id!==action.watchId)
            }  
        case "SELECT_WATCH_FOR_EDIT":{
            return{
                selectedWatch:state.selectedWatch,
                selectedWatchForEdit:action.payload,
                arr:state.arr
            }
        }    
        case "SAVE_EDITED_WATCH":
            let b=state.arr.map(item=>{
                if(item.id==action.payload.id)
                return action.payload
              return item;  
            })
            return{
                selectedWatch:state.selectedWatch,
                selectedWatchForEdit:null,
                arr:b
            }   
            default:return state;    
            }
        
    }
