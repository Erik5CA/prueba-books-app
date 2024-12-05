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
}

const initialState: LibraryState = {
  library,
  filter: FilterTypes.all,
  redingList: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setFilter: (state, filter) => {
      console.log(filter);
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
      toast.success(`"${action.payload.title}" added to Reading List`, {
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
    },
  },
});

export const { setFilter, addToReadingList, removeFromReadingList } =
  bookSlice.actions;

export default bookSlice.reducer;
