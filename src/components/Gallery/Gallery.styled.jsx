import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;
export const Item = styled.li`
  width: calc((100% - 4 * 30px) / 5);
`;
