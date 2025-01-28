import { PRODUCTS_URL} from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      transformResponse: (response) => {
        console.log("Response:", response); // Debug response data
        return response;
      },
      keepUnusedDataFor: 60,
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      transformResponse: (response) => {
        console.log("Product Details:", response);
        return response;
      },
      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApiSlice;