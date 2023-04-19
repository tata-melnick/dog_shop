export type SignInData = { email: string; password: string };

export type SignUpData = SignInData & { group: string };

export type UserType = {
  name: string;
  about: string;
  avatar: string;
  isAdmin: boolean;
  _id: string;
  email: string;
  group: string;
};

export type AuthorType = {
  about: string;
  avatar: string;
  email: string;
  name: string;
};

export type ReviewType = {
  author: UserType;
  created_at: string;
  product: string;
  rating: number;
  text: string;
  updated_at: string;
  _id: string;
};

export type ReviewBody = {
  text: string;
  rating: number;
};

export type NewProductType = {
  available: boolean;
  pictures: string;
  name: string;
  price: number;
  discount: number;
  stock: number;
  wight: string;
  description: string;
  className: string;
};

export type ProductType = NewProductType & {
  author: AuthorType;
  created_at: string;
  isPublished: boolean;
  likes: Array<string>;
  reviews: Array<ReviewType>;
  tags: Array<any>;
  updated_at: string;
  _id: string;
};

export type SignInResponse = { data: UserType; token: string };
export type RecoverResponse = { message: string };
export type ProductsType = Array<ProductType>;
export type UsersType = Array<UserType>;
export type GetProductsResult = { total: number; products: ProductsType };
