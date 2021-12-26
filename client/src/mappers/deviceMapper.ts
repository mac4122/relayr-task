import { map, head, last } from 'lodash';

export function mapLineChartData(data: (string | number)[][]): (string | number | undefined)[][] {
    return map(data, d => [head(d), new Date(`${last(d)}`).getTimezoneOffset() * 60 * 1000]);
}