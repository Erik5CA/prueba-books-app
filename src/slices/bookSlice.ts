import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { library } from "../mock/books.json";
import { Book, LibraryElement } from "../types/index";
import toast from "react-hot-toast";

export enum FilterTypes {
  "all" = "Todos",
  "fantasy" = "Fantasía",
  "sci-fi" = "Ciencia Ficción",
  "zombies" = "Zombies",
  "terror" = "Terror",
}

interface LibraryState {
  library: LibraryElement[];
  filter: FilterTypes;
  redingList: LibraryElement[];
  redingListIDs: string[];
  booksAvelable: number;
}

const initialState: LibraryState = {
  library,
  filter: FilterTypes.all,
  redingList: [],
  redingListIDs: [],
  booksAvelable: library.length,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setFilter: (state, filter) => {
      state.filter = filter.payload;
      state.library =
        filter.payload === "Todos"
          ? initialState.library
          : initialState.library.filter(
              ({ book }) =>
                book.genre.toLowerCase() === filter.payload.toLowerCase()
            );
    },
    addToReadingList: (state, action: PayloadAction<Book>) => {
      state.redingList = [...state.redingList, { book: action.payload }];
      state.redingListIDs = [...state.redingListIDs, action.payload.ISBN];
      state.booksAvelable = state.booksAvelable - 1;
      toast.success(`"${action.payload.title}" añadido a la lista de lectura`, {
        style: {
          background: "#480686",
          color: "#fff",
        },
      });
    },
    removeFromReadingList: (state, action: PayloadAction<string>) => {
      state.redingList = state.redingList.filter(
        ({ book }) => book.ISBN !== action.payload
      );
      state.redingListIDs = state.redingListIDs.filter(
        (id) => id !== action.payload
      );
      state.booksAvelable = state.booksAvelable + 1;
      toast.success("Libro removido de la lista de lectura", {
        style: {
          background: "#480686",
          color: "#fff",
        },
      });
    },
  },
});

export const { setFilter, addToReadingList, removeFromReadingList } =
  bookSlice.actions;

export default bookSlice.reducer;
