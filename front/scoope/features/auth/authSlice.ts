import {createSlice,PayloadAction} from '@reduxjs/toolkit';


type InitialeState = {

    token:string,
    user:string,
     
}
const initialState = {
    token: "",
    user: "",
  } as InitialeState;

const auth = createSlice({

    name:'auth',
    initialState,
    reducers:{
        useLogOut:() => {
             return initialState;
        },

        useRegistration :(state,action:PayloadAction<{token:string}>) => {
            state.token = action.payload.token;
        }
    }


})

export const {useLogOut,useRegistration} = auth.actions;
export default auth.reducer;