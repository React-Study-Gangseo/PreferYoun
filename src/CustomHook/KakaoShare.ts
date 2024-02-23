import { Products } from "types/type";
const MARKET_URL = "https://markethodu.netlify.app";

const initializeKakao = () => {
  //@ts-ignore
  if (window.Kakao && !window.Kakao.isInitialized()) {
    //@ts-ignore
    window.Kakao.init("0a8f716c5157a42141e742f8d1dc57aa");
  }
};

const kakaoButton = (productInfo: Products) => {
  initializeKakao();
  //@ts-ignore
  if (!window.Kakao) {
    return;
  }
  //@ts-ignore
  const kakao = window.Kakao;
  kakao.Share.sendDefault({
    objectType: "commerce",
    content: {
      title: "호두 마켓에서 당신의 삶을 채워 보세요",
      imageUrl: productInfo?.image,
      link: {
        mobileWebUrl: MARKET_URL,
        webUrl: MARKET_URL,
      },
    },
    commerce: {
      productName: productInfo.product_name,
      regularPrice: productInfo.price,
    },
    buttons: [
      {
        title: "구매하기",
        link: {
          mobileWebUrl: `${MARKET_URL}/detailProduct/${productInfo.product_id}`,
          webUrl: `${MARKET_URL}/detailProduct/${productInfo.product_id}`,
        },
      },
      {
        title: "공유하기",
        link: {
          mobileWebUrl: `${MARKET_URL}/detailProduct/${productInfo.product_id}`,
          webUrl: `${MARKET_URL}/detailProduct/${productInfo.product_id}`,
        },
      },
    ],
  });
};

export default kakaoButton;
