import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Data } from "./data";

function App() {
  const [filters, setFilters] = useState({
    city: {
      dallas: false,
      "san francisco": false,
      denver: false,
    },
    category: {
      one: false,
      two: false,
    },
    type: {
      A: false,
      B: false,
      C: false,
    },
    active: {
      true: false,
      false: false,
    },
    search: "",
  });

  const [filteredData, setFilteredData] = useState(Data);

  useEffect(() => {
    applyFilter();
  }, [filters]);

  const applyFilter = () => {
    const filteredData = Data.filter((item) => {
      const { category, city, type, active, search } = filters;

      const categoryFilter =
        (!category.one && !category.two) ||
        (category.one && item.category === "one") ||
        (category.two && item.category === "two");

      const cityFilter =
        (!city.dallas && !city["san francisco"] && !city.denver) ||
        (city.dallas && item.city === "dallas") ||
        (city["san francisco"] && item.city === "san francisco") ||
        (city.denver && item.city === "denver");

      const typeFilter =
        (!type.A && !type.B && !type.C) ||
        (type.A && item.type === "A") ||
        (type.B && item.type === "B") ||
        (type.C && item.type === "C");

      const activeFilter =
        (!active.true && !active.false) ||
        (active.true && item.active === true) ||
        (active.false && item.active === false);

      const searchFilter = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return (
        categoryFilter &&
        cityFilter &&
        typeFilter &&
        activeFilter &&
        searchFilter
      );
    });

    setFilteredData(filteredData);
  };

  const handleFilterToggle = (filterType, filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: {
        ...prevFilters[filterType],
        [filterName]: !prevFilters[filterType][filterName],
      },
    }));
  };

  const handleSearchChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      search: event.target.value,
    }));
  };

  return (
    <>
      <div className="flex-filter">
        <div className="main-filter">
          <div className="filters">
            <h4>City</h4>
            <div>
              <div className="single-filter">
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="toggle-input"
                    checked={filters.city.dallas}
                    onChange={() => handleFilterToggle("city", "dallas")}
                  />
                  <label htmlFor="toggle" className="toggle-label">
                    <span className="toggle-button" />
                  </label>
                </div>
                <h3>dallas</h3>
              </div>
              <div className="single-filter">
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="toggle-input"
                    checked={filters.city["san francisco"]}
                    onChange={() => handleFilterToggle("city", "san francisco")}
                  />
                  <label htmlFor="toggle" className="toggle-label">
                    <span className="toggle-button" />
                  </label>
                </div>
                <h3>san francisco</h3>
              </div>
              <div className="single-filter">
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="toggle-denver"
                    className="toggle-input"
                    checked={filters.city.denver}
                    onChange={() => handleFilterToggle("city", "denver")}
                  />
                  <label htmlFor="toggle" className="toggle-label">
                    <span className="toggle-button" />
                  </label>
                </div>
                <h3>denver</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="main-filter">
          <div className="filters">
            <h4>Category</h4>
            <div>
              <div className="single-filter">
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="toggle-input"
                    checked={filters.category.one}
                    onChange={() => handleFilterToggle("category", "one")}
                  />
                  <label htmlFor="toggle" className="toggle-label">
                    <span className="toggle-button" />
                  </label>
                </div>
                <h3>one</h3>
              </div>
              <div className="single-filter">
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="toggle-input"
                    checked={filters.category.two}
                    onChange={() => handleFilterToggle("category", "two")}
                  />
                  <label htmlFor="toggle" className="toggle-label">
                    <span className="toggle-button" />
                  </label>
                </div>
                <h3>two</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="main-filter">
          <div className="filters">
            <h4>Type</h4>
            <div>
              <div className="single-filter">
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="toggle-input"
                    checked={filters.type.A}
                    onChange={() => handleFilterToggle("type", "A")}
                  />
                  <label htmlFor="toggle" className="type-label">
                    <span className="toggle-button" />
                  </label>
                </div>
                <h3>A</h3>
              </div>
              <div className="single-filter">
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="toggle-input"
                    checked={filters.type.B}
                    onChange={() => handleFilterToggle("type", "B")}
                  />
                  <label htmlFor="toggle" className="toggle-label">
                    <span className="toggle-button" />
                  </label>
                </div>
                <h3>B</h3>
              </div>
              <div className="single-filter">
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="toggle-input"
                    checked={filters.type.C}
                    onChange={() => handleFilterToggle("type", "C")}
                  />
                  <label htmlFor="toggle" className="toggle-label">
                    <span className="toggle-button" />
                  </label>
                </div>
                <h3>C</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="main-filter">
          <div className="filters">
            <h4>Active</h4>
            <div>
              <div className="single-filter">
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="toggle-input"
                    checked={filters.active.true}
                    onChange={() => handleFilterToggle("active", "true")}
                  />
                  <label htmlFor="toggle" className="toggle-label">
                    <span className="toggle-button" />
                  </label>
                </div>
                <h3>True</h3>
              </div>
              <div className="single-filter">
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="toggle-input"
                    checked={filters.active.false}
                    onChange={() => handleFilterToggle("active", "false")}
                  />
                  <label htmlFor="toggle" className="toggle-label">
                    <span className="toggle-button" />
                  </label>
                </div>
                <h3>False</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="main-filter">
          <div className="filters">
            <div>
              <div className="single-filter">
                <div className="search-filter">
                  <input
                    type="text"
                    placeholder="Search by name"
                    value={filters.search}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Category</th>
            <th>Type</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.category}</td>
              <td>{item.type}</td>
              <td>{item.active}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default App;
