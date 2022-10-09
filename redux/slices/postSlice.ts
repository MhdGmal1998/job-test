import { createSlice } from "@reduxjs/toolkit";
import { PostModel } from "../../types";
import { RootState } from "..";

const initialState: PostModel = {
    post: null
}

const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {},
    extraReducers: {}
})

export const postState = (state: RootState) => state.layout
export default postSlice.reducer
// export const { changeRequestNumber } = LayoutSlcie.actions