export type Library = {
  library: LibraryElement[];
};

export type LibraryElement = {
  book: Book;
};

export type Book = {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
};

export type Author = {
  name: string;
  otherBooks: string[];
};
