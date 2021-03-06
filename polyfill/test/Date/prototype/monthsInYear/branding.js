// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-temporal.date.prototype.monthsinyear
---*/

const monthsInYear = Object.getOwnPropertyDescriptor(Temporal.Date.prototype, "monthsInYear").get;

assert.sameValue(typeof monthsInYear, "function");

assert.throws(TypeError, () => monthsInYear.call(undefined), "undefined");
assert.throws(TypeError, () => monthsInYear.call(null), "null");
assert.throws(TypeError, () => monthsInYear.call(true), "true");
assert.throws(TypeError, () => monthsInYear.call(""), "empty string");
assert.throws(TypeError, () => monthsInYear.call(Symbol()), "symbol");
assert.throws(TypeError, () => monthsInYear.call(1), "1");
assert.throws(TypeError, () => monthsInYear.call({}), "plain object");
assert.throws(TypeError, () => monthsInYear.call(Temporal.Date), "Temporal.Date");
assert.throws(TypeError, () => monthsInYear.call(Temporal.Date.prototype), "Temporal.Date.prototype");
