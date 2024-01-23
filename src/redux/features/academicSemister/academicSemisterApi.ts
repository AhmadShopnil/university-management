import { baseApi } from "../../api/baseApi";

const academicSemisterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAcademicSemister: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAcademicSemisterQuery } = academicSemisterApi;
