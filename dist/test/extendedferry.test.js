"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const ExtendedFerry_1 = __importDefault(require("../ExtendedFerry"));
const Car_1 = __importDefault(require("../Car"));
describe('ExtendedFerry Class', () => {
    it('should count the number of cars of a specific color', () => {
        const ferry = new ExtendedFerry_1.default(5, 20);
        const car1 = new Car_1.default('1', 'red', 4);
        const car2 = new Car_1.default('2', 'blue', 2);
        const car3 = new Car_1.default('3', 'red', 3);
        ferry.useFerry(car1);
        ferry.useFerry(car2);
        ferry.useFerry(car3);
        assert_1.default.equal(ferry.getColorCount('red'), 2);
        assert_1.default.equal(ferry.getColorCount('blue'), 1);
    });
    it('should update people and car counts correctly when a car leaves the ferry', () => {
        const ferry = new ExtendedFerry_1.default(5, 20);
        const car1 = new Car_1.default('1', 'red', 4);
        const car2 = new Car_1.default('2', 'blue', 2);
        ferry.useFerry(car1);
        ferry.useFerry(car2);
        assert_1.default.equal(ferry.getPassengerCount(), 6);
        assert_1.default.equal(ferry.getCarCount(), 2);
        ferry.leaveFerry('1');
        assert_1.default.equal(ferry.getPassengerCount(), 2);
        assert_1.default.equal(ferry.getCarCount(), 1);
    });
    it('should return correct message when car not found for removal', () => {
        const ferry = new ExtendedFerry_1.default(5, 20);
        const car1 = new Car_1.default('1', 'red', 4);
        ferry.useFerry(car1);
        const result = ferry.leaveFerry('2');
        assert_1.default.equal(result, 'car not found');
    });
});
