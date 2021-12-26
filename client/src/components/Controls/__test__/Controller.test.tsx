import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import SearchController from '../SearchController';
import ViewController from '../ViewController';
import { AppStateContext } from '../../../context/deviceContext';
import { fakeResponseByKey } from '../../../appMockData';

describe("test the controller components", () => {
  it("render the view controller with table view", () => {
    const dispatch = jest.fn();
    const state = {
      currentView: 'table',
      devices: fakeResponseByKey,
      devicesToShow: fakeResponseByKey,
      filters: { name: '' }
    };
    render(
      <AppStateContext.Provider value={{ state, dispatch }}>
        <ViewController/>
      </AppStateContext.Provider>);
    const TableInput = screen.getByLabelText(/Table/i);
    expect(TableInput).toBeChecked();
  });

  it("test search controller", () => {
    const dispatch = jest.fn();
    const state = {
      currentView: 'table',
      devices: fakeResponseByKey,
      devicesToShow: fakeResponseByKey,
      filters: { name: '' }
    };
    render(
      <AppStateContext.Provider value={{ state, dispatch }}>
        <SearchController/>
      </AppStateContext.Provider>);
    const SearchInput = screen.getByLabelText(/search device by name/i);
    expect(SearchInput.value).toBe("");
    fireEvent.change(SearchInput, { target: { value: "electric" } });
    expect(SearchInput.value).toBe("electric");
  });
});