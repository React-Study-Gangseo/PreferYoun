import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../Page/HomePage/HomePage";
import SellerCenterPage from "../Page/SellerCenterPage/SellerCenterPage";
import UploadPage from "../Page/UploadPage/UploadPage";
import DetailPage from "../Page/DetailPage/DetailPage";
import OrderPage from "../Page/OrderPage/OrderPage";
import CartPage from "../Page/CartPage/CartPage";
import MyPage from "../Page/MyPage/MyPage";
import GlobalModal from "component/common/Modal/GlobalModal";
import ScrollToTop from "CustomHook/ScrollTop";
import Header from "component/common/Header/Header";
import MobileHeader from "component/common/Header/MobileHeader";
import Footer from "component/common/Footer/Footer";
import { Mobile, PC } from "../component/MediaQuery/MediaQuery";
import Navigation from "component/common/MobileNavigation/Navigation";
import LoginPage from "Page/AuthPage/LoginPage";
import JoinPage from "Page/AuthPage/JoinPage";
import SearchPage from "Page/SearchPage/SearchPage";
export interface RouterProps {}

const Routers: React.FC<RouterProps> = () => {
  return (
    <>
      <>
        <PC>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/join" element={<JoinPage />} />
              <Route
                path="*"
                element={
                  <>
                    <Header />
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route
                        path="/seller/center"
                        element={<SellerCenterPage />}
                      />
                      <Route
                        path="/seller/center/upload"
                        element={<UploadPage />}
                      />
                      <Route path="/detailProduct/:product_name">
                        <Route index element={<DetailPage />} />
                      </Route>
                      <Route path="/orderpage" element={<OrderPage />} />
                      <Route path="/cart" element={<CartPage />} />
                      <Route path="/mypage" element={<MyPage />} />
                    </Routes>
                    <Footer />
                  </>
                }
              />
            </Routes>
            <GlobalModal />
          </Router>
        </PC>
      </>
      <>
        <Mobile>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/join" element={<JoinPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route
                path="*"
                element={
                  <>
                    <MobileHeader />
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route
                        path="/seller/center"
                        element={<SellerCenterPage />}
                      />
                      <Route
                        path="/seller/center/upload"
                        element={<UploadPage />}
                      />
                      <Route path="/detailProduct/:product_name">
                        <Route index element={<DetailPage />} />
                      </Route>
                      <Route path="/orderpage" element={<OrderPage />} />
                      <Route path="/cart" element={<CartPage />} />
                      <Route path="/mypage" element={<MyPage />} />
                    </Routes>
                    <Footer />
                    <Navigation />
                  </>
                }
              />
            </Routes>
            <GlobalModal />
          </Router>
        </Mobile>
      </>
    </>
  );
};

export default Routers;
