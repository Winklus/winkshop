import { PRODUCTS_URL} from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ keyword, pageNumber }) => ({
        url: PRODUCTS_URL,
        params: {
          keyword,
          pageNumber,
        },
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

    
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: 'DELETE',
      }),
      providesTags: ['Product'],
    }),

    createProduct: builder.mutation({
      query: (product) => ({
        url: PRODUCTS_URL,
        method: 'POST',
        body: {...product}
      }),
    }),
    

    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Products'],
    }),

    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `/api/upload`,
        method: 'POST',
        body: data,
      }),
    }),

    createReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}/reviews`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['product'],
    }),

    getTopProducts: builder.query({
      query: () => `${PRODUCTS_URL}/top`,
      keepUnusedDataFor: 5,
    }
  ),

  }),
});

export const { 
  useGetProductsQuery, 
  useGetProductDetailsQuery, 
  useDeleteProductMutation, 
  useCreateProductMutation, 
  useUpdateProductMutation, 
  useUploadProductImageMutation,
  useCreateReviewMutation,
  useGetTopProductsQuery,
} = productsApiSlice;