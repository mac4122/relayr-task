import React from 'react';
import { AppState } from '../models/dataModels';

interface AppContextModel {
  state: AppState;
  dispatch: React.Dispatch<any>;
}

export const AppStateContext = React.createContext({} as AppContextModel);
