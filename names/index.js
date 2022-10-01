const peopleList = require("../country/state/city/index");
const firstName = require("../utilities/utils/index");

const getPeopleInCity = (peopleList) => {
  return firstName(peopleList);
};

module.exports = getPeopleInCity;
