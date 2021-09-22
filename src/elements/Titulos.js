import styled, { css } from 'styled-components';

const Titulos = styled.h1`
  color: #000;
  font-weight: medium;

  ${(props) =>
    props.centrar &&
    css`
      text-align: center;
    `}

  ${(props) =>
    props.blanco &&
    css`
      color: #fff;
    `}
`;

export default Titulos;
