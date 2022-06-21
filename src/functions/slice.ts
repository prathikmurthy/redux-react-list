import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
    data: Array<string>
}

const initialState: TaskState = {
    data: []
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => { state.data.push(action.payload) },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.data.splice(state.data.indexOf(action.payload), 1);
        }
    }
}) 

export const { addTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer