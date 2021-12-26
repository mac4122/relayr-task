import React from 'react';
import { keyBy } from 'lodash';
import { initialState, deviceReducer } from "../../reducers/deviceReducer";
import { Actions } from '../../actions/deviceActions';
import { AppStateContext } from "../../context/deviceContext";
import { fetchDevices } from "../../services/deviceServices";
import { DeviceApi } from "../../models/dataModels";
import DeviceRouting from '../../routing/deviceRouting';

function Home() {
  const [state, dispatch] = React.useReducer(deviceReducer, initialState);

  const getDevices = () => {
    fetchDevices()
    .then((res: DeviceApi[]) => 
    {
      dispatch(Actions.loadDevices(keyBy(res, 'deviceId')));
    });
  };

  React.useEffect(() => {
    getDevices();
  }, []);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      <DeviceRouting />
    </AppStateContext.Provider>
  );
}

export default Home;
