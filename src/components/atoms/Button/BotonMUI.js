import { Button, createTheme, darken, styled } from '@mui/material';

/*
const BotonMUI = styled(Button)`
    width: 200px;
    height: 45px;
    text-transform: none;

    ${props => props.buttonHeaderForm && css`
        width: 170px;
        height: 45px;
    `}
`;
*/

const buttonTheme = createTheme({
    palette: {
        primary: {
            main: '#8ab4f8'
        }
    }
});

const BotonMUI = styled(Button)(
    ({ theme }) => `
    color: ${theme.palette.primary.main};
`
);

export { BotonMUI, buttonTheme };
