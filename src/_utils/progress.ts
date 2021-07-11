import { Helper } from "./helper";

export class Progress {
  private progress: number;
  private total: number;
  public step: number = 0;
  private ini: Date;
  constructor(total: number) {
    this.total = total;
    this.step = this.total / 10;
    this.progress = 0;
  }

  start() {
    this.ini = new Date();
    console.log(`start ${this.total}`, this.ini);
  }

  stop() {
    const end = new Date();
    console.log(`duration ${Helper.TruncDecimals(end.getTime() / 1000 - this.ini.getTime() / 1000, 3)}s ${end}`);
  }

  check() {
    this.progress++;
    if (this.progress % this.step === 0) {
      console.log(`${Math.round((this.progress * 100) / this.total)}%`);
    }
  }
}