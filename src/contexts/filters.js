import React, { createContext, useState } from "react";

export const FilterContext = createContext({});

function FilterProvider({ children }) {
  const [ascending, setAscending] = useState(true);
  const [level, setLevel] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  const [classes, setClasses] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  const [schools, setSchools] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  return (
    <FilterContext.Provider
      value={{
        ascending,
        setAscending,
        level,
        setLevel,
        classes,
        setClasses,
        schools,
        setSchools,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
