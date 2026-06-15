/**
 * Topic: Promises
 *
 * Summary:
 * - A Promise is an object that represents the eventual completion or failure of an asynchronous operation.
 *
 * - There are three states:
 *  - Pending
 *  - fulfilled
 *  - rejected
 *
 * - Three methods:
 * - then: takes two optional callbacks, one for success and one for failure.
 * - catch: takes one callback for failure.
 * - finally: takes one callback that is called regardless of the outcome.
 */

//Example
const promise = new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

// promise.then((result) => console.log(result)).catch((err) => console.log(err));
// promise.then(
//   (result) => console.log("Success:", result),
//   (err) => console.log("Error:", err),
// );
