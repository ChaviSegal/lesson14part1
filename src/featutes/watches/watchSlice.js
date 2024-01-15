import { createSlice } from "@reduxjs/toolkit";
const initialState={
    arr:
    [
        {id:1,name:"watch1",album:"all watches" ,price:420, src: "pictuares/צילום מסך 2023-12-27 180724.png" },
        {id:2,name:"watch2",album:"all watches" ,price:350, src:"pictuares/צילום מסך 2023-12-27 180734.png"},
        {id:3,name:"watch3",album:"all watches" ,price:500, src:"pictuares/צילום מסך 2023-12-27 180749.png"},
        {id:4,name:"whatch4",album:"all watches" ,price:480, src:"pictuares/צילום מסך 2023-12-27 180807.png"}
    ]
}

export const watchSlice=createSlice({
    name: "watch",
    initialState,
    reducers:{
        addToArr:(state, action)=>{
            state.arr.push({...action.payload,
            _id : state.arr[state.arr.length-1]._id+1});

        }
    } 
})
export const { addToArr, removeFromArr } = watchSlice.actions
export default watchSlice.reducer