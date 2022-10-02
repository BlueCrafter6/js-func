const doc = document;
const logE = (err) => console.error(`JSFError: ${err}`);

/**
 * @param {string} id The id of the element you want to grab
 */

function getID(id) {
  if (!doc.getElementById(`${id}`))
    return logE(`No element found with id of '${id}'`);
  return doc.getElementById(id);
}

/**
 * @param {string} name The name of the element(s) you want to grab
 */

function getName(name) {
  if (doc.getElementsByName(`${name}`).length == 0)
    return logE(`No element(s) found with name of '${name}'`);
  return doc.getElementsByName(`${name}`);
}

/**
 *
 * @param {string} tag The tag of the element(s) you want to grab
 */

function getTagName(tag) {
  if (doc.getElementsByTagName(`${tag}`).length == 0)
    return logE(`No element(s) found with tag '${tag}'`);
  return doc.getElementsByTagName(`${tag}`);
}

/**
 * @param {string} _class The class of the element(s) you want to grab
 */

function getClass(_class) {
  if (doc.getElementsByClassName(`${_class}`).length == 0)
    return logE(`No element(s) found with class '${_class}'`);
  return doc.getElementsByClassName(`${_class}`);
}

/**
 * @param {string} elementSelector The id, class, etc. you want to use to grab the element
 */

function $(elementSelector) {
  if (!doc.querySelector(`${elementSelector}`))
    return logE(`No element found with selector of '${elementSelector}'`);
  return doc.querySelector(`${elementSelector}`);
}

/**
 * @param {HTMLElement} element Element on which the event listener will be applied on to
 * @param {string} event What to listen for (e.g. click)
 * @param {any} actions What should be done after event is triggered
 */

function addEvListener(element, event, actions) {
  if (!element)
    return logE(`No element was found with the identifier of '${element}'`);
  if (!event) return logE(`Event is undefined`);
  if (!actions) return logE(`No actions defined`);
  return element.addEventListener(`${event}`, actions);
}

/**
 * @param {HTMLElement} parent Where you will be appending your element
 * @param {boolean} child Determines if you want to use the appendChild() function
 * @param {HTMLElement} element The element to be appended
 */

function appendjsf(parent, child, element) {
  if (!child) return logE(`'child' parameter is invalid`);
  if (!element) return logE(`No element found`);
  if (child == true) {
    parent.appendChild(element);
    return;
  }
  return parent.append(element);
}

/**
 * @param {HTMLElement} element Element to be cloned
 * @param {boolean} copyDescendants Option to copy element's descendants
 */

function clone(element, copyDescendants) {
   if (!element) return logE(`No element found`)
   if (!copyDescendants) return logE(`Missing parameter: 'copyDescendantes'`)
   if (copyDescendants == true) {
    return element.cloneNode(copyDescendants)
   }
   return element.cloneNode()
}
