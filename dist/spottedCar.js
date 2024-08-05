"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("./Car"));
class spottedCar extends Car_1.default {
    constructor(id, colour, passengerCount) {
        // Call the constructor of the parent Car class
        super(id, colour, passengerCount);
        this.tripCounter = 0;
    }
    numberOfTrips() {
        this.tripCounter++;
    }
    //Method to get the current trip count.
    getNumberOfTrips() {
        return this.tripCounter;
    }
    //Method to determine the fare for the trip based on the number of trips.
    getDiscounts() {
        if (this.tripCounter >= 7) {
            return 'you go free!';
        }
        else if (this.tripCounter >= 3) {
            return 'half price!';
        }
        else {
            return 'full price';
        }
    }
}
exports.default = spottedCar;
