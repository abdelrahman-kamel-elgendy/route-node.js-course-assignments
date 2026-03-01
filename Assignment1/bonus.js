/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let currentValue = init;

    return {
        increment: () => ++currentValue,
        decrement: () => --currentValue,
        reset: () => currentValue = init
    };
};
