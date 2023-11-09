"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingsController = void 0;
const express_1 = require("express");
const bookingService_1 = require("../services/bookingService");
const validationMiddleware_1 = require("../validator/validationMiddleware");
const validationSchemas_1 = require("../validator/validationSchemas");
exports.bookingsController = (0, express_1.Router)();
exports.bookingsController.get('/', (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookingsData = yield bookingService_1.bookingService.fetchAll();
        res.json({ bookingsData });
    }
    catch (error) {
        next(error);
    }
    ;
}));
exports.bookingsController.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booking = yield bookingService_1.bookingService.fetchOne(req.params.id);
        res.json({ booking });
    }
    catch (error) {
        next(error);
    }
}));
exports.bookingsController.post('/', (0, validationMiddleware_1.generateValidationMiddleware)(validationSchemas_1.bookingSchema), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBooking = yield bookingService_1.bookingService.createOne(req.body);
        res.json({ newBooking });
    }
    catch (error) {
        next(error);
    }
}));
exports.bookingsController.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield bookingService_1.bookingService.deleteOne(req.params.id);
        res.json('The booking was correctly deleted.');
    }
    catch (error) {
        next(error);
    }
}));
exports.bookingsController.put('/:id', (0, validationMiddleware_1.generateValidationMiddleware)(validationSchemas_1.bookingSchema), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBooking = yield bookingService_1.bookingService.editOne(req.params.id || '', req.body);
        res.json({ updatedBooking });
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=bookingsController.js.map