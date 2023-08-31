import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/Logo-hodu.png";

import {
  HeaderSection,
  Wrapper,
  MainSection,
  AsideSection,
  SellerProduct,
  MainContent,
  ProductInfo,
  OrderList,
} from "./SellerCenterPage.Style";
import Button from "../common/Button/Button";
import { useNavigate, Link } from "react-router-dom";
import { DeleteProduct, GetSellerProduct } from "API/ProductAPI";
import { Products } from "types/type";

const SellerCenterPage: React.FC = () => {
  const navigate = useNavigate();
  const [sellerProducts, setSellerProducts] = useState<Products[]>([]);
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const token = userInfo ? userInfo.token : null;
  console.log(token);
  const handleOnClick = () => {
    navigate("/seller/center/upload");
  };
  const getSellerProduct = async () => {
    try {
      const res = await GetSellerProduct(token);
      console.log(res.data.results);
      setSellerProducts(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSellerProduct();
  }, []);
  const handleDeleteProduct = async (product_id: number) => {
    try {
      const res = await DeleteProduct(product_id, token);
      console.log(res);
      getSellerProduct();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="a11y-hidden">판매자 센터</h1>
      <Wrapper>
        <HeaderSection>
          <Link to="/seller">
            <img alt="호두 로고 이미지" src={Logo} />
          </Link>
          <h2>판매자 센터</h2>
        </HeaderSection>
        <MainSection>
          <h2>
            대시보드<span>백엔드글로벌</span>
          </h2>
          <Button width="ms" bgColor="active" onClick={handleOnClick}>
            상품 업로드
          </Button>
          <MainContent>
            <AsideSection>
              <ul>
                <li>
                  <Button width="tabMenu" color="black">
                    판매중인 상품
                  </Button>
                </li>
                <li>
                  <Button width="tabMenu" color="black">
                    주문/배송
                  </Button>
                </li>
                <li>
                  <Button width="tabMenu" color="black">
                    문의/리뷰
                  </Button>
                </li>
                <li>
                  <Button width="tabMenu" color="black">
                    통계
                  </Button>
                </li>
                <li>
                  <Button width="tabMenu" color="black">
                    스토어 설정
                  </Button>
                </li>
              </ul>
            </AsideSection>
            <SellerProduct>
              <OrderList>
                <thead>
                  <tr>
                    <th>상품정보</th>
                    <th>판매가격</th>
                    <th>수정</th>
                    <th>삭제</th>
                  </tr>
                </thead>
                <tbody>
                  {sellerProducts.map((product, index) => (
                    <tr key={index}>
                      <td>
                        <ProductInfo>
                          <img src={product.image} alt="상품이미지" />
                          <h3>{product.product_name}</h3>
                          <span>재고 : {product.stock}개</span>
                        </ProductInfo>
                      </td>
                      <td>{product.price}원</td>
                      <td>
                        <Button width="s" bgColor="active">
                          수정
                        </Button>
                      </td>
                      <td>
                        <Button
                          width="s"
                          bgColor="tabActive"
                          color="black"
                          border="active"
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
                  ))}
                </tbody>
              </OrderList>
            </SellerProduct>
          </MainContent>
        </MainSection>
      </Wrapper>
    </>
  );
};

export default SellerCenterPage;
