import { Row } from "../model/row.model.ts";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rowApi = createApi({
  reducerPath: "rowApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://185.244.172.108:8081/" }),
  tagTypes: ["Row"],
  endpoints: (builder) => ({
    getTreeRows: builder.query<Row[], number>({
      query: (eID) => `v1/outlay-rows/entity/${eID}/row/list`,
      providesTags: ["Row"],
    }),
    createRow: builder.mutation({
      query: ({ id, body }) => ({
        url: `v1/outlay-rows/entity/${id}/row/create`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Row"],
    }),
    deleteRow: builder.mutation({
      query: ({ id, rID }) => ({
        url: `v1/outlay-rows/entity/${id}/row/${rID}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["Row"],
    }),
  }),
});

export const {
  useGetTreeRowsQuery,
  useCreateRowMutation,
  useDeleteRowMutation,
} = rowApi;
