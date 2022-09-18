const doc = document
const logE = (err) => console.error(`JSFError: ${err}`)

/**
 * @param {string} id The id of the element you want to grab
*/

function getID(id) {
    if (!doc.getElementById(`${id}`)) 
    return logE(`No element found with id of '${id}'`)
    return doc.getElementById(id)
}

/**
 * @param {string} name The name of the element(s) you want to grab
 */

function getName(name) {
    if (doc.getElementsByName(`${name}`).length == 0) 
    return logE(`No element(s) found with name of '${name}'`)
return doc.getElementsByName(`${name}`)
}

/**
 * 
 * @param {string} tag The tag of the element(s) you want to grab
 */

function getTagName(tag) {
    if (doc.getElementsByTagName(`${tag}`).length == 0) 
    return logE(`No element(s) found with tag '${tag}'`)
return doc.getElementsByTagName(`${tag}`)
}

/**
 * @param {string} _class The class of the element(s) you want to grab
 */

function getClass(_class) {
    if (doc.getElementsByClassName(`${_class}`).length == 0)
return logE(`No element(s) found with class '${_class}'`)
return doc.getElementsByClassName(`${_class}`)
}