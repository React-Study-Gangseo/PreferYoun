import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../Page/HomePage";
import SellerCenterPage from "../SellerCenter/SellerCenterPage";
import UploadProduct from "component/UploadProduct/UploadProduct";
import DetailPage from "component/DetailPage/DetailPage";
import OrderPage from "component/OrderPage/OrderPage";
import KeepPage from "component/KeepPage/KeepPage";
export interface RouterProps {}

const Routers: React.FC<RouterProps> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seller" element={<HomePage />} />
        <Route path="/buyer" element={<HomePage />} />
        <Route path="/seller/center" element={<SellerCenterPage />} />
        <Route path="/seller/center/upload" element={<UploadProduct />} />
        <Route path="/detailProduct/:product_name">
          <Route index element={<DetailPage />} />
        </Route>
        <Route path="/orderpage" element={<OrderPage />} />
        <Route path="/cart" element={<KeepPage />} />
      </Routes>
    </Router>
  );
};

export default Routers;
