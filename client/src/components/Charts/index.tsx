import React from 'react';
import { map } from 'lodash';
import { Box, Typography } from '@mui/material';
import { IChartsProps } from '../../models/propModels';
import { MeasurementModel } from '../../models/dataModels';
import LineChart from './LineChart';

export default function Charts({ device }: IChartsProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {map(device.measurementModels, (measurement: MeasurementModel, index: number) => (
        <div key={`${index}`}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Measurement unit: {measurement.name}
        </Typography>
        <LineChart data={device.measurements[index]} />
        </div>
      ))}
    </Box>
  );
}