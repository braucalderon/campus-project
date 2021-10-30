import { configureStore } from '@reduxjs/toolkit';
import userIdSlice from './userId/userIdSlice';

export default configureStore({
    reducer: {
        userId: userIdSlice
    },
})
