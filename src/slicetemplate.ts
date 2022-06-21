import { createSlice } from "@reduxjs/toolkit";

interface ItemState {
    data: Array<String>;
}

const initialState: ItemState = {
    data: [],
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        toggleState: (state, action) => {
            state.data.push(action.payload)
        }
    }
})

export const { toggleState } = itemSlice.actions

export default itemSlice.reducer