import { useAppSelector } from "../hooks/books";
import BookCard from "./BookCard";

const BookContainer = () => {
  const {
    library: books,
    filter,
    booksAvelable,
  } = useAppSelector((state) => state.book);
  return (
    <div className="books">
      <div className="books__header">
        <h3 className="books__title">
          <span className="books__number">{booksAvelable}</span> disponibles
        </h3>
        {filter !== "Todos" && (
          <h3 className="books__title">
            <span className="books__number">{books.length}</span> libros
            encontrados para el genero{" "}
            <span className="books__genre">{filter}</span>
          </h3>
        )}
      </div>
      <div className="books__container">
        {books.map(({ book }) => (
          <BookCard book={book} key={book.title} />
        ))}
      </div>
    </div>
  );
};

export default BookContainer;
