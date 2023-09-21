import React from "react";
import {
  FooterSection,
  FooterTop,
  InfoList,
  InfoItem,
  Nav,
  NavList,
  Address,
} from "./Footer.Style";
import InstaIcon from "../../../assets/images/icon-insta.svg";
import MetaIcon from "../../../assets/images/icon-fb.svg";
import YtIcon from "../../../assets/images/icon-yt.svg";
const Footer: React.FC = () => {
  return (
    <FooterSection>
      <FooterTop>
        <InfoList>
          <li>
            <InfoItem to="">호두샵 소개</InfoItem>
          </li>
          <li>
            <InfoItem to="">이용약관</InfoItem>
          </li>
          <li>
            <InfoItem to="">개인정보처리방침</InfoItem>
          </li>
          <li>
            <InfoItem to="">전자금융거래약관</InfoItem>
          </li>
          <li>
            <InfoItem to="">청소년보호정책</InfoItem>
          </li>
          <li>
            <InfoItem to="">제휴문의</InfoItem>
          </li>
        </InfoList>
        <Nav>
          <NavList>
            <li>
              <button aria-label="인스타그램">
                <img src={InstaIcon} alt="인스타그램 아이콘" />
              </button>
            </li>
            <li>
              <button aria-label="페이스북">
                <img src={MetaIcon} alt="페이스북 아이콘" />
              </button>
            </li>
            <li>
              <button aria-label="유튜브">
                <img src={YtIcon} alt="유튜브 아이콘" />
              </button>
            </li>
          </NavList>
        </Nav>
      </FooterTop>
      <Address>
        <span>(주) HODU SHOP</span>
        <span>제주특별자치도 제주시 동광로 137 제주코딩베이스캠프</span>
        <span>사업자 번호: 000-0000-0000 | 통신판매업</span>
        <span>대표: 김호두</span>
      </Address>
    </FooterSection>
  );
};

export default Footer;
