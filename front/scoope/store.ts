"use client"
import {configureStore} from '@reduxjs/toolkit';
import { apiSlice } from './features/api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from './features/auth/authSlice';



export const store = configureStore({

    reducer:{

        [apiSlice.reducerPath] : apiSlice.reducer,
        auth:authSlice
        
    },

    devTools:true,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware) 
});

setupListeners(store.dispatch);