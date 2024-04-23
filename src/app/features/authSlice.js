import { createSlice } from '@reduxjs/toolkit'
// import { RootState } from '../store'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
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