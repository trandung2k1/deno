// @desc    Get all products

import { Response } from "https://deno.land/x/oak@v12.6.1/mod.ts";

// @route   GET /api/v1/products
const getProducts = async ({ response }: { response: Response }) => {
  response.body = {
    success: true,
    data: [],
  };
};

// @desc    Get single product
// @route   GET /api/v1/products/:id
const getProduct = async (
  { params, response }: { params: { id: string }; response: Response },
) => {
};

// @desc    Add product
// @route   Post /api/v1/products
const addProduct = async (
  { request, response }: { request: Request; response: Response },
) => {
};

// @desc    Update product
// @route   PUT /api/v1/products/:id
const updateProduct = async (
  { params, request, response }: {
    params: { id: string };
    request: Request;
    response: Response;
  },
) => {
  response.body = {
    success: true,
    data: [],
  };
};

// @desc    Delete product
// @route   DELETE /api/v1/products/:id
const deleteProduct = async (
  { params, response }: { params: { id: string }; response: Response },
) => {
  response.body = {
    success: true,
    data: [],
  };
};

export { addProduct, deleteProduct, getProduct, getProducts, updateProduct };
