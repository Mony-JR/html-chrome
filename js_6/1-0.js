
const mockDatabase = [
    { id: 1, name: "sok" },
    { id: 2, name: "sao" },
    { id: 3, name: "pisey" }
  ];
  

  function getUserInfoById(id, callback) {
    setTimeout(() => {
      const user = mockDatabase.find(user => user.id === id);
      if (user) {
        callback(null, user);
      } else {
        callback("User not found");
      }
    }, 2000);
  }
  

  function processUserData(user, callback) {
    setTimeout(() => {
      user.name = user.name.toUpperCase();
      callback(null, user);
    }, 1500);
  }
  

  function executeAndProcess(id) {
    getUserInfoById(id, (err, user) => {
      if (err) {
        console.error(err);
      } else {
        processUserData(user, (err, processedUser) => {
          if (err) {
            console.error(err);
          } else {
            console.log("Processed User Data:", processedUser);
          }
        });
      }
    });
  }
  

  executeAndProcess(2);
  