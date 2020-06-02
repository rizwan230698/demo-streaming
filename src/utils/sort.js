const titleAToZ = (a, b) => (a.title > b.title ? 1 : -1);

const titleZtoA = (a, b) => (a.title > b.title ? -1 : 1);

const releaseYearHighToLow = (a, b) => b.releaseYear - a.releaseYear;

const releaseYearLowToHigh = (a, b) => a.releaseYear - b.releaseYear;

export default {
  titleAToZ,
  titleZtoA,
  releaseYearLowToHigh,
  releaseYearHighToLow,
};
