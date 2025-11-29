"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatValue = (fv) => {
    if (typeof fv === 'string') {
        return fv.toUpperCase();
    }
    else if (typeof fv === 'number') {
        return fv * 10;
    }
    else if (typeof fv === 'boolean') {
        return !fv;
    }
};
// console.log(formatValue('true'));
const getLength = () => {
};
//# sourceMappingURL=solution.js.map