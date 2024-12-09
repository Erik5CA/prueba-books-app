import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/books";
import { FilterTypes, setFilter } from "../slices/bookSlice";
import ReadingList from "./ReadingList";

const FiltersContainer = () => {
  const dispatch = useAppDispatch();
  const divRef = useRef<HTMLDivElement>(null);
  const { filter } = useAppSelector((state) => state.book);

  useEffect(() => {
    const onScroll = () => {
      divRef.current?.classList.toggle("window-scroll", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="filters" ref={divRef}>
      <div>
        <select
          className="filters__genre"
          onChange={(e) => dispatch(setFilter(e.target.value))}
          name="genre"
          id="genre"
          defaultValue={filter}
        >
          {Object.entries(FilterTypes).map(([key, literal]) => (
            <option className="filter__option" key={key} value={literal}>
              {literal}
            </option>
          ))}
        </select>
      </div>

      <ReadingList />
    </div>
  );
};

export default FiltersContainer;
