import styled, { css } from 'styled-components';

const Titulo = styled.h2`
  color: #009673;
  font-weight: bold;

  ${(props) =>
    props.inicio &&
    css`
      font-weight: medium;
    `}
`;

export default Titulo;
