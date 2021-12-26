import React from 'react';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { screen, render } from '@testing-library/react';
import Devices from '../Devices';
import { AppStateContext } from '../../../context/deviceContext';
import { fakeResponseByKey } from '../../../appMockData';

describe("test the devices components", () => {
  it("render the device component to be available and table view if current view is table", () => {
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
        <Devices />
      </AppStateContext.Provider>
      </Router>);
    const containerElement = screen.getByTestId("container__test__id");
    const tabelElement = screen.getByTestId("table__view__test__id");
    expect(containerElement).toBeInTheDocument();
    expect(tabelElement).toBeInTheDocument();
  });

  it("render the card view if current view is card", () => {
    const history = createMemoryHistory();
    const dispatch = jest.fn();
    const state = {
      currentView: 'card',
      devices: fakeResponseByKey,
      devicesToShow: fakeResponseByKey,
      filters: { name: '' }
    };
    render(
      <Router history={history}>
      <AppStateContext.Provider value={{ state, dispatch }}>
        <Devices />
      </AppStateContext.Provider>
      </Router>);
    const cardElement = screen.getByText(/Device details/i);
    expect(cardElement).toBeInTheDocument();
  });
});