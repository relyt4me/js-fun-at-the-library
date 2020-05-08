function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  };
};

function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < 3; i++){
    if (shelf[i].title === bookTitle) {
      var book = shelf[i];
    };
  };

  var bookPosition = shelf.indexOf(book);
  shelf.splice(bookPosition, 1);
};

function listTitles(shelf) {
  var allTitles = `${shelf[0].title}, ${shelf[1].title}, ${shelf[2].title}`;
  return allTitles;
};

function searchShelf(shelf, bookTitle) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle){
      return true;
    }
  }
  return false;
};

module.exports = {

  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
