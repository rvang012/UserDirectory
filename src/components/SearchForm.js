import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="name"
          type="text"
          className="form-control"
          placeholder="Type in a employee name"
          id="names"
        />
        <datalist id="names">
          {props.names.map(name => (
            <option value={name} key={name} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
