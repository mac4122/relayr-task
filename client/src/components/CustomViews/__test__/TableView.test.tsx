import React from 'react';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { screen, render, fireEvent } from '@testing-library/react';
import TableView from '../TableView';
import { AppStateContext } from '../../../context/deviceContext';
import { fakeResponseByKey } from '../../../appMockData';

const mockFunction = jest.fn();

describe("test the view components", () => {
  it("render the view controller with table view", () => {
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
        <TableView devices={fakeResponseByKey} handleStatus={mockFunction} />
      </AppStateContext.Provider>
      </Router>);
    const cellElement = screen.getByText(/Device name/i);
    expect(cellElement).toBeInTheDocument();
    const buttonElement = screen.getByText(/Change status/i);
    fireEvent.click(buttonElement);
    expect(mockFunction).toBeCalledTimes(1);
  });
});