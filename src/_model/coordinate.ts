import { Helper } from 'src/_utils/helper';

export class Coordinate {
  constructor(public latitude: number, public longitude: number, public radius?: number) { }

  public addLatitude(value: number, precision = 4) {
    return new Coordinate(Helper.TruncDecimals(this.latitude + value, precision), this.longitude);
  }
  public addLongitude(value: number, precision = 4) {
    return new Coordinate(this.latitude, Helper.TruncDecimals(this.longitude + value, precision));
  }
}