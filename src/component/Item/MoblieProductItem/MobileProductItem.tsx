import React from "react";
import { Products } from "types/type";
import { useNavigate } from "react-router-dom";
import Dummy from "../../../assets/images/dummy.jpg";
type ProductItemProps = {
  product: Products;
};
const ProductItem: React.FC<ProductItemProps> = (product) => {
  const navigate = useNavigate();
  const handleProductDetail = ({ product_id }: Products) => {
    console.log(product_id);
    navigate(`/detailProduct/${product_id}`, {
      state: {
        product: product_id,
      },
    });
  };
  return (
    <article>
      <button>
        <img src={Dummy} alt="더미이미지" />
        <div>
          {/* <span>{cartItem?.store_name}</span>
          <h3>{cartItem?.product_name}</h3> */}
          <p>
            <strong>
              {/* {cartItem?.price
                ? new Intl.NumberFormat("ko-KR").format(cartItem.price)
                : "0"} */}
            </strong>
            원
          </p>
        </div>
      </button>
    </article>
  );
};

export default ProductItem;
