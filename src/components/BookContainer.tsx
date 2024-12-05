import { useAppSelector } from "../hooks/books";
import BookCard from "./BookCard";

const BookContainer = () => {
  const books = useAppSelector((state) => state.book.library);
  return (
    <div className="books__container">
      {books.map(({ book }) => (
        <BookCard book={book} key={book.title} />
      ))}
    </div>
  );
};

export default BookContainer;
