import { configureStore, createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'task',
    initialState: [
        'Ir para faculdade',
        'Estudar React',
        'Levar a Alice no pediatra'
    ],
    reducers: {}
})

export const store = configureStore({
    reducer: {
        task: taskSlice.reducer
    }
})