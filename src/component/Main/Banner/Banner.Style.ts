import styled from "@emotion/styled";

export const BannerImages = styled.div`
  display: flex;
  overflow: hidden;
  picture.inactive {
    display: none;
  }
  img {
    position: absolute;
    width: 100%;
    height: 31.25rem; // 수정
    object-fit: cover;
    @media (max-width: 896px) {
      height: 20vh; // 수정
    }
  }
  &.active {
    z-index: 1; // 추가
  }
  @media (max-width: 896px) {
    height: 20vh; // 수정
  }
`;

export const BannerControlButton = styled.button`
  position: absolute;
  top: 50%; // 수정
  height: 60px;
  transform: translateY(-50%); // 수정
  font-size: 22px;
  border: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  opacity: 1;
  &:hover {
    background-color: #767676;
    opacity: 0.7;
  }
`;

export const LeftButton = styled(BannerControlButton)`
  left: 1%; // 수정
  & img {
    transform: translate(-0.5px, -0.1px);
    width: 60px;
    height: 120px;
  }
`;

export const RightButton = styled(BannerControlButton)`
  right: 1%; // 수정
  & img {
    transform: translate(-2px, 0);
    width: 60px;
    height: 120px;
  }
`;

export const BannerIndicator = styled.div`
  position: absolute;
  display: flex;
  align-self: center;
  gap: 5px;
  margin: 16px 0;
  bottom: 0;
`;

export const Dot = styled.div`
  width: 7px;
  height: 7px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  &.active {
    background-color: rgba(255, 255, 255, 1);
  }
`;
