import { Button, createTheme, darken, styled } from '@mui/material';
import { css } from '@mui/styled-engine';

const BotonMUI = styled(Button)`
    width: 200px;
    height: 45px;
    text-transform: none;

    ${(props) =>
        props.buttonContained &&
        css`
            width: 170px;
            height: 45px;
            background-color: rgba(255, 255, 255, 0.15);

            &:hover {
                background-color: rgba(255, 255, 255, 0.3);
            }
        `}

    ${(props) =>
        props.buttonOutlined &&
        css`
            width: 170px;
            height: 45px;
            border-color: rgba(255, 255, 255, 0.5);
            color: #fff;

            &:hover {
                background-color: rgba(255, 255, 255, 0.05);
                border-color: #fff;
            }
        `}
`;

export { BotonMUI };
