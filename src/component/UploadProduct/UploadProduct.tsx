import React, { useRef, useState, useEffect } from "react";
import {
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
  MethodBtn,
  Sufix,
  NameSufix,
} from "./UploadProduct.Style";
import UploadIcon from "../../assets/images/icon-img.png";
import Button from "component/common/Button/Button";
import { EditProductAPI, PostProduct } from "API/ProductAPI";
import { UploadProducts } from "types/type";
import MDEditor from "@uiw/react-md-editor";
import Warning from "./Warning/Warning";
import { useLocation, useNavigate } from "react-router-dom";
export default function UploadProduct() {
  const fileInputRef = useRef<any>();
  const [previewURL, setPreviewURL] = useState("");
  const [isActive, setIsActive] = useState("");
  const [inputCount, setInputCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const [product, setProduct] = useState<UploadProducts>({
    product_name: "",
    price: 0,
    shipping_fee: 0,
    stock: 0,
    image: undefined,
    product_info: "",
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
  useEffect(() => {
    // setProduct(data.product);
    if (data) {
      setPreviewURL(data.product.image);
      ImageFile(data.product.image);
      setIsActive(data.product.shipping_method);
    }
  }, [data]);

  const ImageFile = (Url: string) => {
    let blob = new Blob([Url], { type: "image/jpeg" });
    let file = new File([blob], "image.jpeg", {
      type: "image/jpeg",
      lastModified: Date.now(),
    });
    setProduct({ ...data.product, image: file });
  };
  console.log(product.image);
  const UploadProduct = async () => {
    console.log(product);
    try {
      const uploadProduct = await PostProduct(product);
      console.log(uploadProduct);
      navigate("/seller/center");
    } catch (err) {
      console.log(err);
    }
  };
  const EditProduct = async () => {
    try {
      console.log(product);
      const res = await EditProductAPI(product);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleMethod = (e: any) => {
    setIsActive(e.target.value);
    setProduct({ ...product, shipping_method: e.target.value });
  };

  return (
    <>
      <h1 className="a11y-hidden">판매자 센터 상품 등록</h1>

      <Wrapper>
        <MainSection>
          <h2>상품등록</h2>
          <MainContent>
            <Warning />
            <FormSection>
              <div>
                <ProductImgWrapper>
                  <h5>배송방법</h5>
                  {!previewURL && (
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
                  )}
                  {previewURL || typeof product.image === "string" ? (
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
                      inputProps={{ maxLength: 20 }}
                      endAdornment={
                        <NameSufix position="start">{`${inputCount} / 20`}</NameSufix>
                      }
                      value={product.product_name}
                      onChange={(e) => {
                        setProduct({
                          ...product,
                          product_name: e.target.value,
                        });
                        setInputCount(e.target.value.length);
                      }}
                    />
                  </div>
                  <div>
                    <label>판매가</label>
                    <Input
                      id="price"
                      value={product.price}
                      endAdornment={<Sufix position="start">원</Sufix>}
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
                    <MethodBtn
                      type="button"
                      width="ms"
                      color="black"
                      value="PARCEL"
                      onClick={(e) => handleMethod(e)}
                      className={isActive === "PARCEL" ? "active" : ""}
                    >
                      택배, 소포, 등기
                    </MethodBtn>
                    <MethodBtn
                      type="button"
                      width="ms"
                      color="black"
                      value="DELIVERY"
                      onClick={(e) => handleMethod(e)}
                      className={isActive === "DELIVERY" ? "active" : ""}
                    >
                      직접배송(화물배달)
                    </MethodBtn>
                  </ShippingBtn>
                  <div>
                    <label>기본 배송비</label>
                    <Input
                      id="shipping_fee"
                      value={product.shipping_fee}
                      endAdornment={<Sufix position="start">원</Sufix>}
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
                      endAdornment={<Sufix position="start">개</Sufix>}
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
                <div data-color-mode="light">
                  <MDEditor
                    value={product.product_info}
                    onChange={(newValue) =>
                      setProduct({
                        ...product,
                        product_info: newValue || "", // e.target.value 대신 newValue 사용
                      })
                    }
                    preview="edit"
                    height={"800px"}
                  />
                </div>
              </UploadProductDetail>
              <ButtonGroup>
                <Button width="ms" color="black" border="active">
                  취소
                </Button>
                {data ? (
                  <Button width="ms" bgColor="active" onClick={EditProduct}>
                    수정하기
                  </Button>
                ) : (
                  <Button width="ms" bgColor="active" onClick={UploadProduct}>
                    저장하기
                  </Button>
                )}
              </ButtonGroup>
            </FormSection>
          </MainContent>
        </MainSection>
      </Wrapper>
    </>
  );
}
