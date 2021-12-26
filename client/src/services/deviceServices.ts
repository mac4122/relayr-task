import axios from "axios";
import { DeviceApi } from "../models/dataModels"; 

export function fetchDevices(): Promise<DeviceApi[]> {
  return axios.get('http://localhost:8888/api/devices')
  .then(response => response.data.data)
  .catch(() => [] as DeviceApi[]);
}

export function toggleStatus(deviceId: string, status: boolean) {
  const data = { active: status };
  return axios.put(
    `http://localhost:8888/api/devices/${deviceId}`,
    JSON.stringify(data)
    )
    .then(() => { return true; })
    .catch(() => { return false; });
}