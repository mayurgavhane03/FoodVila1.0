import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userReducer from "../Utils/userSlice"


const store = configureStore({
    /* here we create slices */
    reducer: {
        cart:cartSlice, 
        user: userReducer,
    
    }
})


export default store;




/* 
    create Store
        - configureStore() - rtk

    provide my store to app

        <Provider store = { store }  - import from react redux


    Slice 

    - rtk - createSlice({
        name: "",
        intialState:

        reducers: {
            #actions

            addItem: (state, action) => {state=action.payload}
        }
    })

    # i wll have to export actions
     const {addItems, removeItems} = cartSlice.actions;

    export default cartSlice.reducer;



    put that SLice into Store

        - {
            reducer:{
                cart: cart: cartSlice,
                 user: userSLice, 
                 
            }
        }
*/