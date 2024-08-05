"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const spottedCar_1 = __importDefault(require("../spottedCar"));
describe('spottedCar Class', () => {
    // verify that a spotted car is created with the specified id, color, and passenger count
    it('should create a car with specified id, color, and passenger count', () => {
        const car = new spottedCar_1.default('car1', 'red', 4);
        assert_1.default.equal(car.id, 'car1');
        assert_1.default.equal(car.colour, 'red');
        assert_1.default.equal(car.passengerCount, 4);
    });
    it('should increment the trip count', () => {
        const car = new spottedCar_1.default('car1', 'red', 4);
        car.numberOfTrips();
        assert_1.default.equal(car.getNumberOfTrips(), 1);
    });
    //No discount before 3 trips
    it('should return full price before 3 trips', () => {
        const car = new spottedCar_1.default('car1', 'red', 4);
        assert_1.default.equal(car.getDiscounts(), 'full price');
        car.numberOfTrips();
        car.numberOfTrips();
        car.getNumberOfTrips();
        assert_1.default.equal(car.getDiscounts(), 'full price');
    });
    // the discount is half price after 3 trips
    it('should return half price after 3 trips', () => {
        const car = new spottedCar_1.default('car1', 'red', 4);
        car.numberOfTrips();
        car.numberOfTrips();
        car.numberOfTrips();
        car.getNumberOfTrips();
        assert_1.default.equal(car.getDiscounts(), 'half price!');
    });
    // Free trip after 7 trips
    it('should return you go free after 7 trips', () => {
        const car = new spottedCar_1.default('car1', 'red', 4);
        car.numberOfTrips();
        car.numberOfTrips();
        car.numberOfTrips();
        car.numberOfTrips();
        car.numberOfTrips();
        car.numberOfTrips();
        car.numberOfTrips();
        car.getNumberOfTrips();
        assert_1.default.equal(car.getDiscounts(), 'you go free!');
    });
});
