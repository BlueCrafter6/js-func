// SHORTEND NAMES //
const doc = document;
// SHORTEND FUNCTIONS  //
/**
 * .getElementById()
 * @param {string} elementId
 */ function getID(elementId) {
  return doc.getElementById(elementId);
}
/**
 * .getElementsByName()
 * @param {string} elementId
 */ function getName(elementId) {
  return doc.getElementsByName(`${elementId}`);
}
/**
 * .getElementsByTagName()
 * @param {string} qualifiedName
 */ function getTagName(qualifiedName) {
  return doc.getElementsByTagName(`${qualifiedName}`);
}
/**
 * .getElementsByClassName()
 * @param {string} classNames
 */ function getClass(classNames) {
  return doc.getElementsByClassName(`${classNames}`);
}
/**
 * .querySelector()
 * @param {string} selectors
 */ function $(selectors) {
  return doc.querySelector(`${elementSelector}`);
}
/**
 * .addEventListener()
 * @param {HTMLElement} element
 * @param {string} listener
 * @param {any} _callback
 */ function evListener(element, event, _callback) {
  return element.addEventListener(`${event}`, _callback);
}
/**
 * .append()
 * @param {Element} parent
 * @param {boolean} useChild Determines if you want to use the appendChild() function
 * @param {HTMLElement} element
 */ function apnd(parent, useChild, element) {
  if (useChild == true) {
    parent.appendChild(element);
    return;
  }
  return parent.append(element);
}
/**
 * .clone()
 * @param {HTMLElement} element
 * @param {boolean | undefined} copyDescendants
 */ function clone(element, copyDescendants) {
  if (copyDescendants === true) {
    return element.cloneNode(copyDescendants);
  }
  return element.cloneNode();
}
/**
 * .createAttribute()
 * @param {string} localName
 */ function createAttr(localName) {
  return doc.createAttribute(`${localName}`);
}
/**
 * .createAttributeNS
 * @param {string | null} namespace
 * @param {string} qualifiedName
 */ function createAttrNS(namespace, qualifiedName) {
  return doc.createAttributeNS(namespace, qualifiedName);
}
/**
 * .createDocumentFragment
 */ function createDocFrag() {
  return doc.createDocumentFragment();
}
/**
 * .createElement
 * @param {string} tagName
 */ function createElem(tagName) {
  return doc.createElement(tagName);
}
/**
 * .compareDocumentPosition()
 * @param {Node} other
 */ function compareDocPos(other) {
  doc.compareDocumentPosition(other);
}
