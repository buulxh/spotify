import {configureStore} from '@reduxjs/toolkit';
import { SongsSlice } from './Slice/SongsSlice';
import { SongSlice } from './Slice/SongSlice';
export const Store = configureStore({
    reducer: {
        songs: SongsSlice.reducer,
        song: SongSlice.reducer
    },
})