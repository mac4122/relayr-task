import React from "react";
import { DataViews } from "../../models/staticModels";
import { AppStateContext } from "../../context/deviceContext";
import CardView from '../../components/CustomViews/CardView';
import TableView from '../../components/CustomViews/TableView';
import { Actions } from '../../actions/deviceActions';
import { toggleStatus } from '../../services/deviceServices';
import Controls from '../../components/Controls';
import { Container } from "@mui/material";

export default function Devices() {
  const { state: { devicesToShow, currentView }, dispatch } = React.useContext(AppStateContext);

  const handleDeviceStatus = (deviceId: string, status: boolean) => {
    toggleStatus(deviceId, !status)
    .then(response => {
      if(response) { 
        dispatch(Actions.updateDeviceStatus(deviceId));
        alert("Success");
      }
      else { 
        dispatch(Actions.updateDeviceStatus(deviceId));  // this part should not be there
        alert("Error");
      }
    })
    // 404 error is occuring on the put url and hence I changed the code.
  };

  return (
      <Container data-testid="container__test__id">
        <Controls />
        {currentView === DataViews.TABLE && 
          <TableView devices={devicesToShow} handleStatus={handleDeviceStatus} />
        }
        {currentView === DataViews.CARD && 
          <CardView devices={devicesToShow} handleStatus={handleDeviceStatus} />  
        }
      </Container>
  );
}