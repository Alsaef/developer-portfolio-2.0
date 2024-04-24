import { apiSlice } from "../api/apiSlice";

const project=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getProject: builder.query({
            query: () => '/projects',
          }),
    })
})

export const {useGetProjectQuery}=project