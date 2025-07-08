const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 3000);
});

promise1
  .then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise 2 resolved");
      }, 5000);
    });
  })
  .then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise 3 resolved");
      }, 2000);
    });
  }).then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
