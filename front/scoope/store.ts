"use client"
import {configureStore} from '@reduxjs/toolkit';
import { apiSlice } from './features/api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from './features/auth/authSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';



export const store = configureStore({

    reducer:{

        [apiSlice.reducerPath] : apiSlice.reducer,
        auth:authSlice
        
    },

    devTools:true,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware) 
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;