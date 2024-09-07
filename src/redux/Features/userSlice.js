import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    user:{
        first_name: 'Dele',
        last_name: 'Taiwo',
        age: 26
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            console.log(action)
            state.user = action.payload;
            state.loading = true;
            state.error = false;
        },
        // createUser: (state, action) => {
        //     state.users.unshift(action.payload);
        // },
        // deleteUser: (state, action) => {
        //     state.users.filter((user) => user.id !== action.payload.id);
        // },
    },
});
export const { /*createUser, deleteUser, */ updateUser } = userSlice.actions;
export default userSlice.reducer