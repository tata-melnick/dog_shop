import { GetProductsResult, NewProductType, ProductsType, ProductType } from "./types";
import MyData from "../data.json";

type OptionsType = {
  baseUrl: string;
  groupId: string;
  headers: {
    authorization: string;
    "Content-Type": string;
  };
};

class API {
  constructor(options: OptionsType) {
    this.options = options;
  }

  options: OptionsType = null;

  async GetProducts(): Promise<GetProductsResult> {
    const response = await fetch(`${this.options.baseUrl}/products`, {
      method: "GET",
      headers: this.options.headers,
    });
    return response.json();
  }

  async SearchProducts(search: any): Promise<ProductsType> {
    const response = await fetch(`${this.options.baseUrl}/products/search?query=${search}`, {
      method: "GET",
      headers: this.options.headers,
    });
    return response.json();
  }

  async GetProductById(productId: string): Promise<ProductType> {
    const response = await fetch(`${this.options.baseUrl}/products/${productId}`, {
      method: "GET",
      headers: this.options.headers,
    });
    return response.json();
  }

  async AddNewProduct(data: NewProductType): Promise<ProductType> {
    const response = await fetch(`${this.options.baseUrl}/products`, {
      method: "POST",
      headers: this.options.headers,
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async EditProduct(productId: string): Promise<ProductsType> {
    const response = await fetch(`${this.options.baseUrl}/products/${productId}`, {
      method: "PATCH",
      headers: this.options.headers,
    });
    return response.json();
  }

  async DeleteProduct(productId: string): Promise<ProductsType> {
    const response = await fetch(`${this.options.baseUrl}/products/${productId}`, {
      method: "DELETE",
      headers: this.options.headers,
    });
    return response.json();
  }

  async ChangeLikeProductStatus(productId: string, like): Promise<ProductType> {
    const response = await fetch(`${this.options.baseUrl}/products/likes/${productId}`, {
      method: like ? "PUT" : "DELETE",
      headers: this.options.headers,
    });
    return response.json();
  }
}

export default new API({
  baseUrl: "https://api.react-learning.ru",
  headers: {
    authorization: `Bearer ${MyData.token}`,
    // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac",
    "Content-Type": "application/json",
  },
  groupId: "/v2/group-7",
});
