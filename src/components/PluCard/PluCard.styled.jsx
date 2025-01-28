import styled from "@emotion/styled";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
  border: 1px black solid;
  border-radius: 12px;
  margin-bottom: 8px;
  padding: 8px;
`;

export const Articule = styled.span`
  font-size: 20px;
`;

export const Name = styled.span`
  color: black;
`;

export const Plu = styled.span`
  font-size: 20px;
  font-weight: 600;

  svg {
    margin-right: 8px;
    color: rgb(130 80 40);
  }
`;
