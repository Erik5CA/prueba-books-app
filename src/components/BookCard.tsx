import { useAppDispatch, useAppSelector } from "../hooks/books";
import { addToReadingList, removeFromReadingList } from "../slices/bookSlice";
import { Book } from "../types";
import { BookCheck } from "lucide-react";

const BookCard = ({ book }: { book: Book }) => {
  const booksAdded = useAppSelector((state) => state.book.readingListIDs);
  const dispatch = useAppDispatch();
  const isAdded = booksAdded.includes(book.ISBN);
  return (
    <div className="book-card">
      <div className="book-card__added">{isAdded && <BookCheck />}</div>
      <img className="book-card__image" src={book.cover} alt={book.title} />
      <div className="book-card__wrapper">
        <div className="book-card__info">
          <h2 className="book-card__title">{book.title}</h2>
          <p>{book.author.name}</p>
          <p>{book.year}</p>
        </div>
        {isAdded ? (
          <button
            onClick={() => dispatch(removeFromReadingList(book.ISBN))}
            className="book-card__btn book-card__btn--danger"
          >
            Remover
          </button>
        ) : (
          <button
            onClick={() => dispatch(addToReadingList(book))}
            className="book-card__btn"
          >
            Añadir
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
