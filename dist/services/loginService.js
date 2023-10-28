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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const defaultUser = {
    email: "email@email.com",
    password: "1234",
};
const secret = process.env.SECRET_KEY || '';
function login(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        if (email === defaultUser.email && password === defaultUser.password)
            return signJWT({ email });
        throw new Error('Wrong email or password!');
    });
}
function signJWT(payload) {
    const token = jsonwebtoken_1.default.sign(payload, secret, { expiresIn: '1h' });
    return { payload, token };
}
function verifyJWT(token) {
    const verifiedResult = jsonwebtoken_1.default.verify(token, secret);
    return verifiedResult;
}
;
const loginService = {
    login,
    signJWT,
    verifyJWT,
};
exports.default = loginService;
//# sourceMappingURL=loginService.js.map