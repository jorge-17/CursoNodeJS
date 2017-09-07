'use strict';

function normalize(ch) {
    if (ch === 0) {
        ch = '0';
    } else if (ch) {
        ch = ch.toString();
    } else {
        ch = ' ';
    }

    return ch;
}

module.exports.padRight = function padRight(str, num, ch) {
    str = str.toString();
    if (typeof num === 'undefined') {
        return str;
    }
    ch = normalize(ch);
    return str + ch.repeat(num - str.length);
};

module.exports.padLeft = function padLeft(str, num, ch) {
    str = str.toString();
    if (typeof num === 'undefined') {
        return str;
    }
    ch = normalize(ch);
    return ch.repeat(num - str.length) + str;
};