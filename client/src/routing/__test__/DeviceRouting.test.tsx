import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import DeviceRouting from '../deviceRouting';
import { AppStateContext } from '../../context/deviceContext';
import { fakeResponseByKey } from '../../appMockData';

describe("Routing test", () => {
    it('render devices', () => {
      const history = createMemoryHistory();
      const dispatch = jest.fn();
      const state = {
        currentView: 'table',
        devices: fakeResponseByKey,
        devicesToShow: fakeResponseByKey,
        filters: { name: '' }
      };
      render(
        <Router history={history}>
          <AppStateContext.Provider value={{ state, dispatch }}>
          <DeviceRouting />
          </AppStateContext.Provider>
        </Router>,
      )
      expect(screen.getByText(/Select view/i)).toBeInTheDocument();
    });
});