import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit'

// import LayoutSlice from './Slices/LayoutSlice'
// import { createWrapper } from "next-redux-wrapper"

const store = configureStore({
    reducer: {
        // "posts": LayoutSlice
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;