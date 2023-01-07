const doc = document;
const logE = (err) => console.error(`JSFError: ${err}`);

console.log(
`%c[js-functions]`,
`font-weight:700`,
`You are using an outdated version of js-functions (v0.5BETA). Please check the repository for the latest version:
https://github.com/BlueCrafter6/js-func`
);

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
