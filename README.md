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

```
PreferYoun
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ main
│  │     │  └─ Refator
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ develop
│  │           ├─ HEAD
│  │           ├─ main
│  │           └─ Refator
│  ├─ objects
│  │  ├─ 00
│  │  │  ├─ 7eeafff51df802407cc6d038b641cf4a78aede
│  │  │  ├─ adde6145c48a44727c6f8d1b2b4601fcaa8d07
│  │  │  └─ f3d59fb14648756c03d7e4469f0bd84eb73252
│  │  ├─ 01
│  │  │  ├─ 153f8b8cd4ce8fd5ce89e66c8680827435c921
│  │  │  └─ 9db75f8041ece4bd5496637bb2dc3d3b0c8658
│  │  ├─ 02
│  │  │  ├─ 340cc647351ca6fe8ab51831568c5b22a96319
│  │  │  ├─ 9133e68b4af573776d8569472b875ab437faf2
│  │  │  └─ 9a4f1ed52a681f9664cc3754b9a9a16a4f98ab
│  │  ├─ 03
│  │  │  └─ 46f8a0f527283e1205e5ed8edff3ecfabaa8e0
│  │  ├─ 04
│  │  │  └─ 4e30d3ee14c38fda0d3a0770476bc95da82276
│  │  ├─ 05
│  │  │  └─ c2a62482d539e6cc37548b53efbbad307c132d
│  │  ├─ 07
│  │  │  ├─ 2b8064b8698de8433f39e03abbc2461a3289f2
│  │  │  └─ 6165cbd34910bd100a5af2f8cc392e862812bb
│  │  ├─ 08
│  │  │  └─ 95cdb795d187d188c29cbc01a6ad74a1a6afd0
│  │  ├─ 09
│  │  │  ├─ c6d9845d7750c066a5cd03a81fcd0bc127c85e
│  │  │  └─ d8f7cca2e602b791154ff012a96b9770d6bc83
│  │  ├─ 0b
│  │  │  └─ 066d7314fd38accbde92456e73238c5a395d0f
│  │  ├─ 0c
│  │  │  ├─ 874c86a7679a5093584f587932d624d88d0bfc
│  │  │  └─ d2d8c448f2c64c777f371c2f489916ed83e271
│  │  ├─ 0d
│  │  │  ├─ 375ca47c444bf7664d4496d6f863066c89c506
│  │  │  └─ fe2eab66ea34925d5540fe197c59f9ac413110
│  │  ├─ 0e
│  │  │  ├─ 1fb36a3019945043068da0b89f67c6adc79883
│  │  │  ├─ 72b37008fd3681dc5ee056825625ea628b85c0
│  │  │  ├─ acef7c3341e38fb513dd72922500ca2f0463fc
│  │  │  └─ ebf0c027a6a40bb73447d37bf7aea86bff19a7
│  │  ├─ 0f
│  │  │  └─ 9102293e7eac6fb28844b3dea3dcd980178b63
│  │  ├─ 11
│  │  │  └─ 8a78956f71398a5a2b0155ff414c8c5c612da1
│  │  ├─ 13
│  │  │  ├─ cd6768868d3047144b74305bd728ac2b3e155b
│  │  │  └─ dc6bd6f29305f041a13beb4e1a99d187dafcda
│  │  ├─ 14
│  │  │  ├─ 22ead2c72573a9fca9e9f5a52e406e42de1e8d
│  │  │  └─ d15e52efd2b0056821727b0052637e772732bc
│  │  ├─ 15
│  │  │  ├─ 177a8eb813cb20f4300915ad2c3d8dd20b22f3
│  │  │  ├─ 488821f9a66601c7eae2d545a6d4d2e7faaa62
│  │  │  └─ f4227b9bb3cf72a50ff9f205816f810dd27f79
│  │  ├─ 16
│  │  │  └─ 3e4215bb9dcfc7208291e325d1cb55095fc6cd
│  │  ├─ 17
│  │  │  └─ 96c8ee40becb8d65674292ad279728f8548686
│  │  ├─ 18
│  │  │  ├─ 0c9f5cc0253c25a55b77019e0ae3c29684ed70
│  │  │  └─ 3f127c7f878d095ba3722ff2a2688675e561fe
│  │  ├─ 19
│  │  │  ├─ 1a76b1394c3f0955f7a47b0cfa67c481de9ec7
│  │  │  ├─ d5b70a4c0875e61728b15db971f686bf71716c
│  │  │  └─ f22f040d7b9e0b6fd3b55f52dfd2fc581b12b4
│  │  ├─ 1a
│  │  │  └─ 7c894159d8d2a2eb5b1908e7045c216e6518e8
│  │  ├─ 1b
│  │  │  └─ 6b3ff13c4a2dc384b73f1cec3859ee43b97a75
│  │  ├─ 1d
│  │  │  ├─ 3e33e4535b8b44bf69638d59181cbc705db27d
│  │  │  └─ 5138eafc3310ba9d52a458963907cd1a80f113
│  │  ├─ 20
│  │  │  ├─ 39e1a054e7aee3b58983116797a8ab0fbb7ffa
│  │  │  ├─ c046897d9e8f43a350f777058194cb82cd18f6
│  │  │  └─ e4b56e242c43c237999213083bb74848d6e062
│  │  ├─ 21
│  │  │  ├─ 31ff723951fe43b4c5fa4d023984f9a7e41376
│  │  │  └─ 4930240759e109286f82ce5a87ef571772d227
│  │  ├─ 23
│  │  │  ├─ a1019c5519b19c3754f2d89e7a858aca36f6b5
│  │  │  ├─ a2c7de34323c44d63559549c445497a6a719a5
│  │  │  └─ b507c2ccf52d52eeb777023ef90d2003e6059f
│  │  ├─ 24
│  │  │  ├─ 2e05598b641fe7101fe8badca60b013dd66524
│  │  │  └─ e387391e6cff32a3d4814e0fe33e5c2162cbdc
│  │  ├─ 25
│  │  │  └─ 711434c47898bf57409ededac3f36c2adb06fe
│  │  ├─ 26
│  │  │  ├─ 3ff18b8fe0f712c8dc2a22318e9003cf253b0b
│  │  │  └─ 871c33a84bad25d107b6f4c3beb57cc0a1148b
│  │  ├─ 27
│  │  │  ├─ 032c0d6aedf8f5dc8ee32dbe810f5f87c971f0
│  │  │  ├─ 29c88671dcced8c417f2bc789b2a2bc6d39473
│  │  │  ├─ 2ca9950830f8c5fb2f7ab87c803bde5cf9f7b3
│  │  │  ├─ a88bb88178dd1fe162d056417a3079fc2be404
│  │  │  ├─ ad6dd83295275642e7003557242d7bed79c6a4
│  │  │  └─ d5b529ff00e9b5f948af9b8f5e3eaff5eab4ee
│  │  ├─ 28
│  │  │  └─ 38c653d638fb167667293c9bb4d3a964b670d8
│  │  ├─ 29
│  │  │  └─ 1c670f02c121a06be39e41faf09711dbd7c9e7
│  │  ├─ 2a
│  │  │  └─ 995ec927286cdaca7394d8dbb470e497189eaf
│  │  ├─ 2b
│  │  │  ├─ 26396b74639492f0e48358dc9b92443d96ce42
│  │  │  └─ 452cf3a031a314660c74c07d4ae3f6b4deedef
│  │  ├─ 2c
│  │  │  └─ 418f1dd84a6de6654f712342f2c95a86b3bf65
│  │  ├─ 2d
│  │  │  └─ a989ca4b4da5e9e235f8ae491462d11c673bf9
│  │  ├─ 2e
│  │  │  └─ d9aa2724fd5c9f3402f412376e4911ae257a32
│  │  ├─ 2f
│  │  │  └─ 530551987665455e136abd28827b923ee36b46
│  │  ├─ 30
│  │  │  ├─ 04b2f9594a16f3192c6735d6ba26faf719d9b0
│  │  │  ├─ 59fd262569f95abcf3b73685f7da384d2d8531
│  │  │  ├─ bc85fcaaf00904a8c97a470931f1c3ea08fac3
│  │  │  └─ dd4aec58da2b126256371829a9eef9fc183a6e
│  │  ├─ 32
│  │  │  ├─ 13e8a728200e8ea7dd64f5b45584c950eafb7a
│  │  │  ├─ 1f912fb7aeba5c55e7c4ea71cc3aaf7650f3dc
│  │  │  ├─ 7ee2543062af4103181432fe5532a07576a634
│  │  │  ├─ 89ae6d9a432ee172c43f974b9902089c74b2e0
│  │  │  └─ 9530208038e61b5457b3f33a916408048a87da
│  │  ├─ 33
│  │  │  └─ 780de0c1e253f9f815369d8658ac59f1568529
│  │  ├─ 34
│  │  │  ├─ 14f39580c83b2f89c1b6ee8d13f45d26a95293
│  │  │  ├─ 1e4798d1bddb5c02b398c4af8b496ffa0f4ce9
│  │  │  ├─ 377bcb95532021b2e63d86947b5b47a96dc088
│  │  │  ├─ 930800edb7b988f58968d9a34f1165582548af
│  │  │  ├─ d03b97abd4249ef55bf18207f257f3839c7bf2
│  │  │  └─ da873c211d896e058bc5161aa1d5cd9a8c8c7f
│  │  ├─ 36
│  │  │  ├─ 08e169587b390bc54eef5c9e47fbce7409d2c6
│  │  │  ├─ 7c7b0690af35940c3aef4e30e6dfe3887b0705
│  │  │  └─ fcfe6e43e15cc04deb6857d12a7f785e525fee
│  │  ├─ 37
│  │  │  └─ f68a634836cac38a820a899e0090b2c08c518f
│  │  ├─ 38
│  │  │  ├─ 05457a130a9670cbc3c5c8057d8f3bb22dfd72
│  │  │  ├─ 3494efe181606338d1ddac0830a51b9e0d465a
│  │  │  └─ 9ae6f2f782615970c40d2e10b9821602d10592
│  │  ├─ 39
│  │  │  ├─ 39cee412539cd3f09138494979c22b5a7fee1c
│  │  │  └─ def97e64d1fc35bba8846c05cf433d7653fb59
│  │  ├─ 3b
│  │  │  └─ 0b3acea16bed7c139931b082bb2c630d8a57ee
│  │  ├─ 3c
│  │  │  └─ a8dc6cea5d7376484ee9cc4961f177ff35117b
│  │  ├─ 3d
│  │  │  ├─ 038151dfe112239cef0262c7cbafe5e8a169e4
│  │  │  └─ bca1a6047720b30bfaa73396b1130b696e9227
│  │  ├─ 3e
│  │  │  └─ 11e5d698a8d56b847db4dc8acf3237eecf93d5
│  │  ├─ 3f
│  │  │  └─ ed6113aa5ec1ebbebb2c26e30e31e7da914ca8
│  │  ├─ 40
│  │  │  ├─ 3d0b2c8dd439dc47a430b2a604e9986a440d3d
│  │  │  ├─ 42bf701dc13c7b1d6c684f20b428da42808497
│  │  │  ├─ 7b4439c8422e7df74e34a382d73242e6314daa
│  │  │  ├─ 95edfe945c385e253edf26c62f861b25347dae
│  │  │  ├─ e2327bdfc72f9551b3d0964d8563513f962a37
│  │  │  └─ e7b4b38157c7988a9cb0b496289a7f428508ab
│  │  ├─ 41
│  │  │  └─ ed44d9c9a893f8061136e912d3dcfc33b61248
│  │  ├─ 43
│  │  │  ├─ 5de39bd1d7f33f4b890d71e68b2e500ec577aa
│  │  │  └─ e51d7cbcc34320b18b13d2dc4baef049141f79
│  │  ├─ 44
│  │  │  ├─ b8ef108991b66f991a8823ea60b18a78744ea3
│  │  │  ├─ cc5b12a79b294f644321fc6c71cea6a9ac4f77
│  │  │  ├─ dc475f962a2625f240607382161e99bb0b14b7
│  │  │  └─ fa7598f8239e936d8971b672fae425e99462c6
│  │  ├─ 46
│  │  │  └─ 1aa8b10b2837cbf2c7eddcf27f4ce537313291
│  │  ├─ 47
│  │  │  ├─ 26cbe1da9644bb7b5eb1cc48758b34791d2917
│  │  │  └─ 76d39aea2d41720bafebe54a547d8fd91d4020
│  │  ├─ 49
│  │  │  ├─ 29d59d2a8450be72be80ae0b39dafad1af82e2
│  │  │  └─ 9bd8852fae89d8081558d4a0409899fb17063f
│  │  ├─ 4a
│  │  │  └─ d27c9fa8af0f49dda6486c5265fcb25bbb07c8
│  │  ├─ 4b
│  │  │  └─ 61c3677628c5e3556755e17dbc875cf7ac42ff
│  │  ├─ 4c
│  │  │  ├─ 0c09ea3901885c8b3ea8e081a57a75ca784ef2
│  │  │  ├─ 5299d671cc467450c709b1f0ed749712ed59fa
│  │  │  └─ 97929a012362b120370b06118b0f3d17b43bb9
│  │  ├─ 4d
│  │  │  ├─ 0432501bb6bdf5506912aa99d1c471b0380706
│  │  │  ├─ 2dfbb58d604a9975eeccee0d3b187751c0666c
│  │  │  ├─ 34e20269d14f2e3979526f888c564c6bfa5479
│  │  │  └─ ded9d900d7cb86e1a9895c6bb50a1d446386d9
│  │  ├─ 4f
│  │  │  └─ 6e6e6573c85f50537ba8f90f24dc0ce666c5fb
│  │  ├─ 50
│  │  │  ├─ e738d3492bc29dbd2a95374c416a6fd833fe8a
│  │  │  └─ e7a546513b860268ce26bc1a5ae2fe1ee9d7f5
│  │  ├─ 51
│  │  │  └─ 86daac59c5e054e7b5820fc8eabee412a559d3
│  │  ├─ 52
│  │  │  ├─ e237f8b806a8a284ed8f746b5f31210ca72481
│  │  │  └─ f7eadc959f0632a3998e14aace5b4c3a0fd614
│  │  ├─ 53
│  │  │  ├─ 20de4866ec0712335e60e239f61392389587c6
│  │  │  ├─ 95f1fd416cc3717b9b05f5305075b4f050714e
│  │  │  ├─ a2135a3859fa0a88e0ae3670e1b9938583a14e
│  │  │  └─ fc21c0eea9daff90411ec331779d9a1d96936a
│  │  ├─ 54
│  │  │  ├─ abb02ca77ed7e6fc21d12e47f24b5f41305fa6
│  │  │  ├─ e1a064b46bc10802ff3658a8b59dbd1d70362b
│  │  │  └─ fc27a76f0458fa2582e89731d26f1ba7088044
│  │  ├─ 55
│  │  │  ├─ 0eb59fae7cb6d20610e63d7fdcaeb55f7e4f60
│  │  │  ├─ de0f4c7d0de0d9e2bb63c7630b9202a69e83cd
│  │  │  └─ f1fac5c6068e55b76868066e14dc4af5fae1e3
│  │  ├─ 56
│  │  │  └─ 94f38b2f9d733cb81310bdde11511e8e7d66b1
│  │  ├─ 57
│  │  │  ├─ 80eb7fbc9bca80107102933672eac111f988f7
│  │  │  ├─ 95af80bab7f52a93645fbeb85072d7d93c7580
│  │  │  └─ f9c6a2077000a4b338e10409aa4e91fd3336fd
│  │  ├─ 58
│  │  │  └─ 17de3ea0a066d6059323a21041d6de4459268e
│  │  ├─ 59
│  │  │  ├─ b0124a79f53bf89c24efce0cf29841eb046a84
│  │  │  └─ be3e35c9132c6720319275083ac5610b37109d
│  │  ├─ 5a
│  │  │  └─ 8475c3b51424739e87f5c1ca40d526426b4278
│  │  ├─ 5b
│  │  │  └─ 01b48c934b126bd04283deffe2ff8c07903640
│  │  ├─ 5e
│  │  │  ├─ 7c21bdc57e7086d1666761743c3800877c8747
│  │  │  └─ fb357defa856e00bda643e9d17b9f375706853
│  │  ├─ 60
│  │  │  ├─ 3ad180c83f5eccd3b50a5cba793cf0418902da
│  │  │  ├─ 5790c57aa841182b960414d68b00747715846b
│  │  │  └─ d728fb3c9cc24b66d6d900273e7f0dacda54fd
│  │  ├─ 61
│  │  │  ├─ 6013223010dd49d502071d768b7e85d80c5f33
│  │  │  └─ bfecb702b37dff9b9ed97f31d330a392537cde
│  │  ├─ 62
│  │  │  ├─ 0a83ca4e4c9656af0e9f510203cdc1b94ac369
│  │  │  ├─ 85ea9c9afd0fa12f9acbbaca369bf91d0b9404
│  │  │  └─ fc271a93413d0f0483d9330d1375a50d628949
│  │  ├─ 64
│  │  │  ├─ 36bfdd7c09decd2f73ae25f229217a2d98b3d8
│  │  │  ├─ a37472bba3aa5167b44fa665572ef32908176d
│  │  │  └─ fbc17eefdaca7631c898a56bc47476cfcf15b7
│  │  ├─ 65
│  │  │  ├─ 615e959ff7cb9e470fc42b8a91ca077e42c623
│  │  │  └─ a2ee2640142f9bed9b48997d7d9eb93ad5bb60
│  │  ├─ 66
│  │  │  ├─ 0b6a5537b44b5be8f02d09663dab73151c5d82
│  │  │  ├─ 8f0a7439cff3c65caa02f598742b87a50324dd
│  │  │  ├─ bc3d25159920a0f539de1b1ec570bf9b377d7e
│  │  │  ├─ c4c5ceaf5e803dd6f8dc604b5bb796de3ca12d
│  │  │  └─ e8fa5281407cd6d0c6e847531a710194531f4b
│  │  ├─ 67
│  │  │  ├─ 6891c2f24b4905a24833e666d19df1af327514
│  │  │  ├─ 8d923f0b00b272b42fe3ec1ab90b7b4ee12387
│  │  │  └─ aa78e5ea864330e41c416cdb2fbe8b455e710b
│  │  ├─ 68
│  │  │  ├─ 8bbe67081c38579b36ee0e91029d9a6c9a461c
│  │  │  ├─ 9c8ef8005e2601d86b2d4fe042d7306df74fcf
│  │  │  ├─ e73c1c7902be2c0a7dceffe952a9eb1e42579b
│  │  │  └─ eaed6d00345b0cb95afa38c4e87fe90e897505
│  │  ├─ 69
│  │  │  └─ 69f73645833c33dd842629560d11235464fc5f
│  │  ├─ 6a
│  │  │  ├─ 057750b9bd517839ed97509014676e6f2d250f
│  │  │  └─ 1548ea6d24bfea485700712f46e0c60ad19c6c
│  │  ├─ 6b
│  │  │  ├─ 0899a808d42d2404efcc19a0285d31ecaccca4
│  │  │  └─ b56d4f42e05da0237e4f5eae3c83539b0154e7
│  │  ├─ 6c
│  │  │  ├─ 70a6698ffdcb7fe063e5ba95aaa2e6eb8da53a
│  │  │  └─ 772355d9cadfc25d59a2b7939526f139052a69
│  │  ├─ 6d
│  │  │  └─ 5617c1f699374b3986b5ab600e38595e39206d
│  │  ├─ 6e
│  │  │  └─ 6237aaa5b9abd5490b974c4738342a74b84e18
│  │  ├─ 6f
│  │  │  ├─ 2d9d73d8624b7b23c805840faa8aee63d655d6
│  │  │  ├─ 5bfba34fbf651873e530912f68b9ce56387d8e
│  │  │  └─ 86861531e0b0af06800085f7fa5748491dc606
│  │  ├─ 71
│  │  │  ├─ 1346d5540c3ed1d4439a46fa4af5b02fecbea7
│  │  │  ├─ 3b486cb3b4e205b98868457f33315256e3151b
│  │  │  └─ c333ac53b4093fcc4fb5105e7710a113ec295b
│  │  ├─ 72
│  │  │  ├─ 4a0ed948821a3f4601a70d0c5059d081b7ed48
│  │  │  └─ 695e9031d65d4d7174bca0d0baec1652ded1f2
│  │  ├─ 73
│  │  │  ├─ 349eb3d8d14d5eba8fdb26183638148a793a2d
│  │  │  └─ ea6f60ab78c21fb483a795d2a6bb7781e61e48
│  │  ├─ 74
│  │  │  └─ adba8594cc0b0f6609270a9aa90ff2c687f2f6
│  │  ├─ 75
│  │  │  └─ ab123cf9dc889455b11bbe4014d9f3a8f42cb2
│  │  ├─ 76
│  │  │  └─ a5853a533f25b58656ca41c1b269e028879667
│  │  ├─ 79
│  │  │  ├─ 030e24f0dc32d2e42d8db0e86b649461b471a5
│  │  │  ├─ 21f1b9313bd2681b7c45034873e8cf86bf3827
│  │  │  ├─ 5b3eb74df8c13af1fadf0f78b1df4325d271e2
│  │  │  └─ 96228602138fc96492c1c2a80e35fcd84b312f
│  │  ├─ 7a
│  │  │  └─ 9056a96f5fb9085cb8bba0a1abe968f8e250f3
│  │  ├─ 7b
│  │  │  ├─ 278b0dba10662d9e7a2e8deba49053310a4d34
│  │  │  ├─ b9927f3f1194ea5a4cf7edbec2fea40589e21a
│  │  │  └─ cdd239e8b9e992c3e9ec3b4628d6f39bf4b18a
│  │  ├─ 7d
│  │  │  ├─ 49ee22f429298a0564c6982b0939f7b21f4742
│  │  │  └─ 7f0975d08043e4259f06bf1e7019ee2bd7af4e
│  │  ├─ 7e
│  │  │  ├─ 01e1a82b200a68dbec3a3c442f867f3ea3aa37
│  │  │  ├─ 4b6ed55c6cd2be81dd47a66a4d93630ef67829
│  │  │  └─ d741bf46d50d04066ba407e584717a70c143a2
│  │  ├─ 80
│  │  │  └─ d3a972ea347b855a560bb9b75569d006150185
│  │  ├─ 82
│  │  │  ├─ 0557b739dcd10f3841f44eeb4b99aadb331300
│  │  │  ├─ 0f23d00534a8ef8c159af26c06d283dd503603
│  │  │  ├─ dc3d2598bed2936379ffffd1aef21a0c06c8d9
│  │  │  ├─ ebd89281bd960506c7c060217cc934d810995c
│  │  │  └─ fac5c144fdc346a4d900046119593db11da83c
│  │  ├─ 83
│  │  │  ├─ 20437cb518d27ef67ad0b2cb10a9a19a6cf952
│  │  │  ├─ 31f9ce951dd198b28747b10e9f3a586a89c75b
│  │  │  ├─ 682d99710b55d587a04382ae58a39295b2cb8b
│  │  │  ├─ 879141ad3d6bd408e653c4efdef47e3debd5bb
│  │  │  └─ ce107a1b20e82d00f63246d692806575701433
│  │  ├─ 84
│  │  │  ├─ 2715cb7816efe50e481c50815c2b42c70fc7ca
│  │  │  ├─ 3d388857fa372e56e68094f4ae3d714eaf9b95
│  │  │  ├─ 79296e44daf381f32e924ebde665e086f8546b
│  │  │  └─ f36d62fcc6a02439410c052ee04e4c9ce378bb
│  │  ├─ 87
│  │  │  ├─ 12c4869586da30e247b731074a74a1f4242dc1
│  │  │  ├─ b9c53f7dc7e8da1cc607eb5feb9cf221eb5bee
│  │  │  └─ dbee9312507e5edb811ff2d2cd0b36a5f212d3
│  │  ├─ 88
│  │  │  └─ 31d565d3005c19335a271a18bc6f391826df29
│  │  ├─ 8a
│  │  │  ├─ 37243c93682e37fa3efca6292aab74c85eee33
│  │  │  ├─ 9bf94165f917346910764589ef35a09a57431d
│  │  │  └─ d9218b5fb547095ac30308389574a25eac56c3
│  │  ├─ 8b
│  │  │  ├─ 3ec52b1c860f0b6d12767687b18bc85d5f455a
│  │  │  ├─ 4bea4e4b408fd7213653fff3b145df08ab7279
│  │  │  ├─ 62f54c9150dcb7c90b5355a7c503dfb3f37703
│  │  │  ├─ 77ae660d0570fccf2ba22d1d36cd432e4cf447
│  │  │  └─ df554e2a896795afe921b41737b709781ff999
│  │  ├─ 8c
│  │  │  ├─ 5d0d983bf7b75607c06e29ced05aaa6cdd5e9e
│  │  │  └─ e97979fd1a958faacdf6f44ec4001ea8f17fa2
│  │  ├─ 8d
│  │  │  └─ ecedd5b2ee071f0fca25cef5cd758209f6113c
│  │  ├─ 8e
│  │  │  ├─ 174a429ff6aba96cdb12a1e647193fc23e48c4
│  │  │  └─ 8d6019442e96e634f5af8dcdc8945585e3fed0
│  │  ├─ 8f
│  │  │  ├─ 01ba94c677b23ddb0c20ebfc48c548d3d478bb
│  │  │  ├─ 02ca81d25365f13f5cf4002ae0229fd062afe3
│  │  │  ├─ 68e5f93513b79d223a4a13f07d429cae661120
│  │  │  ├─ 75b899848152deb4f0fe6b6c756e8ed413fef0
│  │  │  ├─ a09c1051bdc89b3466b7950303f05a79214980
│  │  │  ├─ c99ac9754270dd67582606426e8366500d28fd
│  │  │  └─ d755aa0e0946398f0c7dbbfd288c3b9082cef7
│  │  ├─ 90
│  │  │  └─ 0261ae0a0d7debc22facdeab4ab555d9daf643
│  │  ├─ 91
│  │  │  ├─ 3b995bb30dc3bd09b6e531c51a380122a7d925
│  │  │  ├─ 7e3c9219d2aa108f96d0dd561095250fd13cfc
│  │  │  ├─ cac9b589f1b384296875b4bfd71e0b32c884de
│  │  │  └─ e20e49d810dacc881fe7738ce108d18241b7f1
│  │  ├─ 92
│  │  │  └─ a86f7431b2837f87c602f384745e889971fcd3
│  │  ├─ 93
│  │  │  └─ 340c1b0fb35ec44a6d9f858e6695868b414fc9
│  │  ├─ 94
│  │  │  ├─ 1fc12445049f5edc58ff8c93c2ba2a7d57e668
│  │  │  ├─ 496cef3b53cad1e6f3bc1a2b2da8c68168cb1a
│  │  │  └─ 9684f734bcbf763f10356e024c7d33e5f4a4a4
│  │  ├─ 95
│  │  │  ├─ 2f1caa67a837200a610935cbd51b8383aaf0b9
│  │  │  └─ af98cda6f61acdfb725228a3bced128dd0e589
│  │  ├─ 98
│  │  │  ├─ 52d7b975fcfac3b0847de70ca02896b81e1faa
│  │  │  ├─ ca814432bd510fb38626925e7d81ad300e7318
│  │  │  ├─ d309c4a48aa837d8fe6709f7f0fac689fd034f
│  │  │  └─ fd043252d9dbe59cfa8e9eef515366c1522517
│  │  ├─ 9a
│  │  │  ├─ 00ce66b0cbe01b1178213f5bfeb74dd4b9dd9d
│  │  │  ├─ af30a4020093842490cdf8bd9bee56c8c17e26
│  │  │  └─ c4b91a95d7c0c60a65651addf79ad35b04710c
│  │  ├─ 9b
│  │  │  ├─ 3b7fbd49a139621c1bd43da03754466b3f4799
│  │  │  └─ d31c61f29fd91e674998c52999d5f66c0a48f8
│  │  ├─ 9c
│  │  │  └─ 0e6bc65ca1b57816d83f2324a7861bf743e9c0
│  │  ├─ 9d
│  │  │  ├─ 76f3dfc845e8e9d06eb6cc0b861fd6847a2ca1
│  │  │  └─ e72b0e27c648bd5a10ba26849a5274c26c81b7
│  │  ├─ 9e
│  │  │  └─ 7318e38cc4f469bbfcea6ae3f2fb258f1b3a4d
│  │  ├─ 9f
│  │  │  ├─ 23a5856d30602b2ace7689241d9c7ef5eb53ca
│  │  │  ├─ 2b792a7ca974b417d4aeba6866ddcbd7352960
│  │  │  └─ fe8dc2f031b39779f9981c6fa02580053b5f60
│  │  ├─ a0
│  │  │  ├─ 3c5f64ca94e7df7141385ffdf91c2b3c0350a4
│  │  │  ├─ 8044467c6f6368281c48fe295afac2952241c2
│  │  │  ├─ 877f842a2a48abb7a3524b7df541ef43d4a5c0
│  │  │  ├─ 9a7b68232fc44a5b2a8c20c7fca40231788bb5
│  │  │  └─ bc89c22922ffdb10eec1e728343e82202ad653
│  │  ├─ a1
│  │  │  └─ ad86a673733bc6f7f4fa4cb02258e611b957f2
│  │  ├─ a2
│  │  │  └─ 1173006fdb2a726cea494a84c3506f3c51ce31
│  │  ├─ a3
│  │  │  └─ 6b559f385968b630d686c6ce69b5e780950c5e
│  │  ├─ a4
│  │  │  └─ eeebb5935381cb0433420eb48992c2b0de2b55
│  │  ├─ a5
│  │  │  └─ 1c54325478b7daa7a3c5bbb7c054d8e2026a01
│  │  ├─ a6
│  │  │  ├─ 9d7e265be3c9580613a01c3286008fab3c374b
│  │  │  ├─ fd1e755fb4cad6cfd0169678b6da5865ef5d73
│  │  │  └─ ff38b439646c4f401e1027904346b1f01af66b
│  │  ├─ a7
│  │  │  └─ 65f5dfcae99b9cbd02a6287f034dcb8c9a0285
│  │  ├─ a8
│  │  │  └─ 3892c38da6f00c7ed800a150888c3ddf5eb5ae
│  │  ├─ a9
│  │  │  ├─ 6b95cd6c0ae41cb83b19dfd5869436d992cc70
│  │  │  ├─ abb2d7c28d19cf8f4112c9faef010fce31e31f
│  │  │  ├─ ca30f51b136f02cfd91d71938ebc9b7721905b
│  │  │  └─ f0fdd672620b3cf5b2da8dec74386f78b717cf
│  │  ├─ aa
│  │  │  ├─ 163093d1ef8339bc1502020bb16f22b8376763
│  │  │  ├─ 249e5a07beaf41964b3e5d695ecbd35c6644f6
│  │  │  └─ 6d1c6eba3754047c0d4db0d114be5ebd0b894f
│  │  ├─ ab
│  │  │  ├─ 066e2e66a322774fe98f3d41fbec6fe01208ba
│  │  │  ├─ 455ebc0c8a67f9dbe3b7d5639d73ab25489457
│  │  │  ├─ bf6d863b4ab3d8abb2bf06439b0bcbd434906f
│  │  │  └─ f66d802c56ae01992af187a69de78adf6c92bc
│  │  ├─ ac
│  │  │  ├─ ba84b9809570b60584ca383dc278b865a41257
│  │  │  └─ ee19de8c9fce1a718ce1085bcafdb5510e1a04
│  │  ├─ ad
│  │  │  └─ 21e8f0d5395f3ebbfa7403ce360d24d28bf669
│  │  ├─ ae
│  │  │  ├─ 15ca7689ee73141e966bef7adb147957cd52fa
│  │  │  ├─ 3a8e1657d71a888ab4c1750ba5458fa2105a9d
│  │  │  ├─ 513d97d50132220496126a2b46c03f4a7f0cbf
│  │  │  ├─ 8bc664e3926657d3dfaafce4007613dca4eb0a
│  │  │  ├─ d72a64a10055966e61fe67c66ef38ec809c450
│  │  │  └─ fe452663539bac59e5aa94977236b7162cf089
│  │  ├─ af
│  │  │  ├─ 7539a2e571a36476d5d9f6cb9bd474d939ac5e
│  │  │  └─ 7cc4e28d3c828019e7355293067e06a932eadb
│  │  ├─ b0
│  │  │  └─ 1b80c6e31b048ebff51f5087dab122d78da519
│  │  ├─ b1
│  │  │  ├─ 3ab1e0ee727d94668ba2a56b381993801cb2ca
│  │  │  ├─ 829445bf2190b127ebfeb6a239cdd26433f4ab
│  │  │  ├─ c8ce8a01267bd760422b4105020089f5c36eb0
│  │  │  └─ c9f9cc925764c27cf9279f753d07b7922a34ab
│  │  ├─ b2
│  │  │  └─ d8f24b42b9c444535a714a13a289704c001b46
│  │  ├─ b3
│  │  │  ├─ 02af83043f3123e23b86c0172201e95e81fa51
│  │  │  ├─ 220a2246353b56b3136216da467648c7326f03
│  │  │  ├─ 84e3c8884d85389cdd79fa51a60e1c8d2d3ceb
│  │  │  ├─ 90edaebf1ab1f25d31bcc3bbcdbd475d5365a2
│  │  │  ├─ c70ebcc21c3f27d88c18b1491f17c24dfcae2a
│  │  │  ├─ e96250893933793e163ccce4e5404cbeee078c
│  │  │  └─ f840e19ae66cb36a85be15ead55c9c4586a174
│  │  ├─ b4
│  │  │  └─ a145deb53ccc5af7493940f44371a265bb2b17
│  │  ├─ b5
│  │  │  └─ 920d72ffd079a3f4042a05700b6b68812b597d
│  │  ├─ b6
│  │  │  ├─ a14218fc040388ea09a56342700ee48d1323b8
│  │  │  └─ b04d203e69a41004bb852aaf361d4fa85abd11
│  │  ├─ b7
│  │  │  ├─ 091a3d2f8ada283f1bc198f2b70dc04ea0f2a8
│  │  │  └─ 167851236588a60bc839012997a1e57a74fef7
│  │  ├─ b8
│  │  │  ├─ 1624c4643112b4214ec74612ddf7cc6f3ba5df
│  │  │  ├─ 40d4f4e082c59faf097cd95f832b00499b2250
│  │  │  ├─ 7cb00449efa5b6131f56b7e45cc63eddf37373
│  │  │  ├─ 9d1da317130b0cf1552513d08bbd8e377b467d
│  │  │  └─ fd7822949def5285ff8043ca57c4fa9b715143
│  │  ├─ b9
│  │  │  ├─ 005f1edc500def997f6665edfe98e842d453e1
│  │  │  └─ 9baa1d3f7af5c7aae840429e92eebe11a28615
│  │  ├─ bb
│  │  │  ├─ a70c2de6d2e46b2bd6a3a157ee0b5ea9318e40
│  │  │  └─ e47de304c93928370c93a71459a79fecca944d
│  │  ├─ bc
│  │  │  ├─ 69e9a058273fab1bc27b07de894a07945afe91
│  │  │  └─ fc94ea4ad424da72ccc44bf7e89023f0229ef1
│  │  ├─ bd
│  │  │  ├─ 1de939b376a88d3297f2c8afc5e7f2a065ad27
│  │  │  ├─ 412187422211a9be2850a27b64a45869d35f53
│  │  │  ├─ 599967af290d189484ac334a250c9a4ab859f3
│  │  │  ├─ 7346948d1cbb09e879b81319a68048bb2f888a
│  │  │  ├─ 8955a9abe09be4f320dcf90f3ade26e36c0bd9
│  │  │  └─ bce7695c2aef9a4f89c32518ff85138ea034b1
│  │  ├─ be
│  │  │  ├─ 2c813a90feaf46f6d34ce4f967538c7b8754bf
│  │  │  ├─ 54da4e751b7192bfdbab2807164611939371d3
│  │  │  ├─ 6adbc892eaf47f002cef00095d7dae704036d2
│  │  │  ├─ e34bba7356b7b248992b8349bbb393a907033a
│  │  │  └─ f74bcf78b20e13691113171e7876c86ae5afd9
│  │  ├─ bf
│  │  │  ├─ 95e0413a3f3d06b044e7a5abc07837d0e7cdc0
│  │  │  └─ d71c1a5709735d46cfd45cf719614e05f1134c
│  │  ├─ c0
│  │  │  ├─ 37432163630b09480c88aa367935cc8d58957e
│  │  │  └─ f58599bdda598ff3106e18e211d6c169b26869
│  │  ├─ c1
│  │  │  ├─ 92abbc5ee9c527e1e548baccfd14702b03e4a3
│  │  │  └─ d8262f3429e6d240b30e0fd2fbd9c182f1dbec
│  │  ├─ c2
│  │  │  └─ dab2ecff94c7be6d260282449c52cac716e9ee
│  │  ├─ c3
│  │  │  ├─ 11bae14d136a234209d930d9c7b5ba388c070f
│  │  │  ├─ 4cf7f1d9fda722e76ea23f3e09bd53aa021f42
│  │  │  └─ 6050844c2f79d723bc8a490348fb36105230e1
│  │  ├─ c4
│  │  │  └─ a19101e478b75cc2945c8b3efb77b17c7d69be
│  │  ├─ c5
│  │  │  └─ 5cd62f040bb4c6014d664636d586c19028928e
│  │  ├─ c6
│  │  │  ├─ 169fa685ad6df8d249e9056c0e2ba9b41e68d8
│  │  │  ├─ 17ec842067b5a3df965e62089ff2c35154d0f9
│  │  │  ├─ 4f5c0a36ff0e28c8d6223d52251624d00ea71d
│  │  │  └─ eb54ace1dbb24439e66abf2916f52094357a24
│  │  ├─ c7
│  │  │  ├─ 6f4d46642d0bf3880a20b60fa88fa2ed8db5b4
│  │  │  ├─ 7db754b3e780d79a5c10fe41abe9b83bfe98cc
│  │  │  └─ dced4932a055b9c1bea6b03cfff9b03ac1a070
│  │  ├─ c9
│  │  │  └─ 18407c31f8094ec3ac3953c9f43aa3b9e7d5c0
│  │  ├─ ca
│  │  │  ├─ 349a0629e729d94bca6b2a4bd8a4920582cf22
│  │  │  └─ d88ce150df2931fafdf87764c43170363386c7
│  │  ├─ cb
│  │  │  ├─ 30a12dc1b8d9e89b6477962fdd3fb574ca68ce
│  │  │  ├─ a9fab0549a70d77a8c79c0ab609c9466a7aba5
│  │  │  └─ ffca97d02940911cea1debeced176ed5032635
│  │  ├─ cc
│  │  │  ├─ 3a0a96698584e42cbbb0d020b62829455ee08d
│  │  │  └─ f9a51cfb4b381dc0f26c64a74bf253c92401ef
│  │  ├─ cd
│  │  │  ├─ 3d7a970c5d0b32dd925655c2197ba530a1476d
│  │  │  └─ 83530a1da26abe278068735d5e3eaef421cf9f
│  │  ├─ cf
│  │  │  ├─ 16dc454d5c1b3df146590a3b5e837d0c8c77e3
│  │  │  └─ 7e10a994689f21e9a258075b412603b9cbe506
│  │  ├─ d0
│  │  │  ├─ 2b9cde612d2ac82ee6d4f0cfb2a698b3de4fef
│  │  │  ├─ 4fc064d4b1abd986151da2dda08341e1c77c62
│  │  │  └─ 5d507d502af8a3a19ba0eb7ebad64721569760
│  │  ├─ d1
│  │  │  ├─ 0dcbf0cb6b16485c3c3df61457b302a3e97fd6
│  │  │  └─ b84cc576fb9a1f13c9951f44efc3f8458d4793
│  │  ├─ d2
│  │  │  ├─ 88a116326fb432e993c9994ba0d03e511a03aa
│  │  │  └─ e2b64312d18d82a90fb7d67b386b009981b861
│  │  ├─ d3
│  │  │  ├─ b56d9ccfc1883fde43362f7158d6150ba6e635
│  │  │  ├─ c70207c33ab9f8aff31fa1fbd0b0fe8db6a152
│  │  │  └─ d1509cee91425f01dd4f8938ba14628d34b604
│  │  ├─ d4
│  │  │  ├─ 123edb4d0c470a0d4364823d54b33eb168e695
│  │  │  ├─ 2d911b4e9b97fc154e1ff7ac1764f7eb1ee6e7
│  │  │  ├─ 8c4d412d41ad89f880a35b3f30b2e1adf3ce36
│  │  │  ├─ 8d2c44a82757ddb9536ad075156b1a1e866028
│  │  │  └─ b3eb34d4dafe78356a08c11658922a662bc5b3
│  │  ├─ d5
│  │  │  └─ aea001c0119c02eac8b132219f41cf858b19ea
│  │  ├─ d6
│  │  │  ├─ 372a375070a65ae4d87f5e9f2c07c09e98fe3a
│  │  │  └─ 7bc5b622a8231ec936fb6bc1ca863199ff2ab5
│  │  ├─ d7
│  │  │  ├─ a228352661d7ef50a753cb053d21d9adcb15f8
│  │  │  ├─ d4052fd2ff381d7abd25d5e9587291da8ebe95
│  │  │  └─ f64b5c844420ddc18c627c7fb977fef73d4b12
│  │  ├─ d8
│  │  │  ├─ 50a41803d809240289c840af86a828ea82df69
│  │  │  └─ dd2afdce50561c66784d7974286d920eb774ae
│  │  ├─ d9
│  │  │  ├─ 3924d1988e5970ba518d641b9ca50a6821aad3
│  │  │  ├─ 6540801f61d4de44de286f4bc8a5dd60efab94
│  │  │  └─ 69e6acee5aed6e9c003c9e25dbcba2e20d5a94
│  │  ├─ da
│  │  │  └─ 9ad9d5e630071fab9a3f1f398365b49e100b4e
│  │  ├─ dc
│  │  │  ├─ 16ad3f93d8b568a7eaec31dbaa4fb74ce9ca2e
│  │  │  ├─ d67d1d54a5c284e2b581ad7b01c4505b533d21
│  │  │  └─ e4b038f8d9b5e572b725c7b3f105a28aa26f14
│  │  ├─ dd
│  │  │  └─ 056a8fbc8498f07f9d116e2a50a67c2b9a6f31
│  │  ├─ de
│  │  │  ├─ 7e10aad47e9b7c06acc937dc3c8d75fa7f643a
│  │  │  └─ 7e93ba6f4b48351390aaa4c22936c4ad383ec4
│  │  ├─ e0
│  │  │  ├─ 79b3cadaf23f18545a22bb2a23b21318f72808
│  │  │  └─ e3608d31858314e64aa9d397cf4cb27ac7bd44
│  │  ├─ e1
│  │  │  ├─ 4979204d5b5610d32399e1282224358b178752
│  │  │  ├─ 85aceb24ea8c9818e5b7c7715eccfc7a2b6204
│  │  │  └─ c60b49fbf6e15a1dd0fa0e0ce7ce7a4993284c
│  │  ├─ e2
│  │  │  ├─ 69d4dbed08454c1ff5143c240360714fba9f8f
│  │  │  └─ e87543861f7ed05d2f91468de5b0c804f8d332
│  │  ├─ e3
│  │  │  ├─ 2b070fd67399be03a797d4e06eb5df2c9aae28
│  │  │  └─ b21e2ad067a9928225ed9b0a42de1af026775e
│  │  ├─ e5
│  │  │  └─ dd62feb45413905b9f9d536b9bd6480ead09e4
│  │  ├─ e6
│  │  │  ├─ 33149d4cbf7064119571e89bb7e59ef8f398f1
│  │  │  ├─ 5f55b812c61e40b06715e834f6d58ca111f280
│  │  │  └─ cde1b058bf9da28703eebf14e1df346235c44e
│  │  ├─ e8
│  │  │  ├─ 52a34ad4d8678f4da072dece7b0656d963735a
│  │  │  └─ aee07607f35de3379aace5ae619ad10ca29f88
│  │  ├─ e9
│  │  │  ├─ 6efb541fac01ea0d09ace5912b129ad54ac010
│  │  │  ├─ 97071b793d5e0c9de73d184815d01375e4d6aa
│  │  │  └─ e1f4220c93adecb8e90d31a95457fa518df039
│  │  ├─ ea
│  │  │  ├─ 5ddc6b006050ed0825a5fb85e5f4f8ff3b95bf
│  │  │  ├─ 71ebf5f797072229c9520d6ad7a78776b6ce44
│  │  │  └─ aa13f99e201ba3a4870aa0faed828d1a66c6f5
│  │  ├─ ec
│  │  │  └─ 84345df2ff782fcbfc71ce905475cedb8cf892
│  │  ├─ ed
│  │  │  └─ 98a719c61e97fcd71b7e64f96d1db09ac33ea6
│  │  ├─ ee
│  │  │  ├─ 005e37039044a0e2f104abbd8fd6c9797c7084
│  │  │  ├─ 66cc44d1c878fdd43ee3f8a03ef1c478363408
│  │  │  ├─ 8b8dcc10c891dbfe8108c6fd5593f6380b08dd
│  │  │  └─ fb49f09c385cf0c9a2eac30a0b743690a8f9b2
│  │  ├─ ef
│  │  │  └─ 0d015a2a20faa6d6646d69d85bbf4d87a35100
│  │  ├─ f1
│  │  │  ├─ 48a8b07d8dbb5ef3ec8f8af05bbe5ea1d4b048
│  │  │  ├─ 4d58c475cc13d578d67d9188bc099d8b6932c2
│  │  │  └─ 9757b8cfe3ac290d1eb421691a1c7158703aa5
│  │  ├─ f3
│  │  │  ├─ 7846158876219894b5335dcfdee0dab8c4d1a9
│  │  │  └─ fc432ca0b866fde259ff8ce1808b21c84a6c86
│  │  ├─ f4
│  │  │  └─ 0fed0b2e4bdc39de4ff0e845db7e1af90f5292
│  │  ├─ f5
│  │  │  ├─ 0b344ad93a6ac0ade7f31197065433024e96b4
│  │  │  ├─ 39e7d342481a22d8e7f85dd56509d766acc44e
│  │  │  ├─ a81064ad08a9473dff4de05c45ca81a163e7ac
│  │  │  └─ a9171dc60724898a9052d81f39a60c7cfea4aa
│  │  ├─ f6
│  │  │  └─ e981db83dcc85314d4203530e875d8aff17d86
│  │  ├─ f7
│  │  │  ├─ 0cdbce07cdb96e2ecbda3a927e41b0d78d2605
│  │  │  └─ 1b83279cdc1e911b3ea7911ff9a056b5e5ce6c
│  │  ├─ f8
│  │  │  ├─ 3150a9adb43dc33c58718fa61faed8b777d285
│  │  │  ├─ 455a1d4169a4aca74795151b75ab5750414da6
│  │  │  └─ e3e4e0de353ca2b8f5c69c22d3ebada44497ef
│  │  ├─ f9
│  │  │  ├─ 02db4585c6892fa7e85e5f08523187b0f3b198
│  │  │  ├─ 2abde129830230fcd87f5319a3bb127ca65857
│  │  │  ├─ 44ee10a4297acdf52abb191170f0d22ada1f70
│  │  │  ├─ 6c678766aa80d2707f460fb3ffc1c6f4f3a645
│  │  │  ├─ cd3297c855f7e12c187c83e5771b42a7e576d2
│  │  │  └─ f3e1ebb4531e5ac7d014f99faed26dffd67500
│  │  ├─ fa
│  │  │  └─ a39274d6e940d5361377a44c0d3711e605d273
│  │  ├─ fc
│  │  │  ├─ 4dc7c94c5e33ca20c45b12214e5061c00ad14e
│  │  │  └─ 56344a8bb4dd0a5730f3f84b06d7d5f75c07a4
│  │  ├─ fe
│  │  │  ├─ 45114278a614b66258698f43c4d0abde8b82ba
│  │  │  └─ 8b62c30ca9e28a9d380570caf5a17b58cad868
│  │  ├─ ff
│  │  │  ├─ 3b0fa4530f6530e865e4457208ec006d6f181b
│  │  │  ├─ c558957ee5fac123ac518b6701294c1b377ed6
│  │  │  └─ e6ce2f4ab6009ce7e02f59088cb118854b3902
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-f20d6d8c12f46e874d7e14f81047070ae6b5d269.idx
│  │     ├─ pack-f20d6d8c12f46e874d7e14f81047070ae6b5d269.pack
│  │     └─ pack-f20d6d8c12f46e874d7e14f81047070ae6b5d269.rev
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ main
│     │  └─ Refator
│     ├─ remotes
│     │  └─ origin
│     │     ├─ develop
│     │     ├─ HEAD
│     │     ├─ main
│     │     └─ Refator
│     └─ tags
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
│  │  │  ├─ arrow_top.svg
│  │  │  ├─ check-box.svg
│  │  │  ├─ check-circle.svg
│  │  │  ├─ check-fill-box.svg
│  │  │  ├─ chevron-left.svg
│  │  │  ├─ close-r.svg
│  │  │  ├─ dummy.jpg
│  │  │  ├─ home-icon.svg
│  │  │  ├─ icon-404.svg
│  │  │  ├─ icon-check-off.svg
│  │  │  ├─ icon-check-on.svg
│  │  │  ├─ icon-check.svg
│  │  │  ├─ icon-delete.svg
│  │  │  ├─ icon-down-arrow.svg
│  │  │  ├─ icon-fb.svg
│  │  │  ├─ icon-img.png
│  │  │  ├─ icon-insta.svg
│  │  │  ├─ icon-minus-line.svg
│  │  │  ├─ icon-plus-line.svg
│  │  │  ├─ icon-plus.svg
│  │  │  ├─ icon-rhigt-arrow.svg
│  │  │  ├─ icon-shopping-bag.svg
│  │  │  ├─ icon-shopping-cart-2.svg
│  │  │  ├─ icon-shopping-cart.svg
│  │  │  ├─ icon-swiper-1.svg
│  │  │  ├─ icon-swiper-2.svg
│  │  │  ├─ icon-up-arrow.svg
│  │  │  ├─ icon-user-2.svg
│  │  │  ├─ icon-user.svg
│  │  │  ├─ icon-yt.svg
│  │  │  ├─ Logo-hodu.png
│  │  │  ├─ search-black.svg
│  │  │  ├─ search.svg
│  │  │  ├─ share-icon-Large.svg
│  │  │  ├─ share-icon.svg
│  │  │  └─ sold-out.png
│  │  └─ MokImg
│  │     ├─ animals-2739386_1280.jpg
│  │     ├─ BannerImg.ts
│  │     ├─ christmas-2918569_1280.jpg
│  │     ├─ geeks-2894621_1280.jpg
│  │     ├─ guitar-3567767_1280.jpg
│  │     └─ nature-3082832_1280.jpg
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
│  │  ├─ ProductDetail
│  │  │  └─ ProductDetail.tsx
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