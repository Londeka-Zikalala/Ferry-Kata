import ICar from './ICar';
import IFerry from './IFerry';

export default class Ferry implements IFerry {
  public cars: ICar[] = [];
  public  passengerCount: number = 0; 
  public  carCount: number = 0; 
  constructor(public allCars: number, public allPeople: number) {}

  // Method to board a car onto the ferry
 
  public useFerry(car: ICar): string {
    // Check if adding this car will exceed the ferry's limit
    if (this.carCount < this.allCars && this.passengerCount + car.passengerCount <= this.allPeople) {
      this.cars.push(car);
      this.carCount++;
      this.passengerCount += car.passengerCount;
      return 'allowed to board Ferry'; 
    }
    return 'Ferry limit exceeded'; 
  }
// Method to get the current number of passengers on the ferry
 
  public getPassengerCount(): number {
    return this.passengerCount;
  }

//Method to get the current number of cars on the ferry
 
  public getCarCount(): number {
    return this.carCount;
  }
}
