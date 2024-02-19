import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 46.25rem;
  margin: 422px auto;
  display: flex;
  gap: 3.125rem;
`;

export const Content = styled.section`
  padding-top: 16px;
  & h2 {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1.25rem;
  }
  & p {
    font-size: 1rem;
    color: #767676;
    word-break: keep-all;
    white-space: break-spaces;
    line-height: 1.2519rem;
    &:last-of-type {
      margin-bottom: 2.5rem;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.875rem;
  width: 100%;
`;
