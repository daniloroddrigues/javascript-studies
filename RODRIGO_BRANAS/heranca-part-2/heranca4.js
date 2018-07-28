/**
 * Created by damty on 11/01/2018.
 */

// Prototipo entendendo por tras do new
var _new = function (f) {

    var res = {};

    if (f.prototype !== null) {
        res.__proto__ = f.prototype;
    }

    var ret = f.apply(res, Array.prototype.slice.call(arguments, 1));

    if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
        return ret;
    }

    return res;
};



