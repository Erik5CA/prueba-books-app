import useGetBooks from "../hooks/useGetBooks";
import BookCard from "./BookCard";

const BookContainer = () => {
  const { books } = useGetBooks();
  return (
    <div className="books__container">
      {books.map(({ book }) => (
        <BookCard book={book} key={book.title} />
      ))}
    </div>
  );
};

export default BookContainer;
