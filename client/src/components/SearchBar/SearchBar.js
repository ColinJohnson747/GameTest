import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
function SearchBar() {
  // const [formObject, setFormObject] = useState({});
  const [search, setSearch] = useState("");
  const [items, setItems] = useState("");
  let history = useHistory();

  useEffect(() => {
    let mounted = true;
    API.getAllItems().then((res) => {
      if (mounted) {
        setItems(res.data);
      }
    });
    return function cleanup() {
      mounted = false;
    };
  }, []);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  function submit(event) {
    event.preventDefault();
    const search = event.target.value;
    API.getItems(search).then((res) => {
      setItems(res.data);
    });
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="searchMain"
            aria-describedby="emailHelp"
            name="search"
            value={search}
            placeholder="Search Database"
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}
export default SearchBar;
