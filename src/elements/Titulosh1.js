import styled, { css } from "styled-components";

const Titulosh1 = styled.h1`
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

	${(props) =>
    props.tituloGrande &&
    css`
      font-size: 2.3em;
    `}
`;

export default Titulosh1;
