import React from 'react';
import { screen, render } from '@testing-library/react';
import Charts from '../index';
import { fakeResponse } from '../../../appMockData';

const mockData = fakeResponse.data[0];

describe("test the chart component", () => {
  it("render the correct number of measurements or not", () => {
    render(<Charts device={mockData} />);
    const textElements = screen.getAllByText(/Measurement unit/i);
    const isValidated = textElements.length === mockData.measurementModels.length;
    expect(isValidated).toBeTruthy();
  });
});