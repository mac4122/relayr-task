import React from "react";
import { mapLineChartData } from '../../mappers/deviceMapper';
import { ILineChartProps } from '../../models/propModels';

const ReactHighstock = require('react-highcharts/ReactHighstock.src');

function LineChart({ data }: ILineChartProps) {
  const mappedData = mapLineChartData(data);
    const conf = {
        xAxis: {
          ordinal: false,
          type: 'datetime'
        },
        navigator: {
          xAxis: {
            ordinal: false
          }
        },
        series: [
          {
            "name": "AVERAGE",
            "type": "line",
            "data": mappedData,
            "keys": [
              "y",
              "x"
            ],
            "color": "steelblue",
            "_symbolIndex": 0
          }
        ]
      };
      
    return (
      <div data-test-id="line__chart__test__id" className="chart">
        <ReactHighstock config={conf} />
      </div>
    );
}

export default LineChart;
