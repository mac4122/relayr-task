export interface AppState {
  devices: MDevices;
  devicesToShow: MDevices;
  filters: Filters,
  currentView: string;
}

export interface DeviceApi {
  deviceId: string;
  createdAt: string;
  updatedAt: string;
  deviceName: string;
  deviceModel: string;
  location: Location;
  measurementModels: MeasurementModel[];
  measurements: (number | string)[][][];
  active: boolean;
  zipCode: string;
  metadata: Metadata;
  alerts: Alert[];
}

export interface MDevices {
  [deviceId: string]: DeviceApi;
}

interface Location {
    lat: string;
    lon: string;
}

export interface MeasurementModel {
    name: string;
    type: string;
    unit: string;
    min: number;
    max: number;
}

interface Metadata {
    application: string;
    capacitor: string;
    protocol: string;
}

interface Alert {
    name: string;
    severity: number;
    state: string;
    timestamp: string;
}

export interface ReducerAction {
    type: string;
    payload?: any;
  };

export interface Filters {
  name: string;
}

export interface IParams {
  deviceId: string;
}