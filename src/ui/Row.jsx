import styled, { css } from "styled-components";

const Row = styled.div.attrs((props) => ({
  type: props.type || "horizontal",
}))`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 20px;
    `}
`;

export default Row;
