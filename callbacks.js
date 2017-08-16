'use strict';

var forEach = function (list, callback) {
    if (Array.isArray(list)) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i, list);
        }
    } else {
        for (var key in list) {
            callback(list[key], key, list);
        }
    }
};

var map = function (array, callback) {
    var result = [];

    forEach(array, function (element, index, array) {
        result.push(callback(element, index, array));
    });

    return result;
};

var filter = function (array, callback) {
    var result = [];

    forEach(array, function (element, index, array) {
        if (callback(element, index, array)) {
            result.push(element);
        }
    });

    return result;
};

var reduce = function (array, callback, initialValue) {
    // if initialValue is undefined, then assign result a null value
    var result = initialValue || null;

    forEach(array, function (element, index, array) {
        result = callback(result, element, index, array);
    });

    return result;
};

// examples
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var instance = filter(array, function (element) {
    return element % 2 === 0;
});

// this is tricky- remember that index is different from element
var instance2 = filter(array, function (element, index) {
    return index < 5;
});

// you can use the array itself
var instance3 = filter(array, function (element, index, array) {
    return array.length;
});

console.log('instance', instance);
console.log('instance2', instance2);
console.log('instance3', instance3);



