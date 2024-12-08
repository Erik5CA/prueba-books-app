import { useAppDispatch, useAppSelector } from "../hooks/books";
import { removeFromReadingList } from "../slices/bookSlice";

const ReadingList = () => {
  const readingList = useAppSelector((state) => state.book.redingList);
  const dispatch = useAppDispatch();

  return (
    <div className="filters__reading-list">
      <div className="filters__reading-list-disp">
        <p>Lista de lectura</p>
        <div className="reading-list__baget">{readingList.length}</div>
      </div>
      <aside className="reading-list">
        {readingList.length === 0 ? (
          <p>No tienes libros añadios para leer</p>
        ) : (
          readingList.map(({ book }) => (
            <div className="reading-list__book" key={book.title}>
              <div className="reading-list__image">
                <img src={book.cover} alt={book.title} />
              </div>
              <div className="reading-list__info">
                <h3 className="reading-list__title">{book.title}</h3>
                <button
                  onClick={() => dispatch(removeFromReadingList(book.ISBN))}
                  className="reading-list__btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </aside>
    </div>
  );
};

export default ReadingList;
