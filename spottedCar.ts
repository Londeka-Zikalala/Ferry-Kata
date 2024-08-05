import Car from './Car';

export default class spottedCar extends Car {
    private tripCounter: number = 0;
    constructor(id: string, colour: string, passengerCount: number) {
        // Call the constructor of the parent Car class
        super(id, colour, passengerCount);
      }
    

  public numberOfTrips(): void {
    this.tripCounter++;
  }

    //Method to get the current trip count.
  public getNumberOfTrips(): number {
    return this.tripCounter;
    }
    //Method to determine the fare for the trip based on the number of trips.
    public getDiscounts(): string {
        if (this.tripCounter >= 7) {
          return 'you go free!';
        } else if (this.tripCounter >= 3) {
          return 'half price!';
        } else {
          return 'full price';
        }
      }
}