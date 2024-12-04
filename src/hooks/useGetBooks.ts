import { useEffect, useState } from "react";
import { getAllBooks } from "../services/books";
import { LibraryElement } from "../types";

const useGetBooks = () => {
  const [books, setBooks] = useState<LibraryElement[]>([]);

  useEffect(() => {
    try {
      setBooks(getAllBooks());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { books };
};
export default useGetBooks;
