const { promisify } = require("util");

function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ["John", "Jack", "Abigail"];

    if (isOffline) {
      callback(new Error("cannot retrieve users due offline"), null);
      return;
    }

    callback(null, users);
  }, 3000);
}

// digunakan untuk merubah callback based menjadi promise based.
const getUsersPromise = promisify(getUsers);

getUsersPromise(false)
  .then((users) => console.log(users))
  .catch((err) => console.log(err.message));
