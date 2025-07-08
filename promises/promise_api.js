const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 1 resolved");
    // resolve("Promise 1 resolved");
    reject("Promise 1 rejected");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 2 resolved");
    // resolve("Promise 2 resolved");
    reject("Promise 2 rejected");
  }, 1000);
} );

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 3 resolved");
    // resolve("Promise 3 resolved");
    reject("Promise 3 rejected");
  }, 1000);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 4 resolved");
    // resolve("Promise 4 resolved");
    reject("Promise 4 rejected");
  }, 1000);
});

Promise.all([promise1, promise2, promise3, promise4])
  .then((results) => {
    results.forEach((result) => {
      console.log(result);
    });
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

Promise.allSettled([promise1, promise2, promise3, promise4])
  .then((results) => {
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log("Fulfilled:", result.value);
      } else {
        console.log("Rejected:", result.reason);
      }
    });
  });

Promise.race([promise1, promise2, promise3, promise4])
  .then((result) => {
    console.log("First resolved:", result);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

Promise.any([promise1, promise2, promise3, promise4])
  .then((result) => {
    console.log("First fulfilled:", result);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
