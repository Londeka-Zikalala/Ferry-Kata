import ICar from './ICar';

export default class Car implements ICar {
  public readonly colour: string;
  public readonly passengerCount: number;
  public readonly id: string;

  constructor(id: string, colour: string, passengerCount: number) {
    this.id = id;
    this.colour = colour;
    this.passengerCount = passengerCount;
  }

}
