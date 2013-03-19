var isArray = require('isArray'),
    each = require('each');

function flatten(input, shallow, output) {
    each(input, function(value) {
        if (isArray(value)) {
            shallow ? [].push.apply(output, value) : flatten(value, shallow, output);
        } else {
            output.push(value);
        }
    });
    return output;
}

module.exports = function(arr, shallow) {
    return flatten(arr, shallow, []);
};