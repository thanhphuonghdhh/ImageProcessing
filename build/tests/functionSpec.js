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
const functionHelpers_1 = require("../utilities/functionHelpers");
describe("Test function", () => {
    it("should return true to show file exists in folder", () => {
        const outputPath = "./images/full/";
        const isExist = (0, functionHelpers_1.isFileExistinFolder)("chart.jpg", outputPath);
        expect(isExist).toBe(true);
    });
    it("should return false to show file not exists in folder", () => {
        const outputPath = "./images/full/";
        const isExist = (0, functionHelpers_1.isFileExistinFolder)("chart1.jpg", outputPath);
        expect(isExist).toBe(false);
    });
    it("should not throw an error when resizing image", () => {
        const inputPath = "./images/full/fjord.jpg";
        const outputPath = "./images/thumb/fjord-200-250.jpg";
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, functionHelpers_1.imageResizing)(inputPath, outputPath, 200, 250);
        })).not.toThrow();
    });
});
