"use strict";
exports.__esModule = true;
var assertion_lib_1 = require("@santi100/assertion-lib");
function sum(arrOrFn, start, end, step) {
    if (step === void 0) { step = 1; }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if ((isNaN(start) || isNaN(end) || isNaN(step)) && (start !== undefined && end !== undefined && step !== undefined))
        return NaN;
    if (arrOrFn instanceof Array) {
        var sum_1 = 0;
        for (var _i = 0, arrOrFn_1 = arrOrFn; _i < arrOrFn_1.length; _i++) {
            var n = arrOrFn_1[_i];
            (0, assertion_lib_1.assertTypeOf)(n, 'number', 'n');
            sum_1 += n;
        }
        return sum_1;
    }
    else if (typeof arrOrFn === 'function') {
        var sum_2 = 0;
        (0, assertion_lib_1.assertTypeOf)(start, 'number', 'start');
        (0, assertion_lib_1.assertTypeOf)(end, 'number', 'end');
        (0, assertion_lib_1.assertTypeOf)(step, 'number', 'step');
        (0, assertion_lib_1.assertExclusiveMax)(start, Infinity, 'start');
        (0, assertion_lib_1.assertExclusiveMin)(start, -Infinity, 'start');
        (0, assertion_lib_1.assertExclusiveMax)(end, Infinity, 'end');
        (0, assertion_lib_1.assertExclusiveMin)(end, -Infinity, 'end');
        (0, assertion_lib_1.assertExclusiveMax)(step, Infinity, 'step');
        (0, assertion_lib_1.assertExclusiveMin)(step, -Infinity, 'step');
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        for (var i = start; i <= end; i += step) {
            var result = arrOrFn(i);
            (0, assertion_lib_1.assertTypeOf)(result, 'number', 'result');
            if (isNaN(result))
                return NaN;
            sum_2 += result;
        }
        return sum_2;
    }
}
exports["default"] = sum;
