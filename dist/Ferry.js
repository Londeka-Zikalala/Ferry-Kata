"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ferry {
    constructor(allCars, allPeople) {
        this.allCars = allCars;
        this.allPeople = allPeople;
        this.cars = [];
        this.passengerCount = 0;
        this.carCount = 0;
    }
    // Method to board a car onto the ferry
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
    // Method to get the current number of passengers on the ferry
    getPassengerCount() {
        return this.passengerCount;
    }
    //Method to get the current number of cars on the ferry
    getCarCount() {
        return this.carCount;
    }
}
exports.default = Ferry;
