import "./App.css";
import BookContainer from "./components/BookContainer";
import FiltersContainer from "./components/FiltersContainer";
function App() {
  return (
    <>
      <header>
        <h1>Books APP</h1>
      </header>
      <main>
        <FiltersContainer />
        <BookContainer />
      </main>
    </>
  );
}

export default App;
