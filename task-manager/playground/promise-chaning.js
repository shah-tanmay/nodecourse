require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5ff1b1e4b628f020ccfa43a4", { age: 10 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 10 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age: age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5ff15a82bbf4c231303ee2c9", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
