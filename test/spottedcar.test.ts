import assert from 'assert';
import spottedCar from '../spottedCar';

describe('spottedCar Class', () => {
  // verify that a spotted car is created with the specified id, color, and passenger count
  it('should create a car with specified id, color, and passenger count', () => {
    const car = new spottedCar('car1', 'red', 4);
    assert.equal(car.id, 'car1');
    assert.equal(car.colour, 'red');
    assert.equal(car.passengerCount, 4);
  });

  it('should increment the trip count', () => {
    const car = new spottedCar('car1', 'red', 4);
    car.numberOfTrips();
    assert.equal(car.getNumberOfTrips(), 1);
  });
//No discount before 3 trips
  it('should return full price before 3 trips', () => {
    const car = new spottedCar('car1', 'red', 4);
    assert.equal(car.getDiscounts(), 'full price');
    car.numberOfTrips();
    car.numberOfTrips();
    car.getNumberOfTrips()
    assert.equal(car.getDiscounts(), 'full price');
  });

  // the discount is half price after 3 trips
  it('should return half price after 3 trips', () => {
    const car = new spottedCar('car1', 'red', 4);
    car.numberOfTrips();
    car.numberOfTrips();
    car.numberOfTrips();
    car.getNumberOfTrips();
    assert.equal(car.getDiscounts(), 'half price!');
  });

  // Free trip after 7 trips
  it('should return you go free after 7 trips', () => {
    const car = new spottedCar('car1', 'red', 4);
    car.numberOfTrips();
    car.numberOfTrips();
    car.numberOfTrips();
    car.numberOfTrips();
    car.numberOfTrips();
    car.numberOfTrips();
    car.numberOfTrips();
    car.getNumberOfTrips();
    assert.equal(car.getDiscounts(), 'you go free!');
  });
});
