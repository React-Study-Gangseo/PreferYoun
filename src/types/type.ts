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
  product_info?: string;
  quantity?: number;
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
  product_info?: string;
}

export interface orderdata {
  product_id?: number;
  quantity?: number;
  order_kind?: string;
  receiver?: string;
  receiver_phone_number?: string;
  address?: string;
  address_message?: string;
  payment_method?: string;
  total_price?: number;
  check?: boolean;
}
export interface cartItem {
  my_cart: number;
  cart_item_id: number;
  product_id: number;
  quantity: number;
  is_active: boolean;
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

export interface OrderedData {
  buyer?: number;
  created_at?: string;
  order_number?: number;
  order_items?: number[];
  order_quantity?: number[];
  receiver?: string;
  receiver_phone_number?: string;
  address?: string;
  address_message?: string;
  payment_method?: string;
  total_price?: number;
}
