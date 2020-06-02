//filter the data by programType and return array with first 21 items
export const filterData = (data, programType) =>
  data.entries
    .filter(
      (entry) => entry.releaseYear >= 2010 && entry.programType === programType
    )
    .filter((entry, index) => index < 21);
