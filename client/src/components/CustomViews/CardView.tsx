import React from 'react';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { DeviceApi } from '../../models/dataModels';
import { IDeviceViewProps } from '../../models/propModels';

function CardView(props: IDeviceViewProps) {
  const cards = React.useMemo(() => map(props.devices, (content: DeviceApi) => (
    <Card key={content.deviceId} sx={{ m: 2, width: 250 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Device details
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Name: {content.deviceName}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Model: {content.deviceModel}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Zipcode: {content.zipCode}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Status: {content.active ? "Active" : "Not active"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ fontSize: ".675rem" }} variant="outlined" onClick={() => props.handleStatus(content.deviceId, content.active)}>Change status</Button>
        <Link to={`/devices/${content.deviceId}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  )), [props]);

  return (
    <Box sx={{ minWidth: 275, display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: 'space-between' }}>
      {cards}
    </Box>
  );
}

export default React.memo(CardView);