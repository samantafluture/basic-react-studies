import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const minhaCor = 'yellow';

export const MinhaDiv = styled('div')`
    background-color: ${minhaCor};
    color: ${( { theme }) => theme.palette.primary.dark };

    span {
        color: #555;
    }
`;

export const MeuBotao = styled(Button)`
    background-color: #ccc;
    color: #000;
    padding: ${({ theme }) => theme.spacing(2)};

    &.MuiButton-root {
        color: #f0f0f0;
    }
`;
