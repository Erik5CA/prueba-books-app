import { useEffect, useRef } from "react";
import { useAppDispatch } from "../hooks/books";
import { FilterTypes, setFilter } from "../slices/bookSlice";
import ReadingList from "./ReadingList";

const FiltersContainer = () => {
  const dispatch = useAppDispatch();
  const divRef = useRef<HTMLDivElement>(null);

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
