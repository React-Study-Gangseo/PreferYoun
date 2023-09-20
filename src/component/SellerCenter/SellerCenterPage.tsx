import React, { useEffect, useState } from "react";
import Header from "component/common/Header/Header";
import {
  Wrapper,
  MainSection,
  AsideSection,
  SellerProduct,
  MainContent,
  OrderList,
  TabBtn,
  UploadBtn,
} from "./SellerCenterPage.Style";
import { useNavigate } from "react-router-dom";
import { GetSellerProduct } from "API/ProductAPI";
import { Products } from "types/type";
import SellerItem from "./SellerItem/SellerItem";

const SellerCenterPage: React.FC = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("ProductsOnSale");
  const [sellerProducts, setSellerProducts] = useState<Products[]>([]);

  const handleOnClick = () => {
    navigate("/seller/center/upload");
  };
  const getSellerProduct = async () => {
    try {
      const res = await GetSellerProduct();
      setSellerProducts(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSellerProduct();
  }, []);

  function handleClick(e: any) {
    setIsActive(e.target.value);
  }
  return (
    <>
      <h1 className="a11y-hidden">판매자 센터</h1>
      <Wrapper>
        <MainSection>
          <h2>
            대시보드<span>백엔드글로벌</span>
          </h2>
          <UploadBtn width="ms" bgColor="active" onClick={handleOnClick}>
            상품 업로드
          </UploadBtn>
          <MainContent>
            <AsideSection>
              <ul>
                <li key={1}>
                  <TabBtn
                    width="tabMenu"
                    color="black"
                    onClick={(e) => handleClick(e)}
                    value="ProductsOnSale"
                    className={isActive === "ProductsOnSale" ? "active" : ""}
                  >
                    {`판매중인 상품(${sellerProducts.length})`}
                  </TabBtn>
                </li>
                <li key={2}>
                  <TabBtn
                    width="tabMenu"
                    color="black"
                    onClick={(e) => handleClick(e)}
                    value="Order"
                    className={isActive === "Order" ? "active" : ""}
                  >
                    주문/배송
                  </TabBtn>
                </li>
                <li key={3}>
                  <TabBtn
                    width="tabMenu"
                    color="black"
                    onClick={(e) => handleClick(e)}
                    value="QA"
                    className={isActive === "QA" ? "active" : ""}
                  >
                    문의/리뷰
                  </TabBtn>
                </li>
                <li key={4}>
                  <TabBtn
                    width="tabMenu"
                    color="black"
                    onClick={(e) => handleClick(e)}
                    value="Statistics"
                    className={isActive === "Statistics" ? "active" : ""}
                  >
                    통계
                  </TabBtn>
                </li>
                <li key={5}>
                  <TabBtn
                    width="tabMenu"
                    color="black"
                    onClick={(e) => handleClick(e)}
                    value="SetStore"
                    className={isActive === "SetStore" ? "active" : ""}
                  >
                    스토어 설정
                  </TabBtn>
                </li>
              </ul>
            </AsideSection>
            <SellerProduct>
              {isActive === "ProductsOnSale" && (
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
                      <SellerItem
                        key={product.product_id}
                        product={product}
                        index={index}
                        getSellerProduct={getSellerProduct}
                      />
                    ))}
                  </tbody>
                </OrderList>
              )}
              {isActive === "Order" && (
                <SellerProduct>여기에 주문 배송 내용을 넣으세요.</SellerProduct>
              )}
              {isActive === "QA" && (
                <SellerProduct>여기에 Q/A 내용을 넣으세요.</SellerProduct>
              )}
              {isActive === "Statistics" && (
                <SellerProduct>여기에 통계 내용을 넣으세요.</SellerProduct>
              )}
              {isActive === "SetStore" && (
                <SellerProduct>
                  여기에 스토어 설정 내용을 넣으세요.
                </SellerProduct>
              )}
            </SellerProduct>
          </MainContent>
        </MainSection>
      </Wrapper>
    </>
  );
};

export default SellerCenterPage;
