"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const Car_1 = __importDefault(require("../Car"));
describe('The Car Class', () => {
    it('should create a car with specified color and passenger count', () => {
        const car = new Car_1.default('1', 'red', 4);
        assert_1.default.equal(car.id, '1');
        assert_1.default.equal(car.colour, 'red');
        assert_1.default.equal(car.passengerCount, 4);
    });
    it('should create a car with zero passengers', () => {
        const car = new Car_1.default('2', 'blue', 0);
        assert_1.default.equal(car.colour, 'blue');
        assert_1.default.equal(car.passengerCount, 0);
    });
    it('should create a car with a large number of passengers', () => {
        const car = new Car_1.default('2', 'green', 10);
        assert_1.default.equal(car.colour, 'green');
        assert_1.default.equal(car.passengerCount, 10);
    });
});
