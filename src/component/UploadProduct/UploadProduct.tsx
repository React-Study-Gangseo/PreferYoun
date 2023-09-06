import React, { useRef, useState } from "react";
import {
  Warning,
  HeaderSection,
  Wrapper,
  MainSection,
  FormSection,
  MainContent,
  UploadProductInfo,
  UploadProductDetail,
  Input,
  ButtonGroup,
  ImgWrapper,
  EmptyBox,
  ProductImg,
  ProductImgInput,
  ProductImgWrapper,
  ProductIconWrapper,
  ProductImgIcon,
  ShippingBtn,
} from "./UploadProduct.Style";
import Logo from "../../assets/images/Logo-hodu.png";
import UploadIcon from "../../assets/images/icon-img.png";
import Button from "component/common/Button/Button";
import { Link } from "react-router-dom";
import { PostProduct } from "API/ProductAPI";
import { UploadProducts } from "types/type";
export default function UploadProduct() {
  const fileInputRef = useRef<any>();
  const [previewURL, setPreviewURL] = useState("");
  const [product, setProduct] = useState<UploadProducts>({
    product_name: "",
    price: 0,
    shipping_fee: 0,
    stock: 0,
    image: undefined,
  });
  const handleUploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let file = e.target.files[0];
      console.log(file);
      setProduct({ ...product, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        setPreviewURL(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  const UploadProduct = async () => {
    try {
      const uploadProduct = await PostProduct(product);
      console.log(uploadProduct);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="a11y-hidden">판매자 센터 상품 등록</h1>
      <Wrapper>
        <HeaderSection>
          <Link to="/seller">
            <img alt="호두 로고 이미지" src={Logo} />
          </Link>
          <h2>판매자 센터</h2>
        </HeaderSection>
        <MainSection>
          <h2>상품등록</h2>
          <MainContent>
            <Warning>
              <small>* 상품 등록 주의 사항</small>
              <article>
                <ul>
                  <li>너무 귀여운 사진은 심장이 아파올 수 있습니다.</li>
                  <br />
                  <li>
                    유소년에게서 천자만홍이 피고 이상이 온갖 들어 약동하다.
                    이상의 가지에 사랑의 있는가? 주며, 끓는 힘차게 얼음이 얼음
                    가치를 황금시대의 있음으로써 사라지지 것이다. 이 뜨거운지라,
                    이상의 속에서 이것은 피가 보배를 황금시대의 싹이 사막이다.
                  </li>
                  <br />
                  <li>
                    자신과 우는 옷을 지혜는 아니다. 더운지라 설레는 기쁘며,
                    위하여서, 평화스러운 광야에서 그리하였는가? 소담스러운
                    위하여 인도하겠다는 어디 무엇을 이상을 같지 따뜻한 청춘
                    칼이다.
                  </li>
                  <br />
                  <li>
                    가치를 그들을 예수는 찬미를 가슴이 과실이 이것이다. 희망의
                    것이다.보라, 풍부하게 이것은 황금시대를 얼마나 인간에 돋고,
                    이것이다.
                  </li>
                </ul>
              </article>
            </Warning>
            <FormSection>
              <div>
                <ProductImgWrapper>
                  <h5>배송방법</h5>
                  <ProductIconWrapper>
                    <ProductImgInput
                      type="file"
                      accept="image/jpeg,image/jpg,image/png"
                      onChange={handleUploadImg}
                      ref={fileInputRef}
                    />
                    <ProductImgIcon
                      src={UploadIcon}
                      alt="사진을 올리는 버튼 이미지"
                    />
                  </ProductIconWrapper>
                  {previewURL ? (
                    <ImgWrapper>
                      <ProductImg src={previewURL} alt="업로드된 이미지" />
                    </ImgWrapper>
                  ) : (
                    <EmptyBox></EmptyBox>
                  )}
                </ProductImgWrapper>
                <UploadProductInfo>
                  <div>
                    <label>상품명</label>
                    <Input
                      id="productName"
                      value={product.product_name}
                      onChange={(e) =>
                        setProduct({ ...product, product_name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label>판매가</label>
                    <Input
                      id="price"
                      value={product.price}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          price: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <h5>배송방법</h5>
                  <ShippingBtn>
                    <Button width="ms" color="black">
                      택배, 소포, 등기
                    </Button>
                    <Button width="ms" color="black">
                      직접배송(화물배달)
                    </Button>
                  </ShippingBtn>
                  <div>
                    <label>기본 배송비</label>
                    <Input
                      id="shipping_fee"
                      value={product.shipping_fee}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          shipping_fee: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div>
                    <label>재고</label>
                    <Input
                      id="stock"
                      value={product.stock}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          stock: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                </UploadProductInfo>
              </div>
              <UploadProductDetail>
                <label>상품 상세 정보</label>
                <textarea />
              </UploadProductDetail>
              <ButtonGroup>
                <Button width="ms" color="black" border="active">
                  취소
                </Button>
                <Button width="ms" bgColor="active" onClick={UploadProduct}>
                  저장하기
                </Button>
              </ButtonGroup>
            </FormSection>
          </MainContent>
        </MainSection>
      </Wrapper>
    </>
  );
}
