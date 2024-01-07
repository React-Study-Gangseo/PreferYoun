import React from "react";
import { ProductInfo } from "../SellerCenterPage.Style";
import Button from "component/common/Button/Button";
import { DeleteProduct } from "API/ProductAPI";
import { Products } from "types/type";
import { useNavigate } from "react-router-dom";

const SellerItem: React.FC<{
  product: Products;
  index: number;
  getSellerProduct(): void;
}> = ({ product, index, getSellerProduct }) => {
  const navigate = useNavigate();
  const handleDeleteProduct = async (product_id: number) => {
    try {
      const res = await DeleteProduct(product_id);
      console.log(res);
      getSellerProduct();
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditProduct = () => {
    navigate("/seller/center/upload", { state: { product: product } });
  };
  return (
    <tr key={index}>
      <td>
        <ProductInfo>
          <img src={product.image} alt="상품이미지" />
          <h3>{product.product_name}</h3>
          <span>재고 : {product.stock}개</span>
        </ProductInfo>
      </td>
      <td>
        {`${new Intl.NumberFormat("ko-KR").format(product.price || 0)}`}원
      </td>
      <td>
        <Button
          size="s"
          color="primary"
          variant="contained"
          onClick={() => handleEditProduct()}
        >
          수정
        </Button>
      </td>
      <td>
        <Button
          size="s"
          variant="outlined"
          onClick={() => {
            if (product.product_id !== undefined) {
              handleDeleteProduct(product.product_id);
            }
          }}
        >
          삭제
        </Button>
      </td>
    </tr>
  );
};

export default SellerItem;
