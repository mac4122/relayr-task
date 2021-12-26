import { filter, keyBy } from 'lodash';
import { AppState } from '../models/dataModels';
import { DataViews } from '../models/staticModels';
import { AppStateActionTypes, AppStateActions } from '../actions/deviceActions';

export const initialState: AppState = {
    devices: {},
    devicesToShow: {},
    filters: { name: '' },
    currentView: DataViews.TABLE
};

export function deviceReducer(
  state: AppState, 
  action: AppStateActions
): AppState {
    switch(action.type) {
        case AppStateActionTypes.LOAD_DEVICES:
            return {
                ...state,
                devices: action.payload,
                devicesToShow: action.payload
            };
        case AppStateActionTypes.UPDATE_FILTERS_BYNAME:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    name: action.payload
                },
                devicesToShow: keyBy(filter(state.devices, device => device.deviceName.includes(action.payload)), 'deviceId')
            };
        case AppStateActionTypes.UPDATE_DEVICE_STATUS:
            return {
                ...state,
                devices: {
                    ...state.devices,
                    [action.payload]: {
                        ...state.devices[action.payload],
                        active: !state.devices[action.payload].active
                    }
                },
                devicesToShow: {
                    ...state.devicesToShow,
                    [action.payload]: {
                        ...state.devicesToShow[action.payload],
                        active: !state.devicesToShow[action.payload].active
                    }
                }
            };
        case AppStateActionTypes.UPDATE_VIEW:
            return {
                ...state,
                currentView: action.payload
            };
        default:
            return state;
    }
}