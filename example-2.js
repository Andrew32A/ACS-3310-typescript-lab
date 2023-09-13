"use strict";
// Take a look at the code here. Notice the VSCode will
// provide errors!
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPriceWithTax = void 0;
// Compile the code and check what type script says:
// tsc example-2.ts
// ➜  typescript-lab git:(main) ✗ tsc example-2.ts
// example-2.ts:9:8 - error TS2322: Type 'string' is not assignable to type 'number'.
// 9  const price: number = amount.toFixed(2)
//          ~~~~~
// example-2.ts:11:2 - error TS2322: Type 'number' is not assignable to type 'string'.
// 11  return price + tax
//     ~~~~~~
// Found 2 errors in the same file, starting at: example-2.ts:9
function getPriceWithTax(amount, rate) {
    var price = parseFloat(amount.toFixed(2));
    var tax = price * rate;
    return price + tax;
}
exports.getPriceWithTax = getPriceWithTax;
var answer = getPriceWithTax(23.99, 9.5);
console.log(answer);
