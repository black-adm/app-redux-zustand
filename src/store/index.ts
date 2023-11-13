import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

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

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector