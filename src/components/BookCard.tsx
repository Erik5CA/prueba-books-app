import { Book } from "../types";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="book-card">
      <img className="book-card__image" src={book.cover} alt={book.title} />
      <div className="book-card__wrapper">
        <h2 className="book-card__title">{book.title}</h2>
        <button className="book-card__btn">Add To Lecture</button>
      </div>
    </div>
  );
};

export default BookCard;
