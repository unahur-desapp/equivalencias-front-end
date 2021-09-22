import styled, { css } from 'styled-components';

const Boton = styled.button`
  width: 200px;
  height: 45px;
  background: #009673;
  color: #fff;
  display: inline-block;
  padding: 15px 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease all;
  /*width: ${(props) => (props.largo ? '20%' : 'auto')};*/

  ${(props) =>
    props.hover &&
    css`
      &:hover {
        background: #008f6d;
        color: #fff;
      }
    `}

  ${(props) =>
    props.border &&
    css`
      border: 1px solid #fff;

      &:hover {
        box-shadow: 0px 0px 4px 0.1px rgba(0, 0, 0, 0.7);
      }
    `}
`;

export default Boton;
