import assert from 'assert';
import ExtendedFerry from '../ExtendedFerry';
import Car from '../Car';

describe('ExtendedFerry Class', () => {
  it('should count the number of cars of a specific color', () => {
    const ferry = new ExtendedFerry(5, 20);
    const car1 = new Car('1', 'red', 4);
    const car2 = new Car('2', 'blue', 2);
    const car3 = new Car('3', 'red', 3);

    ferry.useFerry(car1);
    ferry.useFerry(car2);
    ferry.useFerry(car3);

    assert.equal(ferry.getColorCount('red'), 2);
    assert.equal(ferry.getColorCount('blue'), 1);
  });

  it('should update people and car counts correctly when a car leaves the ferry', () => {
    const ferry = new ExtendedFerry(5, 20);
    const car1 = new Car('1', 'red', 4);
    const car2 = new Car('2', 'blue', 2);

    ferry.useFerry(car1);
    ferry.useFerry(car2);

    assert.equal(ferry.getPassengerCount(), 6);
    assert.equal(ferry.getCarCount(), 2);

    ferry.leaveFerry('1');

    assert.equal(ferry.getPassengerCount(), 2);
    assert.equal(ferry.getCarCount(), 1);
  });

  it('should return correct message when car not found for removal', () => {
    const ferry = new ExtendedFerry(5, 20);
    const car1 = new Car('1', 'red', 4);

    ferry.useFerry(car1);

    const result = ferry.leaveFerry('2');
    assert.equal(result, 'car not found');
  });
});
