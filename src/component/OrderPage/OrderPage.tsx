import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { TotalPriceState } from "redux/TotalPrice";
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
  PayBtn,
  Wrapper,
} from "./OrderPage.Style";
import { Checkbox, Radio, FormControlLabel, RadioGroup } from "@mui/material";
import { orderdata, Products } from "types/type";
import { CartOrder, CartOneOrder, OrderDirect } from "API/OrderAPI";
const label = {
  inputProps: {
    "aria-label": "최종 금액 확인 체크",
  },
};

const OrderPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
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

  const [payCheck, setPayCheck] = useState("");
  const [lastCheck, setLastCheck] = useState(false);
  const [orderKind, setOrderKind] = useState("");

  useEffect(() => {
    if (info) {
      const { order_kind, productInfo } = info;
      if (order_kind === "direct_order" || order_kind === "cart_one_order") {
        console.log("check");
        setOrderKind(order_kind);
        setOrderProducts([productInfo]);
      } else if (order_kind === "cart_order") {
        console.log("check cart", totalPrice, totalShippingFee);
        setOrderKind(order_kind);
        setOrderProducts(productInfo);
        setOrderTotalShippingFee(totalShippingFee);
        setOrderTotalPrice(totalPrice);
      } else {
      }
    }
  }, [info]);
  useEffect(() => {
    console.log(orderKind, orderProducts);
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
      console.log("not cart");
      setOrderTotalShippingFee(orderProducts[0].shipping_fee);
      setOrderTotalPrice(orderProducts[0].price * orderProducts[0].quantity);
    }
  }, [orderKind, orderProducts]);
  console.log(orderProducts);
  const handlePayCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayCheck((event.target as HTMLInputElement).value);
  };
  const handleChange = () => {
    if (!lastCheck) {
      setLastCheck(true);
      const phone = `${phoneNumber.firstNumber}${phoneNumber.secondNumber}${phoneNumber.thirdNumber}`;
      const receiver_address = `${address.firstAddress}${address.secondAddress}${address.thirdAddress}`;
      console.log(orderKind, phone, receiver_address);
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
  console.log(orderKind);
  const handleSubmitOrderData = async (event: React.FormEvent) => {
    event.preventDefault();

    if (orderKind === "cart_order") {
      try {
        console.log(orderData);
        const res = await CartOrder(orderData);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else if (orderKind === "cart_one_order") {
      try {
        console.log(orderData);
        const res = await CartOneOrder(orderData);
        console.log(res);
        if (res.status === 200) {
          localStorage.removeItem("persist:root");
          console.log("localStorage data removed");
          navigate("/buyer");
        }
      } catch (error) {
        console.log(error);
      }
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
              <td>{product.shipping_fee}</td>
              {product?.price && product.quantity && (
                <td>{product.price * product.quantity} 원</td>
              )}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td />
            <td />
            <td />
            <td>
              총 주문금액
              <TotalPrice>{orderTotalPrice + orderTotalShippingFee}</TotalPrice>
            </td>
          </tr>
        </tfoot>
      </OrderList>
      <OrdererInfoForm onSubmit={handleSubmitOrderData}>
        <HeadInfoTitle>배송정보</HeadInfoTitle>
        <OrderInfo>
          <SectionTitle>주문자 정보</SectionTitle>
          <ul>
            <li>
              <label>이름</label>
              <input id="name" />
            </li>
            <li>
              <label>휴대폰</label>
              <Phone>
                <input placeholder="000" id="phone_number_first" />
                <span>-</span>
                <input placeholder="0000" id="phone_number_second" />
                <span>-</span>
                <input placeholder="0000" id="phone_number_last" />
              </Phone>
            </li>
            <li>
              <label>이메일</label>
              <input id="email" />
            </li>
          </ul>
        </OrderInfo>
        <OrderInfo>
          <SectionTitle>배송지 정보</SectionTitle>
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
                <button>우편번호 조회</button>
                <input
                  id="address"
                  value={address.firstAddress}
                  onChange={(e) =>
                    setAddress({
                      ...address,
                      firstAddress: String(e.target.value),
                    })
                  }
                />
                <input
                  id="address"
                  value={address.secondAddress}
                  onChange={(e) =>
                    setAddress({
                      ...address,
                      secondAddress: String(e.target.value),
                    })
                  }
                />
                <input
                  id="address"
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
            {/* <PayCheck
                checked={payCheck === "CARD"}
                value="CARD"
                onChange={(e) => handlePayCheck(e.target.value)}
              />
              <label>신용/체크카드</label> */}

            <FormControlLabel
              value="DEPOSIT"
              control={<Radio />}
              label="무통장입금"
            />
            {/* <input
                type="radio"
                value="DEPOSIT"
                checked={payCheck === "DEPOSIT"}
                onChange={(e) => handlePayCheck(e.target.value)}
              />
              <label>무통장 입금</label> */}

            <FormControlLabel
              value="PHONE_PAYMENT"
              control={<Radio />}
              label="휴대폰 결제"
            />
            {/* <input
                type="radio"
                value="PHONE_PAYMENT"
                checked={payCheck === "PHONE_PAYMENT"}
                onChange={(e) => handlePayCheck(e.target.value)}
              />
              <label>휴대폰 결제</label> */}

            <FormControlLabel
              value="NAVERPAY"
              control={<Radio />}
              label="네이버페이"
            />
            {/* <input
                type="radio"
                value="NAVERPAY"
                checked={payCheck === "NAVERPAY"}
                onChange={(e) => handlePayCheck(e.target.value)}
              />
              <label>네이버페이</label> */}

            <FormControlLabel
              value="KAKAOPAY"
              control={<Radio />}
              label="카카오페이"
            />
            {/* <input
                type="radio"
                checked={payCheck === "KAKAOPAY"}
                value="KAKAOPAY"
                onChange={(e) => handlePayCheck(e.target.value)}
              />
              <label>카카오페이</label> */}
          </RadioGroup>
        </PayInfo>
        <FinallyPay>
          <InfoTitle>최종결제 정보</InfoTitle>
          <FinallyPayWrapper>
            <ul>
              <li>
                <p>상품금액</p>
                <p>
                  <strong>{orderTotalPrice} </strong>원
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
                  <strong>{orderTotalShippingFee} </strong>원
                </p>
              </li>
              <li>
                <p>결제금액</p>
                <strong>{orderTotalPrice + orderTotalShippingFee} 원</strong>
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
              <PayBtn
                width="ms"
                bgColor={lastCheck ? "active" : "inactive"}
                disabled={lastCheck ? false : true}
                type="submit"
              >
                결제하기
              </PayBtn>
            </LastCheck>
          </FinallyPayWrapper>
        </FinallyPay>
      </OrdererInfoForm>
    </Wrapper>
  );
};

export default OrderPage;
