import { configureStore, createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'task',
    initialState: [
        'Ir para faculdade',
        'Estudar React',
        'Levar a Alice no pediatra'
    ],

    reducers: {
        add: (state, action) => {
            state.push(action.payload.newTask)
        },
    },
})

export const store = configureStore({
    reducer: {
        task: taskSlice.reducer
    }
})

export const { add } = taskSlice.actions