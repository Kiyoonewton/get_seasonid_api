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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chromium_min_1 = require("@sparticuz/chromium-min");
var puppeteer_core_1 = require("puppeteer-core");
var apiEndpoint = "https://s5.sir.sportradar.com/bet9javirtuals/en/1/category/1111";
module.exports = function (vflId) { return __awaiter(void 0, void 0, void 0, function () {
    var browser, _a, _b, page, _c, _d, _e, _f, _g, _h, bunPath, achivePath, clickFormCell, bunPathHandle, achivePathHandle, clickFormCellHandle, currentUrl, seasonKey;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _b = (_a = puppeteer_core_1.default).launch;
                _j = {
                    args: chromium_min_1.default.args,
                    defaultViewport: chromium_min_1.default.defaultViewport
                };
                return [4 /*yield*/, chromium_min_1.default.executablePath("https://github.com/Sparticuz/chromium/releases/download/v126.0.0/chromium-v126.0.0-pack.tar")];
            case 1: return [4 /*yield*/, _b.apply(_a, [(_j.executablePath = _k.sent(),
                        _j.headless = chromium_min_1.default.headless,
                        _j.ignoreHTTPSErrors = true,
                        _j)])];
            case 2:
                browser = _k.sent();
                return [4 /*yield*/, browser.newPage()];
            case 3:
                page = _k.sent();
                return [4 /*yield*/, page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")];
            case 4:
                _k.sent();
                return [4 /*yield*/, page.setExtraHTTPHeaders({
                        "Accept-Language": "en-US,en;q=0.9",
                    })];
            case 5:
                _k.sent();
                _d = (_c = console).log;
                _e = ["Chromium:"];
                return [4 /*yield*/, browser.version()];
            case 6:
                _d.apply(_c, _e.concat([_k.sent()]));
                _g = (_f = console).log;
                _h = ["Page Title:"];
                return [4 /*yield*/, page.title()];
            case 7:
                _g.apply(_f, _h.concat([_k.sent()]));
                bunPath = "#sr-container > div > div > div.container.container-main.contair-full-height-flex-auto > div > div > div > div > div > span > div > div > div > div > div > a:nth-child(".concat(vflId, ")");
                achivePath = "#sr-container > div > div > div.menu-wrapper.menu-full-width-bg.menu-mobile-top.menu-mobile-sticky > div.container.no-padding > ul > li:nth-child(6) > a";
                clickFormCell = "#sr-container > div > div > div.container.container-main.contair-full-height-flex-auto > div > div > div > div > div.panel.margin-bottom > div > div > div:nth-child(1) > table > tbody > tr:nth-child(2)";
                return [4 /*yield*/, page.goto(apiEndpoint)];
            case 8:
                _k.sent();
                return [4 /*yield*/, page.$(bunPath)];
            case 9:
                bunPathHandle = _k.sent();
                if (!bunPathHandle) return [3 /*break*/, 11];
                return [4 /*yield*/, bunPathHandle.click()];
            case 10:
                _k.sent();
                _k.label = 11;
            case 11: return [4 /*yield*/, page.$(achivePath)];
            case 12:
                achivePathHandle = _k.sent();
                if (!achivePathHandle) return [3 /*break*/, 14];
                return [4 /*yield*/, achivePathHandle.click()];
            case 13:
                _k.sent();
                _k.label = 14;
            case 14: return [4 /*yield*/, page.$(clickFormCell)];
            case 15:
                clickFormCellHandle = _k.sent();
                if (!clickFormCellHandle) return [3 /*break*/, 17];
                return [4 /*yield*/, clickFormCellHandle.click()];
            case 16:
                _k.sent();
                _k.label = 17;
            case 17:
                currentUrl = page.url();
                seasonKey = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
                return [4 /*yield*/, browser.close()];
            case 18:
                _k.sent();
                return [2 /*return*/, seasonKey];
        }
    });
}); };
