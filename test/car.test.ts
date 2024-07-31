import assert from 'assert';
import Car from '../Car';

describe('The Car Class', () => {
  it('should create a car with specified color and passenger count', () => {
    const car = new Car('red', 4);
    assert.equal(car.colour, 'red');
    assert.equal(car.passengerCount, 4);
  });

  it('should create a car with zero passengers', () => {
    const car = new Car('blue', 0);
    assert.equal(car.colour, 'blue');
    assert.equal(car.passengerCount, 0);
  });

  it('should create a car with a large number of passengers', () => {
    const car = new Car('green', 10);
    assert.equal(car.colour, 'green');
    assert.equal(car.passengerCount, 10);
  });
});
