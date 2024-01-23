import styled from "@emotion/styled";

export const ListWrapper = styled.section`
  margin-bottom: 1.25rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;

  & li:not(:last-of-type)::after {
    content: "";
    border-right: 1px solid #767676;
    margin-left: 8px;
  }
`;

export const Button = styled.button<{ selected: boolean }>`
  font-size: 1.2rem;
  color: ${({ selected }) => (selected ? "black" : "#767676")};
`;
