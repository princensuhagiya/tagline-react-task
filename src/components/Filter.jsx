import { useState } from "react";
import "./Filter.css";

function FilterComponent() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
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
                    checked={isChecked}
                    onChange={handleToggle}
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
                    checked={isChecked}
                    onChange={handleToggle}
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
                    id="toggle"
                    className="toggle-input"
                    checked={isChecked}
                    onChange={handleToggle}
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
                    checked={isChecked}
                    onChange={handleToggle}
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
                    checked={isChecked}
                    onChange={handleToggle}
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
                    checked={isChecked}
                    onChange={handleToggle}
                  />
                  <label htmlFor="toggle" className="toggle-label">
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
                    checked={isChecked}
                    onChange={handleToggle}
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
                    checked={isChecked}
                    onChange={handleToggle}
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
                    checked={isChecked}
                    onChange={handleToggle}
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
                    checked={isChecked}
                    onChange={handleToggle}
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
                <label htmlFor="name">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="filter-input"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterComponent;
