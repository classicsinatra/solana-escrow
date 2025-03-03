"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@solana+wallet-standard-chains@1.1.1";
exports.ids = ["vendor-chunks/@solana+wallet-standard-chains@1.1.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@solana+wallet-standard-chains@1.1.1/node_modules/@solana/wallet-standard-chains/lib/esm/index.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@solana+wallet-standard-chains@1.1.1/node_modules/@solana/wallet-standard-chains/lib/esm/index.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SOLANA_CHAINS: () => (/* binding */ SOLANA_CHAINS),\n/* harmony export */   SOLANA_DEVNET_CHAIN: () => (/* binding */ SOLANA_DEVNET_CHAIN),\n/* harmony export */   SOLANA_LOCALNET_CHAIN: () => (/* binding */ SOLANA_LOCALNET_CHAIN),\n/* harmony export */   SOLANA_MAINNET_CHAIN: () => (/* binding */ SOLANA_MAINNET_CHAIN),\n/* harmony export */   SOLANA_TESTNET_CHAIN: () => (/* binding */ SOLANA_TESTNET_CHAIN),\n/* harmony export */   isSolanaChain: () => (/* binding */ isSolanaChain)\n/* harmony export */ });\n/** Solana Mainnet (beta) cluster, e.g. https://api.mainnet-beta.solana.com */\nconst SOLANA_MAINNET_CHAIN = 'solana:mainnet';\n/** Solana Devnet cluster, e.g. https://api.devnet.solana.com */\nconst SOLANA_DEVNET_CHAIN = 'solana:devnet';\n/** Solana Testnet cluster, e.g. https://api.testnet.solana.com */\nconst SOLANA_TESTNET_CHAIN = 'solana:testnet';\n/** Solana Localnet cluster, e.g. http://localhost:8899 */\nconst SOLANA_LOCALNET_CHAIN = 'solana:localnet';\n/** Array of all Solana clusters */\nconst SOLANA_CHAINS = [\n    SOLANA_MAINNET_CHAIN,\n    SOLANA_DEVNET_CHAIN,\n    SOLANA_TESTNET_CHAIN,\n    SOLANA_LOCALNET_CHAIN,\n];\n/**\n * Check if a chain corresponds with one of the Solana clusters.\n */\nfunction isSolanaChain(chain) {\n    return SOLANA_CHAINS.includes(chain);\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNvbGFuYSt3YWxsZXQtc3RhbmRhcmQtY2hhaW5zQDEuMS4xL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1zdGFuZGFyZC1jaGFpbnMvbGliL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLW5leHQtdGFpbHdpbmQtY291bnRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac29sYW5hK3dhbGxldC1zdGFuZGFyZC1jaGFpbnNAMS4xLjEvbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LXN0YW5kYXJkLWNoYWlucy9saWIvZXNtL2luZGV4LmpzPzcxMWYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIFNvbGFuYSBNYWlubmV0IChiZXRhKSBjbHVzdGVyLCBlLmcuIGh0dHBzOi8vYXBpLm1haW5uZXQtYmV0YS5zb2xhbmEuY29tICovXG5leHBvcnQgY29uc3QgU09MQU5BX01BSU5ORVRfQ0hBSU4gPSAnc29sYW5hOm1haW5uZXQnO1xuLyoqIFNvbGFuYSBEZXZuZXQgY2x1c3RlciwgZS5nLiBodHRwczovL2FwaS5kZXZuZXQuc29sYW5hLmNvbSAqL1xuZXhwb3J0IGNvbnN0IFNPTEFOQV9ERVZORVRfQ0hBSU4gPSAnc29sYW5hOmRldm5ldCc7XG4vKiogU29sYW5hIFRlc3RuZXQgY2x1c3RlciwgZS5nLiBodHRwczovL2FwaS50ZXN0bmV0LnNvbGFuYS5jb20gKi9cbmV4cG9ydCBjb25zdCBTT0xBTkFfVEVTVE5FVF9DSEFJTiA9ICdzb2xhbmE6dGVzdG5ldCc7XG4vKiogU29sYW5hIExvY2FsbmV0IGNsdXN0ZXIsIGUuZy4gaHR0cDovL2xvY2FsaG9zdDo4ODk5ICovXG5leHBvcnQgY29uc3QgU09MQU5BX0xPQ0FMTkVUX0NIQUlOID0gJ3NvbGFuYTpsb2NhbG5ldCc7XG4vKiogQXJyYXkgb2YgYWxsIFNvbGFuYSBjbHVzdGVycyAqL1xuZXhwb3J0IGNvbnN0IFNPTEFOQV9DSEFJTlMgPSBbXG4gICAgU09MQU5BX01BSU5ORVRfQ0hBSU4sXG4gICAgU09MQU5BX0RFVk5FVF9DSEFJTixcbiAgICBTT0xBTkFfVEVTVE5FVF9DSEFJTixcbiAgICBTT0xBTkFfTE9DQUxORVRfQ0hBSU4sXG5dO1xuLyoqXG4gKiBDaGVjayBpZiBhIGNoYWluIGNvcnJlc3BvbmRzIHdpdGggb25lIG9mIHRoZSBTb2xhbmEgY2x1c3RlcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NvbGFuYUNoYWluKGNoYWluKSB7XG4gICAgcmV0dXJuIFNPTEFOQV9DSEFJTlMuaW5jbHVkZXMoY2hhaW4pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@solana+wallet-standard-chains@1.1.1/node_modules/@solana/wallet-standard-chains/lib/esm/index.js\n");

/***/ })

};
;