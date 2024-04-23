import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    data
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
        },
        resetUser: (state, action) => {
            state.user = null;
        }
    }
})

export const { setUser, resetUser } = authSlice.actions
export default authSlice.reducer