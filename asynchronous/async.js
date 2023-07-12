function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ["John", "Jack", "Abigail"];

    if (isOffline) {
      /* 
        ! showUser(error,user)
        */
      callback(new Error("cannot retrieve users due offline"), null);
      return;
    }

    callback(null, users);
  }, 3000);
}

function showUser(error, user) {
  console.log(error);
  console.log(user);
}

getUsers(true, showUser);
