function getUsers(isOffline) {
  // simulate network delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = ["John", "Jack", "Abigail"];

      if (isOffline) {
        reject(new Error("cannot retrieve users due offline"), null);
        return;
      }

      resolve(users);
    }, 3000);
  });
}

getUsers(true)
  .then((users) => console.log(users))
  .catch((err) => console.log(err.message));
