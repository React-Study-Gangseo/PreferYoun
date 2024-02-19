import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../component/common/Button/Button";
import ErrorImg from "../../assets/images/icon-404.svg";
import { Wrapper, Content, ButtonGroup } from "./ErrorPage.Style";
export interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h1 className="a11y-hidden">에러 페이지</h1>
      <img src={ErrorImg} alt="404 에러 아이콘" />
      <Content>
        <h2>페이지를 찾을 수 없습니다.</h2>
        <p>페이지가 존재하지 않거나 사용할 수 없는 페이지입니다.</p>
        <p>웹 주소가 올바른지 확인해 주세요.</p>
        <ButtonGroup>
          <Button
            size="ms"
            variant="contained"
            fontSize="18px"
            padding="17px"
            onClick={() => navigate("/")}
          >
            메인으로
          </Button>
          <Button
            size="ms"
            variant="outlined"
            fontSize="18px"
            padding="15px"
            onClick={() => navigate(-1)}
          >
            이전 페이지
          </Button>
        </ButtonGroup>
      </Content>
    </Wrapper>
  );
};

export default ErrorPage;
