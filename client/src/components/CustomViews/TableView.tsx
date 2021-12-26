import React from 'react';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { DeviceApi } from '../../models/dataModels';
import { IDeviceViewProps } from '../../models/propModels';

function TableView(props: IDeviceViewProps) {
  const rows = React.useMemo(() => map(props.devices, (row: DeviceApi) => (
    <TableRow
      key={row.deviceId}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <Link to={`/devices/${row.deviceId}`}>{row.deviceName}</Link>
      </TableCell>
      <TableCell align="right">{row.deviceModel}</TableCell>
      <TableCell align="right">{row.active ? "true" : "false"}</TableCell>
      <TableCell align="right">{row.zipCode}</TableCell>
      <TableCell align="right">
        <Button variant="outlined" onClick={() => props.handleStatus(row.deviceId, row.active)}>Change status</Button>
      </TableCell>
    </TableRow>
  )), [props]);

  return (
    <TableContainer component={Paper}>
      <span data-testid="table__view__test__id" />
      <Table sx={{ minWidth: 650 }} aria-label="device table">
        <TableHead>
          <TableRow>
            <TableCell component="th">Device name</TableCell>
            <TableCell align="right">Device model</TableCell>
            <TableCell align="right">Active</TableCell>
            <TableCell align="right">Zipcode</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default React.memo(TableView);