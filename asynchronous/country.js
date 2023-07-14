const { getProvinces } = require("./kuisKodingAsync");

getProvinces("id")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
