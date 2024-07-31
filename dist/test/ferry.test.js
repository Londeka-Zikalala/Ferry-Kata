"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const Car_1 = __importDefault(require("../Car"));
const Ferry_1 = __importDefault(require("../Ferry"));
describe('Ferry Class', () => {
    it('should allow a car to board there is enough space', () => {
        const ferry = new Ferry_1.default(5, 20);
        const car = new Car_1.default('red', 4);
        const result = ferry.useFerry(car);
        assert_1.default.equal(result, 'allowed to board Ferry');
        assert_1.default.equal(ferry.getPassengerCount(), 4);
        assert_1.default.equal(ferry.getCarCount(), 1);
    });
    it('should stop a car from boarding if there is not enough space', () => {
        const ferry = new Ferry_1.default(1, 20);
        const car1 = new Car_1.default('red', 4);
        const car2 = new Car_1.default('blue', 2);
        ferry.useFerry(car1);
        const result = ferry.useFerry(car2);
        assert_1.default.equal(result, 'Ferry limit exceeded');
        assert_1.default.equal(ferry.getPassengerCount(), 4);
        assert_1.default.equal(ferry.getCarCount(), 1);
    });
    it('should not allow a car if there is not enough passenger space', () => {
        const ferry = new Ferry_1.default(5, 5);
        const car1 = new Car_1.default('red', 4);
        const car2 = new Car_1.default('blue', 2);
        ferry.useFerry(car1);
        const result = ferry.useFerry(car2);
        assert_1.default.equal(result, 'Ferry limit exceeded');
        assert_1.default.equal(ferry.getPassengerCount(), 4);
        assert_1.default.equal(ferry.getCarCount(), 1);
    });
    it('should accept multiple cars if there is enough space', () => {
        const ferry = new Ferry_1.default(5, 20);
        const car1 = new Car_1.default('red', 4);
        const car2 = new Car_1.default('blue', 2);
        ferry.useFerry(car1);
        const result = ferry.useFerry(car2);
        assert_1.default.equal(result, 'allowed to board Ferry');
        assert_1.default.equal(ferry.getPassengerCount(), 6);
        assert_1.default.equal(ferry.getCarCount(), 2);
    });
});
