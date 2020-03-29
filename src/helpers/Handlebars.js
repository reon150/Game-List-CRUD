const helpers = {}
helpers.ifIn = (list, elem, options) => {
    if (list !== null){
        if (typeof list !== 'undefined' && list.length > 0) {
            if(list.indexOf(elem) > -1) {
                return options.fn(this);
            }
            return options.inverse(this);
        }
    }
    return options.inverse(this);
};

module.exports = helpers;