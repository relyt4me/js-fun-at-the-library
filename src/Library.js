

function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    },
  };
  return library;
};

function addBook(library, book) {
  if (book.genre === 'fantasy'){
    library.shelves.fantasy.unshift(book);
  } else if (book.genre === 'nonFiction'){
    library.shelves.nonFiction.unshift(book);
  } else if (book.genre === 'fiction'){
    library.shelves.fiction.unshift(book);
  };
};

function checkoutBook(library, bookTitle){
  var originalLibrary = library;
  var response = ``;
  var givesBook = false;

  function lookThroughShelf(shelf){
    for (var i = 0 ; i < shelf.length; i++) {
      if (shelf[i].title === bookTitle){
        shelf.splice(i, 1);
        givesBook = true;
      };
    };
  };

  lookThroughShelf(library.shelves.fantasy);
  lookThroughShelf(library.shelves.nonFiction);
  lookThroughShelf(library.shelves.fiction);

  if (givesBook) {
    response = `You have now checked out ${bookTitle} from the ${library.name}`;
  } else {
    response = `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
  };

  return response;
};

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
