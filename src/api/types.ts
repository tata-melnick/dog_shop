export type AuthorType = {
  about: string;
  avatar: string;
  email: string;
  name: string;
};

export type ReviewsType = {
  author: string;
  created_at: string;
  product: string;
  rating: number;
  text: string;
  updated_at: string;
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
  reviews: Array<ReviewsType>;
  tags: Array<any>;
  updated_at: string;
  _id: string;
};

export type ProductsType = Array<ProductType>;
export type GetProductsResult = { total: number; products: ProductsType };
