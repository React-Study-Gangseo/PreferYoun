import React from "react";
import {
  Warning,
  HeaderSection,
  Wrapper,
  MainSection,
  FormSection,
  MainContent,
  UploadImg,
  UploadProductInfo,
  UploadProductDetail,
  Input,
  ButtonGroup,
} from "./UploadProduct.Style";
import Logo from "../../assets/images/Logo-hodu.png";
type Props = {};

export default function UploadProduct() {
  return (
    <>
      <h1 className="a11y-hidden">판매자 센터 상품 등록</h1>
      <Wrapper>
        <HeaderSection>
          <a href="#">
            <img alt="호두 로고 이미지" src={Logo} />
          </a>
          <h2>판매자 센터</h2>
        </HeaderSection>
        <MainSection>
          <h2>상품등록</h2>
          <small>* 상품 등록 주의 사항</small>
          <MainContent>
            <Warning>
              <ul>
                <li>너무 귀여운 사진은 심장이 아파올 수 있습니다.</li>
                <br />
                <li>
                  유소년에게서 천자만홍이 피고 이상이 온갖 들어 약동하다. 이상의
                  가지에 사랑의 있는가? 주며, 끓는 힘차게 얼음이 얼음 가치를
                  황금시대의 있음으로써 사라지지 것이다. 이 뜨거운지라, 이상의
                  속에서 이것은 피가 보배를 황금시대의 싹이 사막이다.
                </li>
                <br />
                <li>
                  자신과 우는 옷을 지혜는 아니다. 더운지라 설레는 기쁘며,
                  위하여서, 평화스러운 광야에서 그리하였는가? 소담스러운 위하여
                  인도하겠다는 어디 무엇을 이상을 같지 따뜻한 청춘 칼이다.
                </li>
                <br />
                <li>
                  가치를 그들을 예수는 찬미를 가슴이 과실이 이것이다. 희망의
                  것이다.보라, 풍부하게 이것은 황금시대를 얼마나 인간에 돋고,
                  이것이다.
                </li>
              </ul>
            </Warning>
            <FormSection>
              <div>
                <UploadImg>
                  <h5>사진이미지</h5>
                </UploadImg>
                <UploadProductInfo>
                  <div>
                    <label>상품명</label>
                    <Input />
                  </div>
                  <div>
                    <label>판매가</label>
                    <Input />
                  </div>
                  <div>
                    <button>택배, 소포, 등기</button>
                    <button>직접배송(화물배달)</button>
                  </div>
                  <div>
                    <label>기본 배송비</label>
                    <Input />
                  </div>
                  <div>
                    <label>재고</label>
                    <Input />
                  </div>
                </UploadProductInfo>
              </div>
              <UploadProductDetail>
                <label>상품 상세 정보</label>
                <textarea />
              </UploadProductDetail>
              <ButtonGroup>
                <button>취소</button>
                <button>저장하기</button>
              </ButtonGroup>
            </FormSection>
          </MainContent>
        </MainSection>
      </Wrapper>
    </>
  );
}
