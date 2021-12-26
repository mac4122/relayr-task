import React from 'react';
import {Route, MemoryRouter} from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import DeviceDetails from '../DeviceDetails';
import { AppStateContext } from '../../../context/deviceContext';
import { fakeResponseByKey } from '../../../appMockData';

const mockDataId = fakeResponseByKey['40552302-6ea2-476d-9cad-c3ab142a2ef5'].deviceId;

describe("test the devices details components", () => {
  it("render the device details", () => {
    const dispatch = jest.fn();
    const state = {
      currentView: 'table',
      devices: fakeResponseByKey,
      devicesToShow: fakeResponseByKey,
      filters: { name: '' }
    };
    render(
      <MemoryRouter initialEntries={[`devices/${mockDataId}`]}>
        <Route path="devices/:deviceId">
          <AppStateContext.Provider value={{ state, dispatch }}>
            <DeviceDetails />
          </AppStateContext.Provider>
        </Route>
      </MemoryRouter>);
    const headingElement = screen.getByText(/Device details/i);
    expect(headingElement).toBeInTheDocument();
  });
});