const getTheTitles = function(books) {
    /*
    let bookTitles = [];
    for (book in books) {
        bookTitles[book] = books[book].title
    }
    return bookTitles;
    */

    return books.map((book) => book.title);

};

// Do not edit below this line
module.exports = getTheTitles;
