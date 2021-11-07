import { Grid, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

const ActionButtons = () => {
    return (
        <Grid>
            <IconButton aria-label="see" sx={{ color: '#348FDC' }}>
                <VisibilityIcon />
            </IconButton>

            <IconButton aria-label="delete" sx={{ color: '#E74924' }}>
                <DeleteIcon />
            </IconButton>
        </Grid>
    );
};

export { ActionButtons };
