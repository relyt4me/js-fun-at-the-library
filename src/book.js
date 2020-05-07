function createTitle(originalTitle) {
  var modifiedTitle = `The ${originalTitle}`;
  return modifiedTitle;
};

function buildMainCharacter(name, age, pronouns){
  var character = {name, age, pronouns};
  return character;
};

function saveReview(givenReview, reviews) {
  var newArrayPlacement = reviews.length;

  if (!reviews.includes(givenReview)) {
    reviews[newArrayPlacement] = givenReview;
  };
};

function calculatePageCount(title){
   var pageCount = title.length *20;

   return pageCount;
};

function writeBook(bookTitle, bookCharacter, givenGenre){
  var pages = calculatePageCount(bookTitle);
  var book = {title: bookTitle, mainCharacter: bookCharacter, pageCount: pages, genre: givenGenre};
  return book;
};

function editBook(book) {
  reducedPages = book.pageCount * 3 / 4;
  book.pageCount = reducedPages;
  return book;
};

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
