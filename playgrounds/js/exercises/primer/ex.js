// TODO: define addFavoriteBook(..) function
const addFavoriteBook = (book) => {
  if (!book.toLowerCase().includes("great")) favoriteBooks.push(book);
};

// TODO: define printFavoriteBooks() function
const printFavoriteBooks = () => {
  console.log(
    `Favorite Books: ${favoriteBooks.length}`,
    favoriteBooks.join("; ")
  );
};
var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();
