import { createSlice } from "@reduxjs/toolkit";

const ToggleSlice = createSlice({
    name:"toggle",
    initialState:{
        toggleMenuOpen: true
    },
    reducers:{
        toggleMenu:(state)=>{
            state.toggleMenuOpen = !state.toggleMenuOpen
        }
    }
})

export const {toggleMenu} = ToggleSlice.actions;
export default ToggleSlice.reducer;