import React from 'react';
import { Box } from '@mui/material';
import ViewController from './ViewController';
import SearchController from './SearchController';

export default function Controls() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ViewController />
            <SearchController />
        </Box>
    );
}