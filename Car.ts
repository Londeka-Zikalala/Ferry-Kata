import ICar from './ICar';

export default class Car implements ICar {
  public readonly colour: string;
  public readonly passengerCount: number;

  constructor(colour: string, passengerCount: number) {
    this.colour = colour;
    this.passengerCount = passengerCount;
  }
}
