import { configureStore } from "@reduxjs/toolkit";
import counterRrducer from './features/counter/counterSlice';
export const store = configureStore({
    reducer: {
        counter: counterRrducer,
    },
})