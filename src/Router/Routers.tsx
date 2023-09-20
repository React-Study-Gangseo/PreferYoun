import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../Page/HomePage/HomePage";
import SellerCenterPage from "../component/SellerCenter/SellerCenterPage";
import UploadProduct from "component/UploadProduct/UploadProduct";
import DetailPage from "../Page/DetailPage/DetailPage";
import OrderPage from "../Page/OrderPage/OrderPage";
import CartPage from "../Page/CartPage/CartPage";
import MyPage from "../Page/MyPage/MyPage";
import GlobalModal from "component/common/Modal/GlobalModal";
import ScrollToTop from "CustomHook/ScrollTop";
import Header from "component/common/Header/Header";
import Footer from "component/common/Footer/Footer";
import { Mobile, PC } from "../component/MediaQuery/MediaQuery";
import Navigation from "component/common/MobileNavigation/Navigation";
export interface RouterProps {}

const Routers: React.FC<RouterProps> = () => {
  return (
    <>
      <>
        <PC>
          <Router>
            <Header />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/seller/center" element={<SellerCenterPage />} />
              <Route path="/seller/center/upload" element={<UploadProduct />} />
              <Route path="/detailProduct/:product_name">
                <Route index element={<DetailPage />} />
              </Route>
              <Route path="/orderpage" element={<OrderPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/mypage" element={<MyPage />} />
            </Routes>
            <Footer />
            <GlobalModal />
          </Router>
        </PC>
      </>
      <>
        <Mobile>
          <Router>
            <Header />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/seller/center" element={<SellerCenterPage />} />
              <Route path="/seller/center/upload" element={<UploadProduct />} />
              <Route path="/detailProduct/:product_name">
                <Route index element={<DetailPage />} />
              </Route>
              <Route path="/orderpage" element={<OrderPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/mypage" element={<MyPage />} />
            </Routes>
            <Footer />
            <Navigation />
            <GlobalModal />
          </Router>
        </Mobile>
      </>
    </>
  );
};

export default Routers;
