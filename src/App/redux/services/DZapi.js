import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Config } from "../../constant/Index";

export const DZapi = createApi({
  reducerPath: "DZapi",
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.REACT_APP_SERVER_URL,
    baseUrl: Config.serverUrl,
   
    prepareHeaders: async (headers, { getState, endpoint }) => {
      // if (
      //   localStorage.getItem(Config.userToken) &&
      //   endpoint !== "refresh"
      // )
        // headers.set(
        //   "Authorization",
        //   `Bearer ${localStorage.getItem(Config?.userToken)}`
        // );
      headers.set("Accept", "application/json");
      // headers.set("Accept", "text/plain");
      // headers.set('Content-Type', 'application/json');

      return headers;
    },
  }),

  //******************Products api******************//

  endpoints: (builder) => ({
    getAllUserHomes: builder.query({
      query: (id) => `Homes/${id}`,
    }),
    addHome: builder.mutation({
      query: (pro) => ({
        url:  `Homes/${pro.userId}`,
        method: "POST",
        body: pro.data,
      })
    }),
    updateHome: builder.mutation({
      query: (pro) => ({
        url:  `Homes/${pro.userId}`,
        method: "PUT",
        body: pro.data,
      })
    }),
    deleteHome: builder.mutation({
      query: (id) => ({
        url: `Homes/${id}`,
        method: "DELETE",
      }),
    })
  }),
});

export const {
  useGetAllUserHomesQuery,
  useAddHomeMutation,
  useUpdateHomeMutation,
  useDeleteHomeMutation
} = DZapi;
