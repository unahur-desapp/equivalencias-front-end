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
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease all;
    //width: ${(props) => (props.largo ? '20%' : 'auto')};

    &:hover {
        background: #007a5e;
        color: #fff;
    }

    ${(props) =>
        props.border &&
        css`
            border: 1px solid #fff;
        `}
`;

export default Boton;
