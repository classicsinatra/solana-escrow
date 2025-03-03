"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/bigint-buffer@1.1.5";
exports.ids = ["vendor-chunks/bigint-buffer@1.1.5"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/bigint-buffer@1.1.5/node_modules/bigint-buffer/dist/node.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/bigint-buffer@1.1.5/node_modules/bigint-buffer/dist/node.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nlet converter;\n{\n    try {\n        converter = __webpack_require__(/*! bindings */ \"(ssr)/./node_modules/.pnpm/bindings@1.5.0/node_modules/bindings/bindings.js\")('bigint_buffer');\n    }\n    catch (e) {\n        console.warn('bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)');\n    }\n}\n/**\n * Convert a little-endian buffer into a BigInt.\n * @param buf The little-endian buffer to convert\n * @returns A BigInt with the little-endian representation of buf.\n */\nfunction toBigIntLE(buf) {\n    if (converter === undefined) {\n        const reversed = Buffer.from(buf);\n        reversed.reverse();\n        const hex = reversed.toString('hex');\n        if (hex.length === 0) {\n            return BigInt(0);\n        }\n        return BigInt(`0x${hex}`);\n    }\n    return converter.toBigInt(buf, false);\n}\nexports.toBigIntLE = toBigIntLE;\n/**\n * Convert a big-endian buffer into a BigInt\n * @param buf The big-endian buffer to convert.\n * @returns A BigInt with the big-endian representation of buf.\n */\nfunction toBigIntBE(buf) {\n    if (converter === undefined) {\n        const hex = buf.toString('hex');\n        if (hex.length === 0) {\n            return BigInt(0);\n        }\n        return BigInt(`0x${hex}`);\n    }\n    return converter.toBigInt(buf, true);\n}\nexports.toBigIntBE = toBigIntBE;\n/**\n * Convert a BigInt to a little-endian buffer.\n * @param num   The BigInt to convert.\n * @param width The number of bytes that the resulting buffer should be.\n * @returns A little-endian buffer representation of num.\n */\nfunction toBufferLE(num, width) {\n    if (converter === undefined) {\n        const hex = num.toString(16);\n        const buffer = Buffer.from(hex.padStart(width * 2, '0').slice(0, width * 2), 'hex');\n        buffer.reverse();\n        return buffer;\n    }\n    // Allocation is done here, since it is slower using napi in C\n    return converter.fromBigInt(num, Buffer.allocUnsafe(width), false);\n}\nexports.toBufferLE = toBufferLE;\n/**\n * Convert a BigInt to a big-endian buffer.\n * @param num   The BigInt to convert.\n * @param width The number of bytes that the resulting buffer should be.\n * @returns A big-endian buffer representation of num.\n */\nfunction toBufferBE(num, width) {\n    if (converter === undefined) {\n        const hex = num.toString(16);\n        return Buffer.from(hex.padStart(width * 2, '0').slice(0, width * 2), 'hex');\n    }\n    return converter.fromBigInt(num, Buffer.allocUnsafe(width), true);\n}\nexports.toBufferBE = toBufferBE;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vYmlnaW50LWJ1ZmZlckAxLjEuNS9ub2RlX21vZHVsZXMvYmlnaW50LWJ1ZmZlci9kaXN0L25vZGUuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZGQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixJQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLElBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtbmV4dC10YWlsd2luZC1jb3VudGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2JpZ2ludC1idWZmZXJAMS4xLjUvbm9kZV9tb2R1bGVzL2JpZ2ludC1idWZmZXIvZGlzdC9ub2RlLmpzP2ZmZjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5sZXQgY29udmVydGVyO1xue1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnZlcnRlciA9IHJlcXVpcmUoJ2JpbmRpbmdzJykoJ2JpZ2ludF9idWZmZXInKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdiaWdpbnQ6IEZhaWxlZCB0byBsb2FkIGJpbmRpbmdzLCBwdXJlIEpTIHdpbGwgYmUgdXNlZCAodHJ5IG5wbSBydW4gcmVidWlsZD8pJyk7XG4gICAgfVxufVxuLyoqXG4gKiBDb252ZXJ0IGEgbGl0dGxlLWVuZGlhbiBidWZmZXIgaW50byBhIEJpZ0ludC5cbiAqIEBwYXJhbSBidWYgVGhlIGxpdHRsZS1lbmRpYW4gYnVmZmVyIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIEEgQmlnSW50IHdpdGggdGhlIGxpdHRsZS1lbmRpYW4gcmVwcmVzZW50YXRpb24gb2YgYnVmLlxuICovXG5mdW5jdGlvbiB0b0JpZ0ludExFKGJ1Zikge1xuICAgIGlmIChjb252ZXJ0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCByZXZlcnNlZCA9IEJ1ZmZlci5mcm9tKGJ1Zik7XG4gICAgICAgIHJldmVyc2VkLnJldmVyc2UoKTtcbiAgICAgICAgY29uc3QgaGV4ID0gcmV2ZXJzZWQudG9TdHJpbmcoJ2hleCcpO1xuICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIEJpZ0ludCgwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQmlnSW50KGAweCR7aGV4fWApO1xuICAgIH1cbiAgICByZXR1cm4gY29udmVydGVyLnRvQmlnSW50KGJ1ZiwgZmFsc2UpO1xufVxuZXhwb3J0cy50b0JpZ0ludExFID0gdG9CaWdJbnRMRTtcbi8qKlxuICogQ29udmVydCBhIGJpZy1lbmRpYW4gYnVmZmVyIGludG8gYSBCaWdJbnRcbiAqIEBwYXJhbSBidWYgVGhlIGJpZy1lbmRpYW4gYnVmZmVyIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyBBIEJpZ0ludCB3aXRoIHRoZSBiaWctZW5kaWFuIHJlcHJlc2VudGF0aW9uIG9mIGJ1Zi5cbiAqL1xuZnVuY3Rpb24gdG9CaWdJbnRCRShidWYpIHtcbiAgICBpZiAoY29udmVydGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgaGV4ID0gYnVmLnRvU3RyaW5nKCdoZXgnKTtcbiAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBCaWdJbnQoMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEJpZ0ludChgMHgke2hleH1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnZlcnRlci50b0JpZ0ludChidWYsIHRydWUpO1xufVxuZXhwb3J0cy50b0JpZ0ludEJFID0gdG9CaWdJbnRCRTtcbi8qKlxuICogQ29udmVydCBhIEJpZ0ludCB0byBhIGxpdHRsZS1lbmRpYW4gYnVmZmVyLlxuICogQHBhcmFtIG51bSAgIFRoZSBCaWdJbnQgdG8gY29udmVydC5cbiAqIEBwYXJhbSB3aWR0aCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRoYXQgdGhlIHJlc3VsdGluZyBidWZmZXIgc2hvdWxkIGJlLlxuICogQHJldHVybnMgQSBsaXR0bGUtZW5kaWFuIGJ1ZmZlciByZXByZXNlbnRhdGlvbiBvZiBudW0uXG4gKi9cbmZ1bmN0aW9uIHRvQnVmZmVyTEUobnVtLCB3aWR0aCkge1xuICAgIGlmIChjb252ZXJ0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBoZXggPSBudW0udG9TdHJpbmcoMTYpO1xuICAgICAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShoZXgucGFkU3RhcnQod2lkdGggKiAyLCAnMCcpLnNsaWNlKDAsIHdpZHRoICogMiksICdoZXgnKTtcbiAgICAgICAgYnVmZmVyLnJldmVyc2UoKTtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICB9XG4gICAgLy8gQWxsb2NhdGlvbiBpcyBkb25lIGhlcmUsIHNpbmNlIGl0IGlzIHNsb3dlciB1c2luZyBuYXBpIGluIENcbiAgICByZXR1cm4gY29udmVydGVyLmZyb21CaWdJbnQobnVtLCBCdWZmZXIuYWxsb2NVbnNhZmUod2lkdGgpLCBmYWxzZSk7XG59XG5leHBvcnRzLnRvQnVmZmVyTEUgPSB0b0J1ZmZlckxFO1xuLyoqXG4gKiBDb252ZXJ0IGEgQmlnSW50IHRvIGEgYmlnLWVuZGlhbiBidWZmZXIuXG4gKiBAcGFyYW0gbnVtICAgVGhlIEJpZ0ludCB0byBjb252ZXJ0LlxuICogQHBhcmFtIHdpZHRoIFRoZSBudW1iZXIgb2YgYnl0ZXMgdGhhdCB0aGUgcmVzdWx0aW5nIGJ1ZmZlciBzaG91bGQgYmUuXG4gKiBAcmV0dXJucyBBIGJpZy1lbmRpYW4gYnVmZmVyIHJlcHJlc2VudGF0aW9uIG9mIG51bS5cbiAqL1xuZnVuY3Rpb24gdG9CdWZmZXJCRShudW0sIHdpZHRoKSB7XG4gICAgaWYgKGNvbnZlcnRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGhleCA9IG51bS50b1N0cmluZygxNik7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShoZXgucGFkU3RhcnQod2lkdGggKiAyLCAnMCcpLnNsaWNlKDAsIHdpZHRoICogMiksICdoZXgnKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnZlcnRlci5mcm9tQmlnSW50KG51bSwgQnVmZmVyLmFsbG9jVW5zYWZlKHdpZHRoKSwgdHJ1ZSk7XG59XG5leHBvcnRzLnRvQnVmZmVyQkUgPSB0b0J1ZmZlckJFO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/bigint-buffer@1.1.5/node_modules/bigint-buffer/dist/node.js\n");

/***/ })

};
;