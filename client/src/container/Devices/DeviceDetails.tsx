import React from 'react';
import { useParams } from 'react-router-dom';
import { map } from 'lodash';
import { Container, Typography, Table, TableCell, Paper, TableHead, TableRow, TableBody, TableContainer } from '@mui/material';
import { AppStateContext } from '../../context/deviceContext';
import { IParams, DeviceApi } from '../../models/dataModels';
import Charts from '../../components/Charts';

export default function DeviceDetails() {
  const { state: { devicesToShow } } = React.useContext(AppStateContext);
  const { deviceId } = useParams<IParams>();

  const deviceDetails: DeviceApi = React.useMemo(() =>
    devicesToShow[deviceId]
  , [devicesToShow, deviceId]);

  return (
    <Container>
      <Typography variant="h3" component="div">
          Device details 
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Name: {deviceDetails?.deviceName}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Model: {deviceDetails?.deviceModel}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Location: latitude {deviceDetails?.location?.lat} | longitude {deviceDetails?.location?.lon}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Status: {deviceDetails?.active}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Zipcode: {deviceDetails?.zipCode}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Metadata: application - {deviceDetails?.metadata?.application} | capacitor - {deviceDetails?.metadata?.capacitor} | protocol - {deviceDetails.metadata?.protocol}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Alerts:
      </Typography>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="alert table">
        <TableHead>
          <TableRow>
            <TableCell component="th">Alert name</TableCell>
            <TableCell align="right">Alert severity</TableCell>
            <TableCell align="right">Alert state</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {map(deviceDetails?.alerts, al => (
            <TableRow
            key={al.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell>{al?.name}</TableCell>
            <TableCell align="right">{al?.severity}</TableCell>
            <TableCell align="right">{al?.state}</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Measurement charts:
    </Typography>
    <Charts device={deviceDetails} />
    </Container>
  );
}