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
  <img src="https://github.com/React-Study-Gangseo/PreferYoun/assets/38209666/859e8c7d-e9b7-4ea7-9592-f43e6d28d263" width="700" />
  1. 모바일 전용 Bottom Navigation 및 Header 적용 전체적인 레이아웃 변경
  2. 검색 창 변경
- Router 버전 업에 의한 Router 코드 변경
  <img src="https://github.com/React-Study-Gangseo/PreferYoun/assets/38209666/f2e445dc-5a26-4c1b-b464-d03fd6ff2c1c" width="700"/>
- 모달의 개선 및 Redux 관리의 개선
  1. Tag 변경 (Dialog 태그 사용)
  2. 확인 모달 추가 (ModalSetting.ts 파일을 사용해 모달의 전체적인 내용 관리)
  3. 사용자 선택을 Redux로 관리해 선택에 따른 동작 구현
  4. 
## 시연 영상

### 공통

#### 회원가입
<img src="https://github.com/React-Study-Gangseo/PreferYoun/assets/38209666/57abae16-dd61-4f8f-9269-10c607c9b265" width="700"/></br>
- 판매자와 구매자로 나누어 회원가입이 가능하며 각 입력창에 메세지 출력 및 아이디 검증버튼, 비밀번호 확인 기능이 있습니다. 

#### 로그인
<img src="https://github.com/React-Study-Gangseo/PreferYoun/assets/38209666/8cee8a41-9e9b-481f-a3ee-ac26634e3806" width="700"/></br>
- 판매자와 구매자로 나누어 로그인이 가능하며 로그인 실패 및 유형 실패 시 메세지가 출력됩니다. 

#### 로그아웃
<img src="https://github.com/React-Study-Gangseo/PreferYoun/assets/38209666/ee5b374f-c712-4d01-ad6b-478e653cf3a4" width="700" /></br>
- 판매자는 마이페이지에서 구매자는 영상과 같이 로그아웃이 가능합니다. 

#### 홈 화면
<img src="https://github.com/React-Study-Gangseo/PreferYoun/assets/38209666/fc62cd63-ad78-47d8-953b-d96e9afa7e11" width="700" /></br>
- 무한 스크롤을 사용해 상품을 보여주며 탑 버튼으로 언제든지 맨 위로 올라갈 수 있습니다. 

#### 상세페이지
<img src="https://github.com/React-Study-Gangseo/PreferYoun/assets/38209666/d326ebf8-33aa-4833-90db-7aa379643c14" width="700" /></br>
- 상품에 관한 상세 정보 페이지로 장바구니및 바로 구매가 가능하며 수량 선택이 가능합니다.

#### 검색
<img src="https://github.com/React-Study-Gangseo/PreferYoun/assets/38209666/491d9e29-fb33-483d-987c-92af7ff171f6" width="700" /></br>
- 상품 검색이 가능하며 엔터및 돋보기 아이콘 클릭 시 해당 이름의 아이템이 보여집니다.

### 구매자

#### 장바구니
<img src="https://github.com/React-Study-Gangseo/PreferYoun/assets/38209666/aa220066-ae78-4175-8e95-526d6a8a54c2" width="700" /></br>
- 장바구니 아이템 전체 및 개별 삭제 또는 주문하기가 가능하며 check-box를 사용해 원하는 상품만 주문하기가 가능합니다. 

#### 주문페이지
<img src="https://github.com/React-Study-Gangseo/PreferYoun/assets/38209666/363345e7-b333-475f-8cc8-9473d3773cc7" width="700" /></br>
- 다음 주소 API를 사용해 주소 검색이 가능하며 원하는 결제 방식을 선택할 수 있습니다.

#### 마이페이지
<img src="https://github.com/React-Study-Gangseo/PreferYoun/assets/38209666/27b4a952-1fad-4014-b1c3-8819209dad3f" width="700" /></br>
- 내가 주문한 목록과 해당 아이템을 장바구니에 넣거나 상세보기가 가능하며 로그아웃이 가능합니다.

### 판매자
#### 판매자 센터
<img src="https://github.com/React-Study-Gangseo/PreferYoun/assets/38209666/4c3705d1-7394-49d2-9461-b36d3b87f8d0" width="700"/></br>
- 판매자 로그인 시 이용 가능한 서비스이며, 판매 상품 등록 및 수정, 삭제와 관련된 기능을 제공합니다.

## 폴더 구조

```
PreferYoun
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  ├─ robots.txt
│  └─ _redirects
├─ README.md
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
│  │  │  ├─ Modal
│  │  │  │  ├─ ConfirmModal
│  │  │  │  │  ├─ ConfirmModal.tsx
│  │  │  │  │  └─ ModalSetting.ts
│  │  │  │  ├─ GlobalModal.tsx
│  │  │  │  ├─ MobileModal
│  │  │  │  │  ├─ MobileCartModal.tsx
│  │  │  │  │  ├─ MobileModal.Style.ts
│  │  │  │  │  ├─ MobileModal.tsx
│  │  │  │  │  └─ MoblieCartModal.Style.ts
│  │  │  │  └─ SearchAddress
│  │  │  │     ├─ SearchAddress.Style.ts
│  │  │  │     └─ SearchAddress.tsx
│  │  │  ├─ ProductSortList
│  │  │  │  ├─ ProductSortList.Style.ts
│  │  │  │  └─ ProductSortList.tsx
│  │  │  └─ TextField
│  │  │     ├─ AuthInput.tsx
│  │  │     └─ Rules.ts
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
│  │  │  ├─ ProductItem
│  │  │  │  ├─ ProductItem.styles.ts
│  │  │  │  └─ ProductItem.tsx
│  │  │  └─ SellerItem
│  │  │     ├─ SellerItem.Style.ts
│  │  │     └─ SellerItem.tsx
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
│  │  ├─ SellerCenter
│  │  │  ├─ SellerCenterPage.Style.ts
│  │  │  └─ SellerCenterPage.tsx
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
│  │  ├─ useScrollRestore.ts
│  │  └─ Valid.ts
│  ├─ GlobalStyle
│  │  ├─ GlobalStyle.tsx
│  │  └─ Theme.ts
│  ├─ index.tsx
│  ├─ Page
│  │  ├─ 404Page
│  │  │  ├─ ErrorPage.Style.ts
│  │  │  └─ ErrorPage.tsx
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

```
