// sort by a-z
const titleAToZ = (a, b) => (a.title > b.title ? 1 : -1);

//sort by z-a
const titleZToA = (a, b) => (a.title > b.title ? -1 : 1);

//sort by latest to oldest
const releaseYearHighToLow = (a, b) => b.releaseYear - a.releaseYear;

//sort by oldest to latest
const releaseYearLowToHigh = (a, b) => a.releaseYear - b.releaseYear;

export default {
  titleAToZ,
  titleZToA,
  releaseYearLowToHigh,
  releaseYearHighToLow,
};
