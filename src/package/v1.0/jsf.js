const doc = document;
const logE = (err) => console.error(`JSFError: ${err}`);

/**
 * Gets an element using an id
 * @param {string} id The id of the element you want to grab
 */

function getID(id) {
  if (!doc.getElementById(`${id}`))
    return logE(`No element found with id of '${id}'`);
  return doc.getElementById(id);
}

/**
 * Gets an element using a name
 * @param {string} name The name of the element(s) you want to grab
 */

function getName(name) {
  if (doc.getElementsByName(`${name}`).length == 0)
    return logE(`No element(s) found with name of '${name}'`);
  return doc.getElementsByName(`${name}`);
}

/**
 * Gets element(s) using a tag name
 * @param {string} tag The tag of the element(s) you want to grab
 */

function getTagName(tag) {
  if (doc.getElementsByTagName(`${tag}`).length == 0)
    return logE(`No element(s) found with tag '${tag}'`);
  return doc.getElementsByTagName(`${tag}`);
}

/**
 * Gets element(s) using a class
 * @param {string} _class The class of the element(s) you want to grab
 */

function getClass(_class) {
  if (doc.getElementsByClassName(`${_class}`).length == 0)
    return logE(`No element(s) found with class '${_class}'`);
  return doc.getElementsByClassName(`${_class}`);
}

/**
 * Gets an element from the DOM (using querySelector)
 * @param {string} elementSelector The element you want to select (using the appropriate symbols)
 */

function $(elementSelector) {
  if (!doc.querySelector(`${elementSelector}`))
    return logE(`No element found with selector of '${elementSelector}'`);
  return doc.querySelector(`${elementSelector}`);
}

/**
 * Adds an event listener to an element
 * @param {HTMLElement | HTMLBodyElement} element Element on which the event listener will be applied on to
 * @param {string} event What to listen for (e.g. click)
 * @param {any} actions What should be done after event is triggered
 */

function evListener(element, event, actions) {
  if (!element) return logE(`'element' is undefined`);
  if (!event) return logE(`'event' is undefined`);
  if (!actions) return logE(`'actions' is undefined`);
  return element.addEventListener(`${event}`, actions);
}

/**
 * Appends an element
 * @param {Element} parent Where you will be appending your element
 * @param {boolean} useChild Determines if you want to use the appendChild() function
 * @param {HTMLElement} element The element to be appended
 */

function apnd(parent, useChild, element) {
  if (!parent) return logE(`'parent' is undefined`);
  if (!useChild) return logE(`'child' is undefined`);
  if (!element) return logE(`'element' is undefined`);
  if (useChild == true) {
    parent.appendChild(element);
    return;
  }
  return parent.append(element);
}

/**
 * Clones an element
 * @param {HTMLElement | HTMLBodyElement} element Element to be cloned
 * @param {boolean | undefined} copyDescendants Option to copy element's descendants
 */

function clone(element, copyDescendants) {
  if (!element) return logE(`'element' is undefined`);
  if (copyDescendants === true) {
    return element.cloneNode(copyDescendants);
  }
  return element.cloneNode();
}

/**
 * Creates an attribute
 * @param {string} name The name of the attribute
 */

function createAttr(name) {
  if (!name) return logE(`'name' is undefined`);
  return doc.createAttribute(`${name}`);
}

/**
 * No information available
 * @param {string | null} namespace
 * @param {string} qualifiedName
 */

function createAttrNS(namespace, qualifiedName) {
  return doc.createAttributeNS(namespace, qualifiedName);
}

/**
 * Creates a document fragment
 */

function createDocFrag() {
  return doc.createDocumentFragment();
}

/**
 * Creates a new element
 * @param {string} element The tagname of the element you want to create
 */

function createElem(element) {
  if (!element) return logE(`'element' is undefined`);
  return doc.createElement(element);
}