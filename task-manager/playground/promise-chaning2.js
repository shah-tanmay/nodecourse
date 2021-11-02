require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndRemove("5ff15c5d2f3bd01bd4d4b27b")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndRemove(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5ff1e45a2e45f237cc805a52")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
