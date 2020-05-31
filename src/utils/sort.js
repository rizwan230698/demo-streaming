const titleAToZ = (a, b) => {
  if (a.title > b.title) {
    return 1;
  } else {
    return -1;
  }
};

const titleZtoA = (a, b) => {
  if (a.title > b.title) {
    return -1;
  } else {
    return 1;
  }
};

const releaseYearHighToLow = (a, b) => {
  return b.releaseYear - a.releaseYear;
};

const releaseYearLowToHigh = (a, b) => {
  return a.releaseYear - b.releaseYear;
};

export default {
  titleAToZ,
  titleZtoA,
  releaseYearLowToHigh,
  releaseYearHighToLow,
};
