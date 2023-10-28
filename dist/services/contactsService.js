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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsService = void 0;
const client_review_json_1 = __importDefault(require("../assets/data/client_review.json"));
function get() {
    return __awaiter(this, void 0, void 0, function* () {
        const getAllContacts = yield client_review_json_1.default;
        if (!getAllContacts)
            throw new Error('Error obtaining all contacts');
        return getAllContacts;
    });
}
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const contact = yield client_review_json_1.default.find((element) => { return element.id === id; });
        if (!contact)
            throw new Error("Error obtaining the contact or the contact doesn't exist");
        return contact;
    });
}
function post(newContact) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client_review_json_1.default.push(newContact);
        return client_review_json_1.default;
    });
}
function put(id, update) {
    return __awaiter(this, void 0, void 0, function* () {
        const index = client_review_json_1.default.findIndex((element) => element.id === id);
        if (index === -1)
            throw new Error("The contact doesn't exist or couldn't be updated");
        client_review_json_1.default[index] = Object.assign(Object.assign({}, client_review_json_1.default[index]), update);
        return client_review_json_1.default;
    });
}
function _delete(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const index = client_review_json_1.default.findIndex((element) => element.id === id);
        if (index === -1)
            throw new Error("The contact doesn't exist or couldn't be deleted");
        client_review_json_1.default.splice(index, 1);
        return;
    });
}
exports.contactsService = {
    get,
    getById,
    post,
    put,
    delete: _delete,
};
//# sourceMappingURL=contactsService.js.map