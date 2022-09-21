import { useGlobalContext } from '../context'
import { FormEvent, useEffect, useRef } from "react";
import { AppContextProps } from "../interfaces";

const SearchForm = () => {
  const { setSearchTerm }: AppContextProps = useGlobalContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={(input) => { input && input.focus() }}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm
