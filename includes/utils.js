let someVariable = "createUniqueKey";
let someFloatingPointNumber = 9.4;

/**
 * Get book description
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function getBookDescription(title, author) {
    return `Title: ${title}, author: ${author}`;
}

module.exports = {
    someVariable,
    someFloatingPointNumber,
    getBookDescription,
};
