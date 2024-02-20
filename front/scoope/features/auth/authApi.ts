import { apiSlice } from "../api/apiSlice";
import { useRegistration } from "./authSlice";

type RegistrationData = {};
type RegistrationResponse = {
    message: string;
    token: string;
  };
  
export const authApi = apiSlice.injectEndpoints({

    endpoints:(builder) => ({

        register : builder.mutation<RegistrationResponse,RegistrationData>({

            query:(data) => ({
                url:'users/signin',
                method:'POST',
                body:data,
                credentials : "include" as const

            }),

            async onQueryStarted(arg,{queryFulfilled,dispatch}){

                    try{

                         const res = await queryFulfilled
                         dispatch(useRegistration({
                            token:res.data.token
                         }));

                    }catch(error:any){

                            console.log(error);
                    }
            }

        
        })
    })
})

export const {

    useRegisterMutation
} = authApi