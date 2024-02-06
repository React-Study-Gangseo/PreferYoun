import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { TotalPriceState } from "../../redux/TotalPrice";
import { useLocation, useNavigate } from "react-router-dom";
import {
  OrderList,
  ProductInfo,
  TotalPrice,
  FinallyPay,
  InfoTitle,
  HeadInfoTitle,
  SectionTitle,
  OrderInfo,
  FinallyPayWrapper,
  Phone,
  Address,
  Message,
  PayInfo,
  LastCheck,
  OrdererInfoForm,
  OrderPageTitle,
  Wrapper,
  FormControlLabelStyle,
  AddressInfo,
  MobilePayInfo,
  RowLarge,
  RowSmall,
} from "./OrderPage.Style";
import {
  Checkbox,
  Radio,
  FormControlLabel,
  RadioGroup,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { orderdata, Products } from "types/type";
import { CartOrder, CartOneOrder, OrderDirect } from "API/OrderAPI";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/Modal";
import { RootState } from "../../redux/store";
import Button from "../../component/common/Button/Button";
const label = {
  inputProps: {
    "aria-label": "최종 금액 확인 체크",
  },
};
const OrderPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const info = location.state;
  const [orderProducts, setOrderProducts] = useState<Products[]>([]);
  const [orderTotalPrice, setOrderTotalPrice] = useState(0);
  const [orderTotalShippingFee, setOrderTotalShippingFee] = useState(0);
  const totalPrice = useSelector((state: { totalPrice: TotalPriceState }) => {
    return state.totalPrice.value.reduce((sum, item) => sum + item.price, 0);
  });

  const totalShippingFee = useSelector(
    (state: { totalPrice: TotalPriceState }) => {
      return state.totalPrice.value.reduce(
        (sum, item) => sum + item.shipping_fee,
        0
      );
    }
  );
  const FullAddress = useSelector((state: RootState) => state.Address.value);
  const [orderData, setOrderData] = useState<orderdata>({
    product_id: 0,
    quantity: 0,
    order_kind: "",
    receiver: "",
    receiver_phone_number: "",
    address: "",
    address_message: "",
    payment_method: "",
    total_price: 0,
  });
  const [phoneNumber, setPhoneNumber] = useState({
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
  });
  const [address, setAddress] = useState({
    firstAddress: "",
    secondAddress: "",
    thirdAddress: "",
  });
  const [ordererInfo, setOrdererInfo] = useState({
    ordererName: "",
    ordererFirstNumber: "",
    ordererSecondNumber: "",
    ordererThirdNumber: "",
    ordererMail: "",
  });
  const [payCheck, setPayCheck] = useState("");
  const [lastCheck, setLastCheck] = useState(false);
  const [sameCheck, setSameCheck] = useState(false);
  const [orderKind, setOrderKind] = useState("");
  useEffect(() => {
    if (info) {
      const { order_kind, productInfo } = info;
      if (order_kind === "direct_order" || order_kind === "cart_one_order") {
        setOrderKind(order_kind);
        setOrderProducts([productInfo]);
      } else if (order_kind === "cart_order") {
        setOrderKind(order_kind);
        setOrderProducts(productInfo);
        setOrderTotalShippingFee(totalShippingFee);
        setOrderTotalPrice(totalPrice);
      } else {
      }
    }
  }, [info]);
  useEffect(() => {
    if (orderProducts[0]?.product_id) {
      setOrderData({
        ...orderData,
        product_id: orderProducts[0].product_id,
        quantity: orderProducts[0].quantity,
      });
    }
    if (
      orderKind !== "cart_order" &&
      orderProducts[0]?.price &&
      orderProducts[0]?.quantity &&
      orderProducts[0]?.shipping_fee !== undefined
    ) {
      setOrderTotalShippingFee(orderProducts[0].shipping_fee);
      setOrderTotalPrice(orderProducts[0].price * orderProducts[0].quantity);
    }
  }, [orderKind, orderProducts]);

  const handlePayCheck = (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>
  ) => {
    const value = event.target
      ? (event.target as HTMLInputElement).value
      : event;
    setPayCheck(value as string);
  };
  const handleChange = () => {
    if (!lastCheck) {
      setLastCheck(true);
      const phone = `${phoneNumber.firstNumber}${phoneNumber.secondNumber}${phoneNumber.thirdNumber}`;
      const receiver_address = `${address.firstAddress}${address.secondAddress}${address.thirdAddress}`;
      setOrderData({
        ...orderData,

        receiver_phone_number: phone,
        address: receiver_address,
        payment_method: payCheck,
        order_kind: orderKind,
        total_price: orderTotalPrice + orderTotalShippingFee,
      });
    } else {
      setLastCheck(false);
    }
  };
  useEffect(() => {
    if (FullAddress.length > 0) {
      console.log(FullAddress);

      setAddress({
        firstAddress: FullAddress[0].postCode,
        secondAddress: FullAddress[0].address,
        thirdAddress: "",
      });
    }
  }, [FullAddress]);
  const handleSubmitOrderData = async (event: React.FormEvent) => {
    event.preventDefault();

    if (orderKind === "cart_order") {
      try {
        const res = await CartOrder(orderData);
        if (res.status === 200) {
          localStorage.removeItem("persist:root");
          navigate("/mypage");
        }
      } catch (error) {
        console.log(error);
      }
    } else if (orderKind === "cart_one_order") {
      try {
        const res = await CartOneOrder(orderData);
        console.log(res);
        if (res.status === 200) {
          localStorage.removeItem("persist:root");

          navigate("/mypage");
        }
      } catch (error) {
        console.log(error);
      }
    } else if (orderKind === "direct_order") {
      try {
        const res = await OrderDirect(orderData);
        console.log(res);
        if (res.status === 200) {
          localStorage.removeItem("persist:root");

          navigate("/mypage");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleSearchAddress = () => {
    dispatch(
      openModal({
        modalType: "SearchAddressModal",
      })
    );
  };
  const handleSameInfo = () => {
    if (!sameCheck) {
      setSameCheck(true);
      setOrderData({
        receiver: ordererInfo.ordererName,
      });
      setPhoneNumber({
        firstNumber: ordererInfo.ordererFirstNumber,
        secondNumber: ordererInfo.ordererSecondNumber,
        thirdNumber: ordererInfo.ordererThirdNumber,
      });
    } else {
      setSameCheck(false);
    }
  };
  return (
    <Wrapper>
      <OrderPageTitle>주문/결제하기</OrderPageTitle>
      <OrderList>
        <thead>
          <tr>
            <th>상품정보</th>
            <th>할인</th>
            <th>배송비</th>
            <th>주문금액</th>
          </tr>
        </thead>
        <tbody>
          {orderProducts?.map((product, index) => (
            <tr key={index}>
              <td>
                <img src={product.image} alt="상품이미지" />
                <ProductInfo>
                  <span>{product.store_name}</span>
                  <h3>{product.product_name}</h3>
                  <span>수량: {product.quantity}개</span>
                </ProductInfo>
              </td>
              <td>-</td>
              <td>
                {new Intl.NumberFormat("ko-KR").format(
                  product.shipping_fee || 0
                )}
              </td>
              {product?.price && product.quantity && (
                <td>
                  {new Intl.NumberFormat("ko-KR").format(
                    product.price * product.quantity
                  )}{" "}
                  원
                </td>
              )}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <RowLarge>
            <td />
            <td />
            <td>총 주문금액</td>
            <td>
              <TotalPrice>
                {new Intl.NumberFormat("ko-KR").format(
                  orderTotalPrice + orderTotalShippingFee
                )}
                원
              </TotalPrice>
            </td>
          </RowLarge>
          <RowSmall>
            <td></td>
            <td>총 주문금액</td>
            <td colSpan={2}>
              <TotalPrice>
                {new Intl.NumberFormat("ko-KR").format(
                  orderTotalPrice + orderTotalShippingFee
                )}
                원
              </TotalPrice>
            </td>
          </RowSmall>
        </tfoot>
      </OrderList>
      <OrdererInfoForm onSubmit={handleSubmitOrderData}>
        <HeadInfoTitle>배송정보</HeadInfoTitle>
        <OrderInfo>
          <SectionTitle>주문자 정보</SectionTitle>
          <ul>
            <li>
              <label>이름</label>
              <input
                id="name"
                type="text"
                value={ordererInfo.ordererName}
                onChange={(e) =>
                  setOrdererInfo({
                    ...ordererInfo,
                    ordererName: String(e.target.value),
                  })
                }
              />
            </li>
            <li>
              <label>휴대폰</label>
              <Phone>
                <input
                  placeholder="000"
                  id="phone_number_first"
                  value={ordererInfo.ordererFirstNumber}
                  onChange={(e) =>
                    setOrdererInfo({
                      ...ordererInfo,
                      ordererFirstNumber: String(e.target.value),
                    })
                  }
                />
                <span>-</span>
                <input
                  placeholder="0000"
                  id="phone_number_second"
                  value={ordererInfo.ordererSecondNumber}
                  onChange={(e) =>
                    setOrdererInfo({
                      ...ordererInfo,
                      ordererSecondNumber: String(e.target.value),
                    })
                  }
                />
                <span>-</span>
                <input
                  placeholder="0000"
                  id="phone_number_last"
                  value={ordererInfo.ordererThirdNumber}
                  onChange={(e) =>
                    setOrdererInfo({
                      ...ordererInfo,
                      ordererThirdNumber: String(e.target.value),
                    })
                  }
                />
              </Phone>
            </li>
            <li>
              <label>이메일</label>
              <input
                id="email"
                type="text"
                value={ordererInfo.ordererMail}
                onChange={(e) =>
                  setOrdererInfo({
                    ...ordererInfo,
                    ordererMail: String(e.target.value),
                  })
                }
              />
            </li>
          </ul>
        </OrderInfo>
        <OrderInfo>
          <AddressInfo>
            <SectionTitle>배송지 정보</SectionTitle>
            <FormControlLabelStyle
              label="주문자정보와 동일"
              control={
                <Checkbox
                  size="small"
                  checked={sameCheck}
                  onChange={handleSameInfo}
                />
              }
            />
          </AddressInfo>
          <ul>
            <li>
              <label>수령인</label>
              <input
                id="reciever"
                value={orderData.receiver}
                onChange={(e) =>
                  setOrderData({
                    ...orderData,
                    receiver: String(e.target.value),
                  })
                }
              />
            </li>
            <li>
              <label>휴대폰</label>
              <Phone>
                <input
                  placeholder="000"
                  id="firstNumber"
                  value={phoneNumber.firstNumber}
                  onChange={(e) =>
                    setPhoneNumber({
                      ...phoneNumber,
                      firstNumber: String(e.target.value),
                    })
                  }
                />
                <span>-</span>
                <input
                  placeholder="0000"
                  id="secondNumber"
                  value={phoneNumber.secondNumber}
                  onChange={(e) =>
                    setPhoneNumber({
                      ...phoneNumber,
                      secondNumber: String(e.target.value),
                    })
                  }
                />
                <span>-</span>
                <input
                  placeholder="0000"
                  id="lastNumber"
                  value={phoneNumber.thirdNumber}
                  onChange={(e) =>
                    setPhoneNumber({
                      ...phoneNumber,
                      thirdNumber: String(e.target.value),
                    })
                  }
                />
              </Phone>
            </li>
            <li>
              <label>배송주소</label>
              <Address>
                <div>
                  <Button
                    size="ss"
                    color="primary"
                    variant="contained"
                    onClick={handleSearchAddress}
                    padding="5px 0px"
                  >
                    우편번호 조회
                  </Button>
                  <input
                    id="address1"
                    value={address.firstAddress}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        firstAddress: String(e.target.value),
                      })
                    }
                  />
                </div>
                <input
                  id="address2"
                  value={address.secondAddress}
                  onChange={(e) =>
                    setAddress({
                      ...address,
                      secondAddress: String(e.target.value),
                    })
                  }
                />
                <input
                  id="address3"
                  placeholder="상세주소"
                  value={address.thirdAddress}
                  onChange={(e) =>
                    setAddress({
                      ...address,
                      thirdAddress: String(e.target.value),
                    })
                  }
                />
              </Address>
            </li>
            <li>
              <label>배송메세지</label>
              <Message>
                <input
                  id="address_message"
                  value={orderData.address_message}
                  onChange={(e) =>
                    setOrderData({
                      ...orderData,
                      address_message: String(e.target.value),
                    })
                  }
                />
              </Message>
            </li>
          </ul>
        </OrderInfo>
        <PayInfo>
          <HeadInfoTitle>결제수단</HeadInfoTitle>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={payCheck}
            onChange={handlePayCheck}
          >
            <FormControlLabel
              value="CARD"
              control={<Radio />}
              label="신용/체크카드"
            />
            <FormControlLabel
              value="DEPOSIT"
              control={<Radio />}
              label="무통장입금"
            />
            <FormControlLabel
              value="PHONE_PAYMENT"
              control={<Radio />}
              label="휴대폰 결제"
            />
            <FormControlLabel
              value="NAVERPAY"
              control={<Radio />}
              label="네이버페이"
            />
            <FormControlLabel
              value="KAKAOPAY"
              control={<Radio />}
              label="카카오페이"
            />
          </RadioGroup>
        </PayInfo>
        <MobilePayInfo>
          <HeadInfoTitle>결제수단</HeadInfoTitle>
          <Select
            value={payCheck}
            onChange={handlePayCheck}
            sx={{ width: "100%" }}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={"CARD"}>신용/체크카드</MenuItem>
            <MenuItem value={"DEPOSIT"}>무통장입금</MenuItem>
            <MenuItem value={"PHONE_PAYMENT"}>휴대폰결제</MenuItem>
            <MenuItem value={"NAVERPAY"}>네이버페이</MenuItem>
            <MenuItem value={"KAKAOPAY"}>카카오페이</MenuItem>
          </Select>
        </MobilePayInfo>
        <FinallyPay>
          <InfoTitle>최종결제 정보</InfoTitle>
          <FinallyPayWrapper>
            <ul>
              <li>
                <p>상품금액</p>
                <p>
                  <strong>
                    {new Intl.NumberFormat("ko-KR").format(orderTotalPrice)}{" "}
                  </strong>
                  원
                </p>
              </li>
              <li>
                <p>할인금액</p>
                <p>
                  <strong>0 </strong>원
                </p>
              </li>
              <li>
                <p>배송비</p>
                <p>
                  <strong>
                    {new Intl.NumberFormat("ko-KR").format(
                      orderTotalShippingFee
                    )}{" "}
                  </strong>
                  원
                </p>
              </li>
              <li>
                <p>결제금액</p>
                <strong>
                  {new Intl.NumberFormat("ko-KR").format(
                    orderTotalPrice + orderTotalShippingFee
                  )}{" "}
                  원
                </strong>
              </li>
            </ul>
            <LastCheck>
              <div>
                <Checkbox
                  required
                  size="small"
                  {...label}
                  checked={lastCheck}
                  onChange={handleChange}
                />
                <p>주문 내용을 확인하였으며, 정보 제공에 동의합니다.</p>
              </div>
              <Button
                size="l"
                variant="contained"
                color={lastCheck ? "primary" : "secondary"}
                disabled={lastCheck ? false : true}
                type="submit"
                fontSize="24px"
                margin="0 auto"
              >
                결제하기
              </Button>
            </LastCheck>
          </FinallyPayWrapper>
        </FinallyPay>
      </OrdererInfoForm>
    </Wrapper>
  );
};

export default OrderPage;
