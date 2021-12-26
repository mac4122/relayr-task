import axios from 'axios';
import { keyBy } from 'lodash';
import { render, screen } from '@testing-library/react';
import Home from '../index';
import { AppStateContext } from '../../../context/deviceContext';
import { act } from 'react-dom/test-utils';
import { fakeResponse } from '../../../appMockData';

describe("testing of devices fetching api", () => {
    let mockPost: jest.SpyInstance;
    jest.mock('axios');
    beforeEach(() => {
        mockPost = jest.spyOn(axios, 'get')
    });
    
    afterEach(() => {
        jest.clearAllMocks();
    });
  it('expect api call to fetch devices', async () => {
    mockPost.mockImplementation(() => Promise.resolve(fakeResponse));
    const dispatch = jest.fn();
    const state = {
        currentView: 'table',
        devices: keyBy(fakeResponse.data, 'deviceId'),
        devicesToShow: keyBy(fakeResponse.data, 'deviceId'),
        filters: { name: '' }
    };
    act(() => { render(
    <AppStateContext.Provider value={{ state, dispatch }}>
      <Home />
    </AppStateContext.Provider>
    )});
    expect(screen.getByText(/Select view/i)).toBeInTheDocument();
  });
});