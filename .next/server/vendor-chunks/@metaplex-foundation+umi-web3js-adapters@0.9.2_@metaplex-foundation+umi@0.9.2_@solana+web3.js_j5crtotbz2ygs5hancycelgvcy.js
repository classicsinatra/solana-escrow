"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy";
exports.ids = ["vendor-chunks/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/Instruction.mjs":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/Instruction.mjs ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromWeb3JsInstruction: () => (/* binding */ fromWeb3JsInstruction),\n/* harmony export */   toWeb3JsInstruction: () => (/* binding */ toWeb3JsInstruction)\n/* harmony export */ });\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"(ssr)/./node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.esm.js\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buffer */ \"buffer\");\n/* harmony import */ var _PublicKey_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PublicKey.mjs */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/PublicKey.mjs\");\n\n\n\n\nfunction fromWeb3JsInstruction(instruction) {\n  return {\n    keys: instruction.keys.map(accountMeta => ({\n      ...accountMeta,\n      pubkey: (0,_PublicKey_mjs__WEBPACK_IMPORTED_MODULE_2__.fromWeb3JsPublicKey)(accountMeta.pubkey)\n    })),\n    programId: (0,_PublicKey_mjs__WEBPACK_IMPORTED_MODULE_2__.fromWeb3JsPublicKey)(instruction.programId),\n    data: new Uint8Array(instruction.data)\n  };\n}\nfunction toWeb3JsInstruction(instruction) {\n  return new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.TransactionInstruction({\n    keys: instruction.keys.map(accountMeta => ({\n      ...accountMeta,\n      pubkey: (0,_PublicKey_mjs__WEBPACK_IMPORTED_MODULE_2__.toWeb3JsPublicKey)(accountMeta.pubkey)\n    })),\n    programId: (0,_PublicKey_mjs__WEBPACK_IMPORTED_MODULE_2__.toWeb3JsPublicKey)(instruction.programId),\n    data: buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(instruction.data)\n  });\n}\n\n\n//# sourceMappingURL=Instruction.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pLXdlYjNqcy1hZGFwdGVyc0AwLjkuMl9AbWV0YXBsZXgtZm91bmRhdGlvbit1bWlAMC45LjJfQHNvbGFuYSt3ZWIzLmpzX2o1Y3J0b3RiejJ5Z3M1aGFuY3ljZWxndmN5L25vZGVfbW9kdWxlcy9AbWV0YXBsZXgtZm91bmRhdGlvbi91bWktd2ViM2pzLWFkYXB0ZXJzL2Rpc3QvZXNtL0luc3RydWN0aW9uLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5RDtBQUN6QjtBQUN5Qzs7QUFFekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1FQUFtQjtBQUNqQyxLQUFLO0FBQ0wsZUFBZSxtRUFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1FQUFzQjtBQUNuQztBQUNBO0FBQ0EsY0FBYyxpRUFBaUI7QUFDL0IsS0FBSztBQUNMLGVBQWUsaUVBQWlCO0FBQ2hDLFVBQVUsMENBQU07QUFDaEIsR0FBRztBQUNIOztBQUVzRDtBQUN0RCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLW5leHQtdGFpbHdpbmQtY291bnRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9AbWV0YXBsZXgtZm91bmRhdGlvbit1bWktd2ViM2pzLWFkYXB0ZXJzQDAuOS4yX0BtZXRhcGxleC1mb3VuZGF0aW9uK3VtaUAwLjkuMl9Ac29sYW5hK3dlYjMuanNfajVjcnRvdGJ6MnlnczVoYW5jeWNlbGd2Y3kvbm9kZV9tb2R1bGVzL0BtZXRhcGxleC1mb3VuZGF0aW9uL3VtaS13ZWIzanMtYWRhcHRlcnMvZGlzdC9lc20vSW5zdHJ1Y3Rpb24ubWpzP2Y0M2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNhY3Rpb25JbnN0cnVjdGlvbiB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcyc7XG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tICdidWZmZXInO1xuaW1wb3J0IHsgZnJvbVdlYjNKc1B1YmxpY0tleSwgdG9XZWIzSnNQdWJsaWNLZXkgfSBmcm9tICcuL1B1YmxpY0tleS5tanMnO1xuXG5mdW5jdGlvbiBmcm9tV2ViM0pzSW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb24pIHtcbiAgcmV0dXJuIHtcbiAgICBrZXlzOiBpbnN0cnVjdGlvbi5rZXlzLm1hcChhY2NvdW50TWV0YSA9PiAoe1xuICAgICAgLi4uYWNjb3VudE1ldGEsXG4gICAgICBwdWJrZXk6IGZyb21XZWIzSnNQdWJsaWNLZXkoYWNjb3VudE1ldGEucHVia2V5KVxuICAgIH0pKSxcbiAgICBwcm9ncmFtSWQ6IGZyb21XZWIzSnNQdWJsaWNLZXkoaW5zdHJ1Y3Rpb24ucHJvZ3JhbUlkKSxcbiAgICBkYXRhOiBuZXcgVWludDhBcnJheShpbnN0cnVjdGlvbi5kYXRhKVxuICB9O1xufVxuZnVuY3Rpb24gdG9XZWIzSnNJbnN0cnVjdGlvbihpbnN0cnVjdGlvbikge1xuICByZXR1cm4gbmV3IFRyYW5zYWN0aW9uSW5zdHJ1Y3Rpb24oe1xuICAgIGtleXM6IGluc3RydWN0aW9uLmtleXMubWFwKGFjY291bnRNZXRhID0+ICh7XG4gICAgICAuLi5hY2NvdW50TWV0YSxcbiAgICAgIHB1YmtleTogdG9XZWIzSnNQdWJsaWNLZXkoYWNjb3VudE1ldGEucHVia2V5KVxuICAgIH0pKSxcbiAgICBwcm9ncmFtSWQ6IHRvV2ViM0pzUHVibGljS2V5KGluc3RydWN0aW9uLnByb2dyYW1JZCksXG4gICAgZGF0YTogQnVmZmVyLmZyb20oaW5zdHJ1Y3Rpb24uZGF0YSlcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGZyb21XZWIzSnNJbnN0cnVjdGlvbiwgdG9XZWIzSnNJbnN0cnVjdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SW5zdHJ1Y3Rpb24ubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/Instruction.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/Keypair.mjs":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/Keypair.mjs ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromWeb3JsKeypair: () => (/* binding */ fromWeb3JsKeypair),\n/* harmony export */   toWeb3JsKeypair: () => (/* binding */ toWeb3JsKeypair)\n/* harmony export */ });\n/* harmony import */ var _metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @metaplex-foundation/umi */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-public-keys@0.8.9/node_modules/@metaplex-foundation/umi-public-keys/dist/esm/common.mjs\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"(ssr)/./node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.esm.js\");\n/* harmony import */ var _PublicKey_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublicKey.mjs */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/PublicKey.mjs\");\n\n\n\n\nfunction fromWeb3JsKeypair(keypair) {\n  return {\n    publicKey: (0,_PublicKey_mjs__WEBPACK_IMPORTED_MODULE_1__.fromWeb3JsPublicKey)(keypair.publicKey),\n    secretKey: keypair.secretKey\n  };\n}\nfunction toWeb3JsKeypair(keypair) {\n  return new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Keypair({\n    publicKey: (0,_metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_2__.publicKeyBytes)(keypair.publicKey),\n    secretKey: keypair.secretKey\n  });\n}\n\n\n//# sourceMappingURL=Keypair.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pLXdlYjNqcy1hZGFwdGVyc0AwLjkuMl9AbWV0YXBsZXgtZm91bmRhdGlvbit1bWlAMC45LjJfQHNvbGFuYSt3ZWIzLmpzX2o1Y3J0b3RiejJ5Z3M1aGFuY3ljZWxndmN5L25vZGVfbW9kdWxlcy9AbWV0YXBsZXgtZm91bmRhdGlvbi91bWktd2ViM2pzLWFkYXB0ZXJzL2Rpc3QvZXNtL0tleXBhaXIubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBEO0FBQ2hCO0FBQ1k7O0FBRXREO0FBQ0E7QUFDQSxlQUFlLG1FQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0RBQU87QUFDcEIsZUFBZSx3RUFBYztBQUM3QjtBQUNBLEdBQUc7QUFDSDs7QUFFOEM7QUFDOUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1uZXh0LXRhaWx3aW5kLWNvdW50ZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pLXdlYjNqcy1hZGFwdGVyc0AwLjkuMl9AbWV0YXBsZXgtZm91bmRhdGlvbit1bWlAMC45LjJfQHNvbGFuYSt3ZWIzLmpzX2o1Y3J0b3RiejJ5Z3M1aGFuY3ljZWxndmN5L25vZGVfbW9kdWxlcy9AbWV0YXBsZXgtZm91bmRhdGlvbi91bWktd2ViM2pzLWFkYXB0ZXJzL2Rpc3QvZXNtL0tleXBhaXIubWpzPzBhNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHVibGljS2V5Qnl0ZXMgfSBmcm9tICdAbWV0YXBsZXgtZm91bmRhdGlvbi91bWknO1xuaW1wb3J0IHsgS2V5cGFpciB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcyc7XG5pbXBvcnQgeyBmcm9tV2ViM0pzUHVibGljS2V5IH0gZnJvbSAnLi9QdWJsaWNLZXkubWpzJztcblxuZnVuY3Rpb24gZnJvbVdlYjNKc0tleXBhaXIoa2V5cGFpcikge1xuICByZXR1cm4ge1xuICAgIHB1YmxpY0tleTogZnJvbVdlYjNKc1B1YmxpY0tleShrZXlwYWlyLnB1YmxpY0tleSksXG4gICAgc2VjcmV0S2V5OiBrZXlwYWlyLnNlY3JldEtleVxuICB9O1xufVxuZnVuY3Rpb24gdG9XZWIzSnNLZXlwYWlyKGtleXBhaXIpIHtcbiAgcmV0dXJuIG5ldyBLZXlwYWlyKHtcbiAgICBwdWJsaWNLZXk6IHB1YmxpY0tleUJ5dGVzKGtleXBhaXIucHVibGljS2V5KSxcbiAgICBzZWNyZXRLZXk6IGtleXBhaXIuc2VjcmV0S2V5XG4gIH0pO1xufVxuXG5leHBvcnQgeyBmcm9tV2ViM0pzS2V5cGFpciwgdG9XZWIzSnNLZXlwYWlyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1LZXlwYWlyLm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/Keypair.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/PublicKey.mjs":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/PublicKey.mjs ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromWeb3JsPublicKey: () => (/* binding */ fromWeb3JsPublicKey),\n/* harmony export */   toWeb3JsPublicKey: () => (/* binding */ toWeb3JsPublicKey)\n/* harmony export */ });\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"(ssr)/./node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.esm.js\");\n\n\nfunction fromWeb3JsPublicKey(publicKey) {\n  return publicKey.toBase58();\n}\nfunction toWeb3JsPublicKey(publicKey) {\n  return new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(publicKey);\n}\n\n\n//# sourceMappingURL=PublicKey.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pLXdlYjNqcy1hZGFwdGVyc0AwLjkuMl9AbWV0YXBsZXgtZm91bmRhdGlvbit1bWlAMC45LjJfQHNvbGFuYSt3ZWIzLmpzX2o1Y3J0b3RiejJ5Z3M1aGFuY3ljZWxndmN5L25vZGVfbW9kdWxlcy9AbWV0YXBsZXgtZm91bmRhdGlvbi91bWktd2ViM2pzLWFkYXB0ZXJzL2Rpc3QvZXNtL1B1YmxpY0tleS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0RBQVM7QUFDdEI7O0FBRWtEO0FBQ2xEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtbmV4dC10YWlsd2luZC1jb3VudGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0BtZXRhcGxleC1mb3VuZGF0aW9uK3VtaS13ZWIzanMtYWRhcHRlcnNAMC45LjJfQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pQDAuOS4yX0Bzb2xhbmErd2ViMy5qc19qNWNydG90YnoyeWdzNWhhbmN5Y2VsZ3ZjeS9ub2RlX21vZHVsZXMvQG1ldGFwbGV4LWZvdW5kYXRpb24vdW1pLXdlYjNqcy1hZGFwdGVycy9kaXN0L2VzbS9QdWJsaWNLZXkubWpzPzNjYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHVibGljS2V5IH0gZnJvbSAnQHNvbGFuYS93ZWIzLmpzJztcblxuZnVuY3Rpb24gZnJvbVdlYjNKc1B1YmxpY0tleShwdWJsaWNLZXkpIHtcbiAgcmV0dXJuIHB1YmxpY0tleS50b0Jhc2U1OCgpO1xufVxuZnVuY3Rpb24gdG9XZWIzSnNQdWJsaWNLZXkocHVibGljS2V5KSB7XG4gIHJldHVybiBuZXcgUHVibGljS2V5KHB1YmxpY0tleSk7XG59XG5cbmV4cG9ydCB7IGZyb21XZWIzSnNQdWJsaWNLZXksIHRvV2ViM0pzUHVibGljS2V5IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1QdWJsaWNLZXkubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/PublicKey.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/Transaction.mjs":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/Transaction.mjs ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromWeb3JsLegacyTransaction: () => (/* binding */ fromWeb3JsLegacyTransaction),\n/* harmony export */   fromWeb3JsTransaction: () => (/* binding */ fromWeb3JsTransaction),\n/* harmony export */   toWeb3JsLegacyTransaction: () => (/* binding */ toWeb3JsLegacyTransaction),\n/* harmony export */   toWeb3JsTransaction: () => (/* binding */ toWeb3JsTransaction)\n/* harmony export */ });\n/* harmony import */ var _metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @metaplex-foundation/umi */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi@0.9.2/node_modules/@metaplex-foundation/umi/dist/esm/serializersInternal.mjs\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"(ssr)/./node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.esm.js\");\n/* harmony import */ var _TransactionMessage_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionMessage.mjs */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/TransactionMessage.mjs\");\n\n\n\n\nfunction fromWeb3JsTransaction(web3JsTransaction) {\n  return {\n    message: (0,_TransactionMessage_mjs__WEBPACK_IMPORTED_MODULE_1__.fromWeb3JsMessage)(web3JsTransaction.message),\n    serializedMessage: web3JsTransaction.message.serialize(),\n    signatures: web3JsTransaction.signatures\n  };\n}\nfunction toWeb3JsTransaction(transaction) {\n  return new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.VersionedTransaction((0,_TransactionMessage_mjs__WEBPACK_IMPORTED_MODULE_1__.toWeb3JsMessage)(transaction.message), transaction.signatures);\n}\nfunction fromWeb3JsLegacyTransaction(web3JsLegacyTransaction) {\n  const web3JsMessage = web3JsLegacyTransaction.compileMessage();\n  const web3JsLegacySignatures = web3JsLegacyTransaction.signatures.reduce((all, one) => {\n    all[one.publicKey.toBase58()] = one.signature ? new Uint8Array(one.signature) : null;\n    return all;\n  }, {});\n  const signatures = [];\n  for (let i = 0; i < web3JsMessage.header.numRequiredSignatures; i += 1) {\n    const pubkey = web3JsMessage.accountKeys[i].toBase58();\n    const signature = web3JsLegacySignatures[pubkey] ?? null;\n    signatures.push(signature ?? new Uint8Array(_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.SIGNATURE_LENGTH_IN_BYTES));\n  }\n  return {\n    message: (0,_TransactionMessage_mjs__WEBPACK_IMPORTED_MODULE_1__.fromWeb3JsMessage)(web3JsMessage),\n    serializedMessage: web3JsMessage.serialize(),\n    signatures\n  };\n}\nfunction toWeb3JsLegacyTransaction(transaction) {\n  const web3JsTransaction = toWeb3JsTransaction({\n    ...transaction,\n    message: {\n      ...transaction.message,\n      version: 'legacy'\n    }\n  });\n  return _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Transaction.populate(web3JsTransaction.message, web3JsTransaction.signatures.map(signature => _metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_2__.base58.deserialize(signature)[0]));\n}\n\n\n//# sourceMappingURL=Transaction.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pLXdlYjNqcy1hZGFwdGVyc0AwLjkuMl9AbWV0YXBsZXgtZm91bmRhdGlvbit1bWlAMC45LjJfQHNvbGFuYSt3ZWIzLmpzX2o1Y3J0b3RiejJ5Z3M1aGFuY3ljZWxndmN5L25vZGVfbW9kdWxlcy9AbWV0YXBsZXgtZm91bmRhdGlvbi91bWktd2ViM2pzLWFkYXB0ZXJzL2Rpc3QvZXNtL1RyYW5zYWN0aW9uLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBQzZDO0FBQ2pCOztBQUU5RTtBQUNBO0FBQ0EsYUFBYSwwRUFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUVBQW9CLENBQUMsd0VBQWU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7QUFDQSxrQkFBa0IsZ0RBQWdEO0FBQ2xFO0FBQ0E7QUFDQSxnREFBZ0Qsc0VBQXlCO0FBQ3pFO0FBQ0E7QUFDQSxhQUFhLDBFQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMsd0RBQVcsbUZBQW1GLDREQUFNO0FBQzdHOztBQUU4RztBQUM5RyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLW5leHQtdGFpbHdpbmQtY291bnRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9AbWV0YXBsZXgtZm91bmRhdGlvbit1bWktd2ViM2pzLWFkYXB0ZXJzQDAuOS4yX0BtZXRhcGxleC1mb3VuZGF0aW9uK3VtaUAwLjkuMl9Ac29sYW5hK3dlYjMuanNfajVjcnRvdGJ6MnlnczVoYW5jeWNlbGd2Y3kvbm9kZV9tb2R1bGVzL0BtZXRhcGxleC1mb3VuZGF0aW9uL3VtaS13ZWIzanMtYWRhcHRlcnMvZGlzdC9lc20vVHJhbnNhY3Rpb24ubWpzPzQzOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmFzZTU4IH0gZnJvbSAnQG1ldGFwbGV4LWZvdW5kYXRpb24vdW1pJztcbmltcG9ydCB7IFZlcnNpb25lZFRyYW5zYWN0aW9uLCBTSUdOQVRVUkVfTEVOR1RIX0lOX0JZVEVTLCBUcmFuc2FjdGlvbiB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcyc7XG5pbXBvcnQgeyBmcm9tV2ViM0pzTWVzc2FnZSwgdG9XZWIzSnNNZXNzYWdlIH0gZnJvbSAnLi9UcmFuc2FjdGlvbk1lc3NhZ2UubWpzJztcblxuZnVuY3Rpb24gZnJvbVdlYjNKc1RyYW5zYWN0aW9uKHdlYjNKc1RyYW5zYWN0aW9uKSB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogZnJvbVdlYjNKc01lc3NhZ2Uod2ViM0pzVHJhbnNhY3Rpb24ubWVzc2FnZSksXG4gICAgc2VyaWFsaXplZE1lc3NhZ2U6IHdlYjNKc1RyYW5zYWN0aW9uLm1lc3NhZ2Uuc2VyaWFsaXplKCksXG4gICAgc2lnbmF0dXJlczogd2ViM0pzVHJhbnNhY3Rpb24uc2lnbmF0dXJlc1xuICB9O1xufVxuZnVuY3Rpb24gdG9XZWIzSnNUcmFuc2FjdGlvbih0cmFuc2FjdGlvbikge1xuICByZXR1cm4gbmV3IFZlcnNpb25lZFRyYW5zYWN0aW9uKHRvV2ViM0pzTWVzc2FnZSh0cmFuc2FjdGlvbi5tZXNzYWdlKSwgdHJhbnNhY3Rpb24uc2lnbmF0dXJlcyk7XG59XG5mdW5jdGlvbiBmcm9tV2ViM0pzTGVnYWN5VHJhbnNhY3Rpb24od2ViM0pzTGVnYWN5VHJhbnNhY3Rpb24pIHtcbiAgY29uc3Qgd2ViM0pzTWVzc2FnZSA9IHdlYjNKc0xlZ2FjeVRyYW5zYWN0aW9uLmNvbXBpbGVNZXNzYWdlKCk7XG4gIGNvbnN0IHdlYjNKc0xlZ2FjeVNpZ25hdHVyZXMgPSB3ZWIzSnNMZWdhY3lUcmFuc2FjdGlvbi5zaWduYXR1cmVzLnJlZHVjZSgoYWxsLCBvbmUpID0+IHtcbiAgICBhbGxbb25lLnB1YmxpY0tleS50b0Jhc2U1OCgpXSA9IG9uZS5zaWduYXR1cmUgPyBuZXcgVWludDhBcnJheShvbmUuc2lnbmF0dXJlKSA6IG51bGw7XG4gICAgcmV0dXJuIGFsbDtcbiAgfSwge30pO1xuICBjb25zdCBzaWduYXR1cmVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2ViM0pzTWVzc2FnZS5oZWFkZXIubnVtUmVxdWlyZWRTaWduYXR1cmVzOyBpICs9IDEpIHtcbiAgICBjb25zdCBwdWJrZXkgPSB3ZWIzSnNNZXNzYWdlLmFjY291bnRLZXlzW2ldLnRvQmFzZTU4KCk7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gd2ViM0pzTGVnYWN5U2lnbmF0dXJlc1twdWJrZXldID8/IG51bGw7XG4gICAgc2lnbmF0dXJlcy5wdXNoKHNpZ25hdHVyZSA/PyBuZXcgVWludDhBcnJheShTSUdOQVRVUkVfTEVOR1RIX0lOX0JZVEVTKSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOiBmcm9tV2ViM0pzTWVzc2FnZSh3ZWIzSnNNZXNzYWdlKSxcbiAgICBzZXJpYWxpemVkTWVzc2FnZTogd2ViM0pzTWVzc2FnZS5zZXJpYWxpemUoKSxcbiAgICBzaWduYXR1cmVzXG4gIH07XG59XG5mdW5jdGlvbiB0b1dlYjNKc0xlZ2FjeVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKSB7XG4gIGNvbnN0IHdlYjNKc1RyYW5zYWN0aW9uID0gdG9XZWIzSnNUcmFuc2FjdGlvbih7XG4gICAgLi4udHJhbnNhY3Rpb24sXG4gICAgbWVzc2FnZToge1xuICAgICAgLi4udHJhbnNhY3Rpb24ubWVzc2FnZSxcbiAgICAgIHZlcnNpb246ICdsZWdhY3knXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIFRyYW5zYWN0aW9uLnBvcHVsYXRlKHdlYjNKc1RyYW5zYWN0aW9uLm1lc3NhZ2UsIHdlYjNKc1RyYW5zYWN0aW9uLnNpZ25hdHVyZXMubWFwKHNpZ25hdHVyZSA9PiBiYXNlNTguZGVzZXJpYWxpemUoc2lnbmF0dXJlKVswXSkpO1xufVxuXG5leHBvcnQgeyBmcm9tV2ViM0pzTGVnYWN5VHJhbnNhY3Rpb24sIGZyb21XZWIzSnNUcmFuc2FjdGlvbiwgdG9XZWIzSnNMZWdhY3lUcmFuc2FjdGlvbiwgdG9XZWIzSnNUcmFuc2FjdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VHJhbnNhY3Rpb24ubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/Transaction.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/TransactionMessage.mjs":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/TransactionMessage.mjs ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromWeb3JsMessage: () => (/* binding */ fromWeb3JsMessage),\n/* harmony export */   toWeb3JsMessage: () => (/* binding */ toWeb3JsMessage),\n/* harmony export */   toWeb3JsMessageFromInput: () => (/* binding */ toWeb3JsMessageFromInput)\n/* harmony export */ });\n/* harmony import */ var _metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @metaplex-foundation/umi */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi@0.9.2/node_modules/@metaplex-foundation/umi/dist/esm/serializersInternal.mjs\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"(ssr)/./node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.esm.js\");\n/* harmony import */ var _Instruction_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instruction.mjs */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/Instruction.mjs\");\n/* harmony import */ var _PublicKey_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublicKey.mjs */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/PublicKey.mjs\");\n\n\n\n\n\nfunction fromWeb3JsMessage(message) {\n  return {\n    version: message.version,\n    header: message.header,\n    accounts: message.staticAccountKeys.map(_PublicKey_mjs__WEBPACK_IMPORTED_MODULE_1__.fromWeb3JsPublicKey),\n    blockhash: message.recentBlockhash,\n    instructions: message.compiledInstructions.map(instruction => ({\n      programIndex: instruction.programIdIndex,\n      accountIndexes: instruction.accountKeyIndexes,\n      data: new Uint8Array(instruction.data)\n    })),\n    addressLookupTables: message.addressTableLookups.map(lookup => ({\n      publicKey: (0,_PublicKey_mjs__WEBPACK_IMPORTED_MODULE_1__.fromWeb3JsPublicKey)(lookup.accountKey),\n      writableIndexes: lookup.writableIndexes,\n      readonlyIndexes: lookup.readonlyIndexes\n    }))\n  };\n}\nfunction toWeb3JsMessage(message) {\n  if (message.version === 'legacy') {\n    return new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Message({\n      header: message.header,\n      accountKeys: message.accounts.map(_PublicKey_mjs__WEBPACK_IMPORTED_MODULE_1__.toWeb3JsPublicKey),\n      recentBlockhash: message.blockhash,\n      instructions: message.instructions.map(instruction => ({\n        programIdIndex: instruction.programIndex,\n        accounts: instruction.accountIndexes,\n        data: _metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_2__.base58.deserialize(instruction.data)[0]\n      }))\n    });\n  }\n  return new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.MessageV0({\n    header: message.header,\n    staticAccountKeys: message.accounts.map(_PublicKey_mjs__WEBPACK_IMPORTED_MODULE_1__.toWeb3JsPublicKey),\n    recentBlockhash: message.blockhash,\n    compiledInstructions: message.instructions.map(instruction => ({\n      programIdIndex: instruction.programIndex,\n      accountKeyIndexes: instruction.accountIndexes,\n      data: instruction.data\n    })),\n    addressTableLookups: message.addressLookupTables.map(lookup => ({\n      accountKey: (0,_PublicKey_mjs__WEBPACK_IMPORTED_MODULE_1__.toWeb3JsPublicKey)(lookup.publicKey),\n      writableIndexes: lookup.writableIndexes,\n      readonlyIndexes: lookup.readonlyIndexes\n    }))\n  });\n}\nfunction toWeb3JsMessageFromInput(input) {\n  if (input.version === 'legacy') {\n    return _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Message.compile({\n      payerKey: (0,_PublicKey_mjs__WEBPACK_IMPORTED_MODULE_1__.toWeb3JsPublicKey)(input.payer),\n      instructions: input.instructions.map(_Instruction_mjs__WEBPACK_IMPORTED_MODULE_3__.toWeb3JsInstruction),\n      recentBlockhash: input.blockhash\n    });\n  }\n  return _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.MessageV0.compile({\n    payerKey: (0,_PublicKey_mjs__WEBPACK_IMPORTED_MODULE_1__.toWeb3JsPublicKey)(input.payer),\n    instructions: input.instructions.map(_Instruction_mjs__WEBPACK_IMPORTED_MODULE_3__.toWeb3JsInstruction),\n    recentBlockhash: input.blockhash,\n    addressLookupTableAccounts: input.addressLookupTables?.map(account => new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.AddressLookupTableAccount({\n      key: (0,_PublicKey_mjs__WEBPACK_IMPORTED_MODULE_1__.toWeb3JsPublicKey)(account.publicKey),\n      state: {\n        addresses: account.addresses.map(_PublicKey_mjs__WEBPACK_IMPORTED_MODULE_1__.toWeb3JsPublicKey),\n        authority: undefined,\n        deactivationSlot: BigInt(`0x${'ff'.repeat(8)}`),\n        lastExtendedSlot: 0,\n        lastExtendedSlotStartIndex: 0\n      }\n    }))\n  });\n}\n\n\n//# sourceMappingURL=TransactionMessage.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pLXdlYjNqcy1hZGFwdGVyc0AwLjkuMl9AbWV0YXBsZXgtZm91bmRhdGlvbit1bWlAMC45LjJfQHNvbGFuYSt3ZWIzLmpzX2o1Y3J0b3RiejJ5Z3M1aGFuY3ljZWxndmN5L25vZGVfbW9kdWxlcy9AbWV0YXBsZXgtZm91bmRhdGlvbi91bWktd2ViM2pzLWFkYXB0ZXJzL2Rpc3QvZXNtL1RyYW5zYWN0aW9uTWVzc2FnZS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUM4QjtBQUN4QjtBQUNpQjs7QUFFekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsK0RBQW1CO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpQkFBaUIsbUVBQW1CO0FBQ3BDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFPO0FBQ3RCO0FBQ0Esd0NBQXdDLDZEQUFpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNERBQU07QUFDcEIsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLGFBQWEsc0RBQVM7QUFDdEI7QUFDQSw0Q0FBNEMsNkRBQWlCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsaUVBQWlCO0FBQ25DO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0RBQU87QUFDbEIsZ0JBQWdCLGlFQUFpQjtBQUNqQywyQ0FBMkMsaUVBQW1CO0FBQzlEO0FBQ0EsS0FBSztBQUNMO0FBQ0EsU0FBUyxzREFBUztBQUNsQixjQUFjLGlFQUFpQjtBQUMvQix5Q0FBeUMsaUVBQW1CO0FBQzVEO0FBQ0EsOEVBQThFLHNFQUF5QjtBQUN2RyxXQUFXLGlFQUFpQjtBQUM1QjtBQUNBLHlDQUF5Qyw2REFBaUI7QUFDMUQ7QUFDQSxzQ0FBc0MsZUFBZTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUV3RTtBQUN4RSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLW5leHQtdGFpbHdpbmQtY291bnRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9AbWV0YXBsZXgtZm91bmRhdGlvbit1bWktd2ViM2pzLWFkYXB0ZXJzQDAuOS4yX0BtZXRhcGxleC1mb3VuZGF0aW9uK3VtaUAwLjkuMl9Ac29sYW5hK3dlYjMuanNfajVjcnRvdGJ6MnlnczVoYW5jeWNlbGd2Y3kvbm9kZV9tb2R1bGVzL0BtZXRhcGxleC1mb3VuZGF0aW9uL3VtaS13ZWIzanMtYWRhcHRlcnMvZGlzdC9lc20vVHJhbnNhY3Rpb25NZXNzYWdlLm1qcz9hNjA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJhc2U1OCB9IGZyb20gJ0BtZXRhcGxleC1mb3VuZGF0aW9uL3VtaSc7XG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlVjAsIEFkZHJlc3NMb29rdXBUYWJsZUFjY291bnQgfSBmcm9tICdAc29sYW5hL3dlYjMuanMnO1xuaW1wb3J0IHsgdG9XZWIzSnNJbnN0cnVjdGlvbiB9IGZyb20gJy4vSW5zdHJ1Y3Rpb24ubWpzJztcbmltcG9ydCB7IGZyb21XZWIzSnNQdWJsaWNLZXksIHRvV2ViM0pzUHVibGljS2V5IH0gZnJvbSAnLi9QdWJsaWNLZXkubWpzJztcblxuZnVuY3Rpb24gZnJvbVdlYjNKc01lc3NhZ2UobWVzc2FnZSkge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246IG1lc3NhZ2UudmVyc2lvbixcbiAgICBoZWFkZXI6IG1lc3NhZ2UuaGVhZGVyLFxuICAgIGFjY291bnRzOiBtZXNzYWdlLnN0YXRpY0FjY291bnRLZXlzLm1hcChmcm9tV2ViM0pzUHVibGljS2V5KSxcbiAgICBibG9ja2hhc2g6IG1lc3NhZ2UucmVjZW50QmxvY2toYXNoLFxuICAgIGluc3RydWN0aW9uczogbWVzc2FnZS5jb21waWxlZEluc3RydWN0aW9ucy5tYXAoaW5zdHJ1Y3Rpb24gPT4gKHtcbiAgICAgIHByb2dyYW1JbmRleDogaW5zdHJ1Y3Rpb24ucHJvZ3JhbUlkSW5kZXgsXG4gICAgICBhY2NvdW50SW5kZXhlczogaW5zdHJ1Y3Rpb24uYWNjb3VudEtleUluZGV4ZXMsXG4gICAgICBkYXRhOiBuZXcgVWludDhBcnJheShpbnN0cnVjdGlvbi5kYXRhKVxuICAgIH0pKSxcbiAgICBhZGRyZXNzTG9va3VwVGFibGVzOiBtZXNzYWdlLmFkZHJlc3NUYWJsZUxvb2t1cHMubWFwKGxvb2t1cCA9PiAoe1xuICAgICAgcHVibGljS2V5OiBmcm9tV2ViM0pzUHVibGljS2V5KGxvb2t1cC5hY2NvdW50S2V5KSxcbiAgICAgIHdyaXRhYmxlSW5kZXhlczogbG9va3VwLndyaXRhYmxlSW5kZXhlcyxcbiAgICAgIHJlYWRvbmx5SW5kZXhlczogbG9va3VwLnJlYWRvbmx5SW5kZXhlc1xuICAgIH0pKVxuICB9O1xufVxuZnVuY3Rpb24gdG9XZWIzSnNNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgaWYgKG1lc3NhZ2UudmVyc2lvbiA9PT0gJ2xlZ2FjeScpIHtcbiAgICByZXR1cm4gbmV3IE1lc3NhZ2Uoe1xuICAgICAgaGVhZGVyOiBtZXNzYWdlLmhlYWRlcixcbiAgICAgIGFjY291bnRLZXlzOiBtZXNzYWdlLmFjY291bnRzLm1hcCh0b1dlYjNKc1B1YmxpY0tleSksXG4gICAgICByZWNlbnRCbG9ja2hhc2g6IG1lc3NhZ2UuYmxvY2toYXNoLFxuICAgICAgaW5zdHJ1Y3Rpb25zOiBtZXNzYWdlLmluc3RydWN0aW9ucy5tYXAoaW5zdHJ1Y3Rpb24gPT4gKHtcbiAgICAgICAgcHJvZ3JhbUlkSW5kZXg6IGluc3RydWN0aW9uLnByb2dyYW1JbmRleCxcbiAgICAgICAgYWNjb3VudHM6IGluc3RydWN0aW9uLmFjY291bnRJbmRleGVzLFxuICAgICAgICBkYXRhOiBiYXNlNTguZGVzZXJpYWxpemUoaW5zdHJ1Y3Rpb24uZGF0YSlbMF1cbiAgICAgIH0pKVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBuZXcgTWVzc2FnZVYwKHtcbiAgICBoZWFkZXI6IG1lc3NhZ2UuaGVhZGVyLFxuICAgIHN0YXRpY0FjY291bnRLZXlzOiBtZXNzYWdlLmFjY291bnRzLm1hcCh0b1dlYjNKc1B1YmxpY0tleSksXG4gICAgcmVjZW50QmxvY2toYXNoOiBtZXNzYWdlLmJsb2NraGFzaCxcbiAgICBjb21waWxlZEluc3RydWN0aW9uczogbWVzc2FnZS5pbnN0cnVjdGlvbnMubWFwKGluc3RydWN0aW9uID0+ICh7XG4gICAgICBwcm9ncmFtSWRJbmRleDogaW5zdHJ1Y3Rpb24ucHJvZ3JhbUluZGV4LFxuICAgICAgYWNjb3VudEtleUluZGV4ZXM6IGluc3RydWN0aW9uLmFjY291bnRJbmRleGVzLFxuICAgICAgZGF0YTogaW5zdHJ1Y3Rpb24uZGF0YVxuICAgIH0pKSxcbiAgICBhZGRyZXNzVGFibGVMb29rdXBzOiBtZXNzYWdlLmFkZHJlc3NMb29rdXBUYWJsZXMubWFwKGxvb2t1cCA9PiAoe1xuICAgICAgYWNjb3VudEtleTogdG9XZWIzSnNQdWJsaWNLZXkobG9va3VwLnB1YmxpY0tleSksXG4gICAgICB3cml0YWJsZUluZGV4ZXM6IGxvb2t1cC53cml0YWJsZUluZGV4ZXMsXG4gICAgICByZWFkb25seUluZGV4ZXM6IGxvb2t1cC5yZWFkb25seUluZGV4ZXNcbiAgICB9KSlcbiAgfSk7XG59XG5mdW5jdGlvbiB0b1dlYjNKc01lc3NhZ2VGcm9tSW5wdXQoaW5wdXQpIHtcbiAgaWYgKGlucHV0LnZlcnNpb24gPT09ICdsZWdhY3knKSB7XG4gICAgcmV0dXJuIE1lc3NhZ2UuY29tcGlsZSh7XG4gICAgICBwYXllcktleTogdG9XZWIzSnNQdWJsaWNLZXkoaW5wdXQucGF5ZXIpLFxuICAgICAgaW5zdHJ1Y3Rpb25zOiBpbnB1dC5pbnN0cnVjdGlvbnMubWFwKHRvV2ViM0pzSW5zdHJ1Y3Rpb24pLFxuICAgICAgcmVjZW50QmxvY2toYXNoOiBpbnB1dC5ibG9ja2hhc2hcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gTWVzc2FnZVYwLmNvbXBpbGUoe1xuICAgIHBheWVyS2V5OiB0b1dlYjNKc1B1YmxpY0tleShpbnB1dC5wYXllciksXG4gICAgaW5zdHJ1Y3Rpb25zOiBpbnB1dC5pbnN0cnVjdGlvbnMubWFwKHRvV2ViM0pzSW5zdHJ1Y3Rpb24pLFxuICAgIHJlY2VudEJsb2NraGFzaDogaW5wdXQuYmxvY2toYXNoLFxuICAgIGFkZHJlc3NMb29rdXBUYWJsZUFjY291bnRzOiBpbnB1dC5hZGRyZXNzTG9va3VwVGFibGVzPy5tYXAoYWNjb3VudCA9PiBuZXcgQWRkcmVzc0xvb2t1cFRhYmxlQWNjb3VudCh7XG4gICAgICBrZXk6IHRvV2ViM0pzUHVibGljS2V5KGFjY291bnQucHVibGljS2V5KSxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIGFkZHJlc3NlczogYWNjb3VudC5hZGRyZXNzZXMubWFwKHRvV2ViM0pzUHVibGljS2V5KSxcbiAgICAgICAgYXV0aG9yaXR5OiB1bmRlZmluZWQsXG4gICAgICAgIGRlYWN0aXZhdGlvblNsb3Q6IEJpZ0ludChgMHgkeydmZicucmVwZWF0KDgpfWApLFxuICAgICAgICBsYXN0RXh0ZW5kZWRTbG90OiAwLFxuICAgICAgICBsYXN0RXh0ZW5kZWRTbG90U3RhcnRJbmRleDogMFxuICAgICAgfVxuICAgIH0pKVxuICB9KTtcbn1cblxuZXhwb3J0IHsgZnJvbVdlYjNKc01lc3NhZ2UsIHRvV2ViM0pzTWVzc2FnZSwgdG9XZWIzSnNNZXNzYWdlRnJvbUlucHV0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UcmFuc2FjdGlvbk1lc3NhZ2UubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_j5crtotbz2ygs5hancycelgvcy/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/TransactionMessage.mjs\n");

/***/ })

};
;