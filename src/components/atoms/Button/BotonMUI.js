import { Button, createTheme, darken, styled } from '@mui/material';
import { css } from '@mui/styled-engine';

const BotonMUI = styled(Button)`
    width: 200px;
    height: 45px;
    text-transform: none;
    border: none;
    color: #fff;

    ${(props) =>
        props.buttonContained &&
        css`
            width: 170px;
            height: 45px;
            background-color: #009673;

            &:hover {
                background-color: #007a5e;
            }
        `}

    ${(props) =>
        props.buttonOutlined &&
        css`
            width: 170px;
            height: 45px;
            border: 1px solid #fff;
            color: #fff;

            &:hover {
                background-color: rgba(255, 255, 255, 0.1);
                border-color: #fff;
            }
        `}

    ${(props) =>
        props.buttonContainedHeader &&
        css`
            width: 170px;
            height: 45px;
            background-color: rgba(26, 64, 76, 0.6);

            &:hover {
                background-color: rgba(26, 64, 76, 0.6);
            }
        `}

    ${(props) =>
        props.buttonContainedSmall &&
        css`
            width: 110px;
            height: 40px;
            background-color: #009673;

            &:hover {
                background-color: #007a5e;
            }
        `}

    ${(props) =>
        props.buttonLogOut &&
        css`
            background-color: rgba(239, 83, 80, 0.9);

            &:hover {
                background-color: rgba(236, 53, 50, 0.9);
            }
        `}

    ${(props) =>
        props.buttonUpload &&
        css`
            background-color: #F37D63;
            width: 120px;
            height: 35px;

            &:hover {
                background-color: #f27154;
            }
        `}
`;

export { BotonMUI };
