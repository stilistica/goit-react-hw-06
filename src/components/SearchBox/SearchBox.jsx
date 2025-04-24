import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice.js";

function SearchBox() {
  const name = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();
  const filtersContacts = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={s.container}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={name}
        onChange={filtersContacts}
        className={s.input}
      />
    </div>
  );
}

export default SearchBox;
