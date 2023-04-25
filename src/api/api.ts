import {
  GetProductsResult,
  NewProductType,
  ProductsType,
  ProductType,
  RecoverResponse,
  ReviewBody,
  ReviewType,
  SignInData,
  SignInResponse,
  SignUpData,
  UsersType,
  UserType,
} from "./types";
import { TOKEN } from "../constants/storage";

type OptionsType = {
  baseUrl: string;
  groupId: string;
};

class API {
  static options: OptionsType = {
    baseUrl: "https://api.react-learning.ru",
    groupId: "/v2/group-10",
  };

  // ПРО ПРОДУКТЫ

  static async GetProducts(): Promise<GetProductsResult> {
    const token = window.sessionStorage.getItem(TOKEN);
    const response = await fetch(`${this.options.baseUrl}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token && { authorization: `Bearer ${token}` }),
      },
    });
    return response.json();
  }

  static async SearchProducts(search: any): Promise<ProductsType> {
    const token = window.sessionStorage.getItem(TOKEN);
    const response = await fetch(`${this.options.baseUrl}/products/search?query=${search}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token && { authorization: `Bearer ${token}` }),
      },
    });
    return response.json();
  }

  static async GetProductById(productId: string): Promise<ProductType> {
    const token = window.sessionStorage.getItem(TOKEN);
    const response = await fetch(`${this.options.baseUrl}/products/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token && { authorization: `Bearer ${token}` }),
      },
    });
    return response.json();
  }

  static async AddNewProduct(data: NewProductType): Promise<ProductType> {
    const token = window.sessionStorage.getItem(TOKEN);
    const response = await fetch(`${this.options.baseUrl}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async EditProduct(productId: string, data: NewProductType): Promise<ProductType> {
    const token = window.sessionStorage.getItem(TOKEN);
    const response = await fetch(`${this.options.baseUrl}/products/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...(token && { authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async DeleteProduct(productId: string): Promise<any> {
    const token = window.sessionStorage.getItem(TOKEN);
    const response = await fetch(`${this.options.baseUrl}/products/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...(token && { authorization: `Bearer ${token}` }),
      },
    });
    return response.json();
  }

  static async ChangeLikeProductStatus(productId: string, like): Promise<ProductType> {
    const token = window.sessionStorage.getItem(TOKEN);
    const response = await fetch(`${this.options.baseUrl}/products/likes/${productId}`, {
      method: like ? "PUT" : "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...(token && { authorization: `Bearer ${token}` }),
      },
    });
    return response.json();
  }

  static async AddReview(productId: string, body: ReviewBody): Promise<ProductType> {
    const token = window.sessionStorage.getItem(TOKEN);
    const response = await fetch(`${this.options.baseUrl}/products/review/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(body),
    });
    return response.json();
  }

  static async DeleteReview(productId: string, reviewId: string): Promise<ProductType> {
    const token = window.sessionStorage.getItem(TOKEN);
    const response = await fetch(
      `${this.options.baseUrl}/products/review/${productId}/${reviewId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          ...(token && { authorization: `Bearer ${token}` }),
        },
      }
    );
    return response.json();
  }

  static async GetReviewsById(productId: string): Promise<Array<ReviewType>> {
    const token = window.sessionStorage.getItem(TOKEN);
    const response = await fetch(`${this.options.baseUrl}/products/review/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token && { authorization: `Bearer ${token}` }),
      },
    });
    return response.json();
  }

  // ПРО ПОЛЬЗОВАТЕЛЯ

  static async GetUsers(): Promise<UsersType> {
    const token = window.sessionStorage.getItem(TOKEN);
    const response = await fetch(`${this.options.baseUrl}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token && { authorization: `Bearer ${token}` }),
      },
    });
    return response.json();
  }

  static async GetUserInfo(): Promise<UserType> {
    const token = window.sessionStorage.getItem(TOKEN);
    const response = await fetch(`${this.options.baseUrl}${this.options.groupId}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token && { authorization: `Bearer ${token}` }),
      },
    });
    return response.json();
  }

  static async EditUserInfo(body: Pick<UserType, "name" | "about">): Promise<UserType> {
    const token = window.sessionStorage.getItem(TOKEN);
    const response = await fetch(`${this.options.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...(token && { authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(body),
    });
    return response.json();
  }

  static async EditUserAvatar(avatar: string): Promise<UserType> {
    const token = window.sessionStorage.getItem(TOKEN);
    const response = await fetch(`${this.options.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...(token && { authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify({ avatar }),
    });
    return response.json();
  }

  // ПРО РЕГИСТРАЦИЮ

  static async SignUp(data: SignUpData): Promise<UserType> {
    const response = await fetch(`${this.options.baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async SignIn(data: SignInData): Promise<SignInResponse> {
    const response = await fetch(`${this.options.baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async Recover(email: string): Promise<RecoverResponse> {
    const response = await fetch(`${this.options.baseUrl}/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    return response.json();
  }

  static async ResetPass(token: string, password: string): Promise<SignInResponse> {
    const response = await fetch(`${this.options.baseUrl}/password-reset/${token}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });
    return response.json();
  }
}

export default API;
