import { Vector } from "./vector";

export class Layer {
  constructor(public limit: Vector[] = [], public innerLayers: Layer[] = []) { }

  public shrunk(): Layer {
    const layer = [...this.limit];
    const array = [];
    let runner: Vector = layer[0].copy;
    for (let i = 1; i < layer.length; i++) {
      if (runner.isCollinear(layer[i].end)) {
        runner = new Vector(runner.start, layer[i].end);
      } else {
        array.push(runner.copy);
        runner = layer[i].copy;
      }
    }
    array.push(runner.copy);
    return new Layer(array, this.innerLayers);
  }
}