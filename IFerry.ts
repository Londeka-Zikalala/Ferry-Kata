import ICar from './ICar';

export default interface IFerry {
  useFerry(car: ICar): string;
  getPassengerCount(): number;
  getCarCount(): number;
}
