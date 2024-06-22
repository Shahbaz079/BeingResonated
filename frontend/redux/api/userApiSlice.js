
import { USERS_IMAGE_URL, USERS_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";

export const userApiSlice=apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    register:builder.mutation({
      query:(data)=>({
        url:`${USERS_URL}`,
        method:"POST",
        body:data

      })
    }),

    login:builder.mutation({
      query:(data)=>({
        url:`${USERS_URL}/login`,
        method:"POST",
        body:data

      })
    }),
    logout:builder.mutation({
      query:()=>({
        url:`${USERS_URL}/logout`,
        method:"POST",
      })
    }),

    uploadimage:builder.mutation({
      query:(data)=>({
       url:`${USERS_IMAGE_URL}`,
       method:"POST",
       body:data,
      })
    })



  })
})
export const {useRegisterMutation,useLoginMutation,useLogoutMutation,useUploadimageMutation}=userApiSlice;