import { createAction, ActionsUnion } from '../utils/actionCreator';
import { MDevices } from '../models/dataModels';

export enum AppStateActionTypes {
    LOAD_DEVICES = 'Load devices initially',
    UPDATE_VIEW = 'Update view',
    UPDATE_FILTERS_BYNAME = 'Update filters to show filtered devices by device names',
    UPDATE_DEVICE_STATUS = 'Update device status',
}

export const Actions = {
  loadDevices: (devices: MDevices) => 
    createAction(AppStateActionTypes.LOAD_DEVICES, devices),
  updateView: (view: string) => 
    createAction(AppStateActionTypes.UPDATE_VIEW, view),
  updateFilters: (filterStr: string) => 
    createAction(AppStateActionTypes.UPDATE_FILTERS_BYNAME, filterStr),
  updateDeviceStatus: (deviceId: string) =>
    createAction(AppStateActionTypes.UPDATE_DEVICE_STATUS, deviceId),
};

export type AppStateActions = ActionsUnion<typeof Actions>;
