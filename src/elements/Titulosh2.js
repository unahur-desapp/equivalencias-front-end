import styled, { css } from 'styled-components';

const Titulosh2 = styled.h2`
    color: #009673;

    ${(props) =>
        props.tituloh2Grande &&
        css`
            font-size: 2.5em;
            margin-bottom: 40px;
        `}

    ${(props) =>
        props.tituloh2Chico &&
        css`
            font-size: 1.875em;
        `}
`;

export default Titulosh2;
