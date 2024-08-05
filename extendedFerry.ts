
import ICar from './ICar';
import IFerry from './IFerry';
import Ferry from './Ferry';

export default class ExtendedFerry extends Ferry {
  constructor(allCars: number, allPeople: number) {
    super(allCars, allPeople);
  }

  // Method to get the count of cars of a specific color on the ferry
  public getColorCount(colour: string): number {
    return this.cars.filter(car => car.colour === colour).length;
  }

  // Method to remove a car from the ferry by its id
  public leaveFerry(carId: string): string {
    const carIndex = this.cars.findIndex(car => car.id === carId);
    if (carIndex !== -1) {
      const car = this.cars[carIndex];
      this.cars.splice(carIndex, 1);
      this.carCount--;
      this.passengerCount -= car.passengerCount;
      return 'car removed';
    }
    return 'car not found';
  }

  // Overriding the useFerry method to utilize the enhanced functionality
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
}
