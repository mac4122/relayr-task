import { MDevices, DeviceApi } from './dataModels';

export interface IViewControllerProps {
  changeView: (viewName: string) => void;
  currentView: string;
}

export interface IDeviceViewProps {
  devices: MDevices,
  handleStatus: (deviceId: string, status: boolean) => void;
}

export interface IChartsProps {
  device: DeviceApi
}

export interface ILineChartProps {
  data: (string | number)[][];
}