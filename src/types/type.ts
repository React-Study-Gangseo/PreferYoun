export interface FormValue {
  id?: string;
  password?: string;
  password2?: string;
  name?: string;
  company_registration_number?: string;
  Phone?: string;
  StoreName?: string;
  phoneCode?: string;
  firstNumber?: string;
  secondNumber?: string;
}

export interface LoginData {
  id?: string;
  password?: string;
  user_type?: string;
}

export interface Products {
  product_id?: number;
  product_name?: string;
  seller?: number;
  store_name?: string;
  image?: string;
  price?: number;
  shipping_method?: string;
  shipping_fee?: number;
  stock?: number;
  products_info?: string;
}

export interface UploadProducts {
  product_id?: number;
  product_name?: string;
  seller?: number;
  store_name?: string;
  image?: File;
  price?: number;
  shipping_method?: string;
  shipping_fee?: number;
  stock?: number;
  products_info?: string;
}

export interface orderdata {
  product_id?: number;
  quantity?: number;
  order_kind?: string;
  reciever?: string;
  reciever_phone_number?: string;
  address?: string;
  address_message?: string;
  payment_method?: string;
  total_price?: number;
  check?: boolean;
}
export interface cartItem {
  my_cart: number; // 카트 고유번호; User가 바뀌지 않는이상 번호가 바뀌지 않음
  cart_item_id: number; // cartItem의 고유번호; 요청시마다 번호가 바뀜
  product_id: number; // 상품 아이디
  quantity: number;
}
export interface cartData {
  count?: number;
  next?: string;
  previous?: string;
  results?: cartItem[];
}

export interface totalPrice {
  totalPrice?: number;
  setTotalPrice?: (value: number) => void;
}
