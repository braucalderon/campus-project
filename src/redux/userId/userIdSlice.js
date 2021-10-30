import { createSlice } from "@reduxjs/toolkit"; 

const userIdSlice = createSlice({
    name:'userId',
    initialState: {
        emplid: null,
        first: null,
        last: null,
        college: null,
        enrollment: 'yes',
        photo: null
    },
    reducers: {
        onClickEmplid: (state, action) => {
            state.emplid = action.payload.emplid;
            state.first = action.payload.first;
            state.last = action.payload.last;
            state.college = action.payload.college;
            state.enrollment = action.payload.enrollment;
            state.photo = action.payload.photo;

        }

    }
});
export const { onClickEmplid } = userIdSlice.actions;

export const selectEmplid = (state) => state.userId.emplid;
export const selectFirst = (state) => state.userId.first;
export const selectLast = (state) => state.userId.last;
export const selectCollege = (state) => state.userId.college;
export const selectEnrollment = (state) => state.userId.enrollment;
export const selectPhoto = (state) => state.userId.photo;


export default userIdSlice.reducer;