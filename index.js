/**
 * Method will when called with a DOM event will prevent the default behavior along with
 * stopping it from bubbling up the DOM.
 * @param {object} evt - DOM event object which has to be murdered.
 */
const murderEvent = function (evt) {
    evt.cancel = true;
    evt.returnValue = false;
    evt.cancelBubble = true;
    if (evt.stopPropagation) 
        evt.stopPropagation();
    if (evt.preventDefault) 
        evt.preventDefault();
    return false;
};

module.exports = murderEvent;