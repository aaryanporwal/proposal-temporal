// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.date.prototype.with
---*/

const with_ = Temporal.Date.prototype.with;

assert.sameValue(typeof with_, "function");

assert.throws(TypeError, () => with_.call(undefined), "undefined");
assert.throws(TypeError, () => with_.call(null), "null");
assert.throws(TypeError, () => with_.call(true), "true");
assert.throws(TypeError, () => with_.call(""), "empty string");
assert.throws(TypeError, () => with_.call(Symbol()), "symbol");
assert.throws(TypeError, () => with_.call(1), "1");
assert.throws(TypeError, () => with_.call({}), "plain object");
assert.throws(TypeError, () => with_.call(Temporal.Date), "Temporal.Date");
assert.throws(TypeError, () => with_.call(Temporal.Date.prototype), "Temporal.Date.prototype");
