import { mapLineChartData } from '../deviceMapper';

const mockData =  [
  [-4, "2021-08-23T06:22:55.689Z"],
  [-4, "2021-09-03T00:54:01.269Z"]
];

describe("mapping loan data", () => {
  it("while sending an empty array", () => {
      const results = mapLineChartData([]);
      const validationCheck = typeof results === 'object';
      expect(validationCheck).toBeTruthy();
  });
  
  it("test with mock data", () => {
      const results = mapLineChartData(mockData);
      const validationCheck = results.length === mockData.length;
      expect(validationCheck).toBeTruthy();
  });
});