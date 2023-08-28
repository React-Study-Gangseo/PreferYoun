export interface FormValue {
  id: string;
  password: string;
  password2: string;
  name: string;
  company_registration_number: string;
  Phone: string;
  StoreName: string;
  phoneCode: string;
  firstNumber: string;
  secondNumber: string;
}

export interface LoginData {
  id: string;
  password: string;
  user_type: string;
}

export interface Products {
  product_id: number;
  product_name: string;
  seller: number;
  store_name: string;
  image: string;
  price: number;
  shipping_method: string; //string, 선택
  shipping_fee: number;
  stock: number;
  products_info: string;
}
