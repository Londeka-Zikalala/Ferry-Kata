"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ferry_1 = __importDefault(require("./Ferry"));
class ExtendedFerry extends Ferry_1.default {
    constructor(allCars, allPeople) {
        super(allCars, allPeople);
    }
    // Method to get the count of cars of a specific color on the ferry
    getColorCount(colour) {
        return this.cars.filter(car => car.colour === colour).length;
    }
    // Method to remove a car from the ferry by its id
    leaveFerry(carId) {
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
    useFerry(car) {
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
exports.default = ExtendedFerry;
