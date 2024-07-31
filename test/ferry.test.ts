import assert from 'assert';
import Car from '../Car';
import Ferry from '../Ferry';

describe('Ferry Class', () => {
  it('should allow a car to board there is enough space', () => {
    const ferry = new Ferry(5, 20);
    const car = new Car('red', 4);

    const result = ferry.useFerry(car);

    assert.equal(result, 'allowed to board Ferry');
    assert.equal(ferry.getPassengerCount(), 4);
    assert.equal(ferry.getCarCount(), 1);
  });

  it('should stop a car from boarding if there is not enough space', () => {
    const ferry = new Ferry(1, 20);
    const car1 = new Car('red', 4);
    const car2 = new Car('blue', 2);

    ferry.useFerry(car1);
    const result = ferry.useFerry(car2);

    assert.equal(result, 'Ferry limit exceeded');
    assert.equal(ferry.getPassengerCount(), 4);
    assert.equal(ferry.getCarCount(), 1);
  });

  it('should not allow a car if there is not enough passenger space', () => {
    const ferry = new Ferry(5, 5);
    const car1 = new Car('red', 4);
    const car2 = new Car('blue', 2);

    ferry.useFerry(car1);
    const result = ferry.useFerry(car2);

    assert.equal(result, 'Ferry limit exceeded');
    assert.equal(ferry.getPassengerCount(), 4);
    assert.equal(ferry.getCarCount(), 1);
  });

  it('should accept multiple cars if there is enough space', () => {
    const ferry = new Ferry(5, 20);
    const car1 = new Car('red', 4);
    const car2 = new Car('blue', 2);

    ferry.useFerry(car1);
    const result = ferry.useFerry(car2);

    assert.equal(result, 'allowed to board Ferry');
    assert.equal(ferry.getPassengerCount(), 6);
    assert.equal(ferry.getCarCount(), 2);
  });
});
