## 쇼핑몰 제작 개인 프로젝트

#### 배포 사이트 : https://markethodu.netlify.app/
- Id : seller2(판매자) / buyer2(구매자) 
- Password : hodu0910

#### 개발기간
- 23.07.15 ~ 23.09.10 (배포)
#### 리펙토링기간
- 23.09.10 ~ 23.09.30

## Hodu-Market
- 리엑트와 타입스크립트로 제작된 SPA 웹 쇼핑몰 입니다.
- 제주 코딩 베이스 캠프에서 제공하는 REST API를 사용해 기능 구현
- 반응형으로 제작되어 모바일 및 PC에서도 사용 가능합니다.
- 카카오 공유 및 주소 검색 API를 사용해 편의성을 높였습니다.
- react-hook-form 및 Axios, SweetAlert을 사용해 최적화 및 성능을 향상 시켰습니다.

## 서비스 이용 방법

- 구매자/판매자로 서비스를 이용하실 수 있습니다.
- 로그인 하지 않아도 일부 서비스는 이용가능하며 주문 및 마이페이지는 로그인 후 사용 가능합니다.
- 구매자는 장바구니, 상품 주문및 주문 확인이 가능합니다.
- 판매자는 판매자 센터를 통해 상품 등록, 수정및 삭제가 가능합니다.
- 모바일과 PC버전 반응형 웹으로 제작되었으며 모바일에서는 하단 Nav Bar가 존재합니다.

## 🛠 테크 스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">  <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">  <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">  <img src="https://img.shields.io/badge/KakaoAPI-FFCD00?style=for-the-badge&logo=kakao&logoColor=white">  <img src="https://img.shields.io/badge/reacthookform-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white">  <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"></br>
그 외 - REST API (제주코딩베이스캠프 제공)

## 리펙토링

- 반응형 디자인 및 접근성 개선 (모바일 전용 Bottom Navigation, Header 및 컴포넌트의 레이아웃 변경)
- Router 버전 업에 의한 Router 코드 변경
- 모달의 개선 및 Redux 관리의 개선

##폴더 구조

PreferYoun
├─ src
│  ├─ @types
│  │  ├─ custom.d.ts
│  │  ├─ global.d.ts
│  │  └─ styled.d.ts
│  ├─ API
│  │  ├─ api.ts
│  │  ├─ AuthAPI.ts
│  │  ├─ instance.ts
│  │  ├─ KeepAPI.ts
│  │  ├─ OrderAPI.ts
│  │  └─ ProductAPI.ts
│  ├─ App.test.tsx
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ images
│  │  └─ MokImg
│  ├─ component
│  │  ├─ Auth
│  │  │  ├─ Join
│  │  │  │  ├─ BuyerJoin.tsx
│  │  │  │  ├─ Join.Style.ts
│  │  │  │  └─ SellerJoin.tsx
│  │  │  └─ Login
│  │  │     ├─ BuyerLogin
│  │  │     │  └─ BuyerLogin.tsx
│  │  │     ├─ Login.Style.ts
│  │  │     └─ SellerLogin
│  │  │        └─ SellerLogin.tsx
│  │  ├─ CartPage
│  │  │  ├─ KeepPage.Style.ts
│  │  │  └─ KeepPage.tsx
│  │  ├─ common
│  │  │  ├─ Button
│  │  │  │  ├─ AuthButton.tsx
│  │  │  │  ├─ Button.tsx
│  │  │  │  ├─ CountButton.tsx
│  │  │  │  ├─ ShipingButton.tsx
│  │  │  │  └─ TabButton.tsx
│  │  │  ├─ CheckBox
│  │  │  │  └─ CheckBox.tsx
│  │  │  ├─ Footer
│  │  │  │  ├─ Footer.Style.ts
│  │  │  │  └─ Footer.tsx
│  │  │  ├─ Header
│  │  │  │  ├─ Header.Style.ts
│  │  │  │  ├─ Header.tsx
│  │  │  │  └─ MobileHeader.tsx
│  │  │  ├─ MobileNavigation
│  │  │  │  ├─ Navigation.Style.ts
│  │  │  │  └─ Navigation.tsx
│  │  │  └─ Modal
│  │  │     ├─ ConfirmModal
│  │  │     │  ├─ ConfirmModal.tsx
│  │  │     │  └─ ModalSetting.ts
│  │  │     ├─ GlobalModal.tsx
│  │  │     ├─ MobileModal
│  │  │     │  ├─ MobileModal.Style.ts
│  │  │     │  └─ MobileModal.tsx
│  │  │     └─ SearchAddress
│  │  │        ├─ SearchAddress.Style.ts
│  │  │        └─ SearchAddress.tsx
│  │  ├─ DetailPage
│  │  │  ├─ MoreInfo
│  │  │  │  └─ MoreProductInfo.tsx
│  │  │  ├─ ProductDetail.Style.ts
│  │  │  └─ ProductDetail.tsx
│  │  ├─ Item
│  │  │  ├─ CartItem
│  │  │  │  ├─ CartItem.Style.ts
│  │  │  │  └─ CartItem.tsx
│  │  │  ├─ MoblieProductItem
│  │  │  │  ├─ MobileProductItem.tsx
│  │  │  │  └─ MobileProductItme.Style.ts
│  │  │  ├─ OrderedItem
│  │  │  │  ├─ OrderedItem.Style.ts
│  │  │  │  └─ OrderedItem.tsx
│  │  │  └─ ProductItem
│  │  │     ├─ ProductItem.styles.ts
│  │  │     └─ ProductItem.tsx
│  │  ├─ Layout
│  │  │  └─ Layout.tsx
│  │  ├─ Main
│  │  │  ├─ Banner
│  │  │  │  ├─ Banner.Style.ts
│  │  │  │  └─ Banner.tsx
│  │  │  ├─ Main.Style.ts
│  │  │  └─ Main.tsx
│  │  ├─ MediaQuery
│  │  │  └─ MediaQuery.tsx
│  │  ├─ MyPage
│  │  │  ├─ OrderedItem
│  │  │  │  └─ OrderedItem.tsx
│  │  │  └─ OrderList
│  │  │     ├─ OrderList.Style.ts
│  │  │     └─ OrderList.tsx
│  │  ├─ OrderPage
│  │  │  ├─ OrderPage.Style.ts
│  │  │  └─ OrderPage.tsx
│  │  ├─ ProductDetail
│  │  │  └─ ProductDetail.tsx
│  │  ├─ SellerCenter
│  │  │  ├─ SellerCenterPage.Style.ts
│  │  │  ├─ SellerCenterPage.tsx
│  │  │  └─ SellerItem
│  │  │     └─ SellerItem.tsx
│  │  └─ UploadProduct
│  │     ├─ UploadProduct.Style.ts
│  │     ├─ UploadProduct.tsx
│  │     └─ Warning
│  │        └─ Warning.tsx
│  ├─ CustomHook
│  │  ├─ InfiniteScroll.tsx
│  │  ├─ KakaoShare.ts
│  │  ├─ ScrollTop.ts
│  │  ├─ test.ts
│  │  └─ useScrollRestore.ts
│  ├─ GlobalStyle
│  │  ├─ GlobalStyle.tsx
│  │  └─ Theme.ts
│  ├─ index.tsx
│  ├─ Page
│  │  ├─ AuthPage
│  │  │  ├─ JoinPage.tsx
│  │  │  └─ LoginPage.tsx
│  │  ├─ CartPage
│  │  │  └─ CartPage.tsx
│  │  ├─ DetailPage
│  │  │  └─ DetailPage.tsx
│  │  ├─ HomePage
│  │  │  └─ HomePage.tsx
│  │  ├─ MyPage
│  │  │  └─ MyPage.tsx
│  │  ├─ OrderPage
│  │  │  └─ OrderPage.tsx
│  │  ├─ SearchPage
│  │  │  ├─ SearchPage.Style.ts
│  │  │  └─ SearchPage.tsx
│  │  ├─ SellerCenterPage
│  │  │  └─ SellerCenterPage.tsx
│  │  └─ UploadPage
│  │     └─ UploadPage.tsx
│  ├─ redux
│  │  ├─ Address.ts
│  │  ├─ Auth.ts
│  │  ├─ CartOrder.ts
│  │  ├─ Modal.ts
│  │  ├─ Search.ts
│  │  ├─ store.ts
│  │  └─ TotalPrice.ts
│  ├─ Router
│  │  └─ Routers.tsx
│  ├─ setupTests.tsx
│  └─ types
│     └─ type.ts
├─ tsconfig.json
└─ yarn.lock
