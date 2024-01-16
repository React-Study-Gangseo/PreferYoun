import React, { useEffect, useState } from "react";
import {
  MainSection,
  AsideSection,
  SellerProduct,
  MainContent,
  OrderList,
  // TabBtn,
  // UploadBtn,
} from "./SellerCenterPage.Style";
import { useNavigate } from "react-router-dom";
import { GetSellerProduct } from "API/ProductAPI";
import { Products } from "types/type";
import SellerItem from "./SellerItem/SellerItem";
import Button from "../../component/common/Button/Button";
import TabButton from "component/common/Button/TabButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const SellerCenterPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [sellerProducts, setSellerProducts] = useState<Products[]>([]);
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };
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

  const tabLabels = [
    `판매중인 상품 (${sellerProducts.length})`,
    "주문/배송",
    "문의/리뷰",
    "통계",
    "스토어 설정",
  ];
  return (
    <>
      <h1 className="a11y-hidden">판매자 센터</h1>
      <MainSection>
        <h2>
          대시보드<span>백엔드글로벌</span>
        </h2>
        <Button
          size="ms"
          color="primary"
          variant="contained"
          onClick={handleOnClick}
          startIcon={<AddCircleOutlineIcon style={{ fontSize: 30 }} />}
          fontSize="20px"
        >
          상품 업로드
        </Button>
        <MainContent>
          <AsideSection>
            <TabButton
              value={activeTab}
              onChange={handleTabChange}
              labels={tabLabels}
              orientation="vertical"
            />
          </AsideSection>
          <SellerProduct>
            {activeTab === 0 && (
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
            {activeTab === 1 && (
              <SellerProduct>여기에 주문 배송 내용을 넣으세요.</SellerProduct>
            )}
            {activeTab === 2 && (
              <SellerProduct>여기에 Q/A 내용을 넣으세요.</SellerProduct>
            )}
            {activeTab === 3 && (
              <SellerProduct>여기에 통계 내용을 넣으세요.</SellerProduct>
            )}
            {activeTab === 4 && (
              <SellerProduct>여기에 스토어 설정 내용을 넣으세요.</SellerProduct>
            )}
          </SellerProduct>
        </MainContent>
      </MainSection>
    </>
  );
};

export default SellerCenterPage;
