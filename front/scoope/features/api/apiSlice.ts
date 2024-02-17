import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({

    reducerPath:"api",
    baseQuery:fetchBaseQuery({
         baseUrl:process.env.NEXT_PUBLIC_SERVER_URI
    }),
    endpoints:(builder) => ({

            refreshToken:builder.query({

                query:(data) => ({

                      url:"todos/1",
                      method:"GET",
                      
                })
            }),

          

        
    })
});

export const {useRefreshTokenQuery} = apiSlice;