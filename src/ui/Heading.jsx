import styled, { css } from "styled-components";

const Heading = styled.h1.attrs((props) => ({
  as: props.as || "h1",
}))`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 30px;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 25px;
      font-weight: 600;
      line-height: 4x;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 20px;
      font-weight: 500;
    `}
`;

// Heading.defaultProps = {
//   as: 'h1',
// };

export default Heading;
