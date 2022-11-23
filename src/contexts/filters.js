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
  const [stars, setStars] = useState(5);
  const classesNames = [
    "bard",
    "cleric",
    "druid",
    "paladin",
    "ranger",
    "sorcerer",
    "warlock",
    "wizard",
  ];
  const schoolNames = [
    "conjuration",
    "necromancy",
    "evocation",
    "abjuration",
    "divination",
    "enchantment",
    "illusion",
    "transmutation",
  ];
  const [likedSpells, setLikedSpells] = useState([]);
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
        stars,
        setStars,
        classesNames,
        schoolNames,
        likedSpells,
        setLikedSpells,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
