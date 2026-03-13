/**
 * Topic: Promise.all
 *
 * Summary:
 * - Promise.all takes an array of promises.
 * - Resolves when all promises resolve.
 * - Rejects immediately if any promise rejects.
 * - Returns results as an array.
 */

// Example:
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // [1, 2, 3]
  })
  .catch((error) => {
    console.error(error);
  });

/**
 * Topic: Promise.race
 *
 * Summary:
 * - Promise.race takes an array of promises.
 * - It settles as soon as the first promise settles.
 * - The result can be either fulfilled or rejected.
 */

const p1 = new Promise((resolve) => setTimeout(() => resolve("A"), 2000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("B"), 1000));

Promise.race([p1, p2]).then((result) => console.log(result));

/**
 * Topic : Promise.any
 *
 * Summary:
 * - Promise.any takes an array of promises.
 * - It resolves any one of the promise resolve. it won't consider the rejected once like race.
 * - It only fails if all the promises failed.
 */

// Example :
const promise4 = Promise.reject("Error 1");
const promise5 = Promise.resolve("Success");
const promise6 = Promise.reject("Error 3");

Promise.any([promise1, promise2, promise3])
  .then(console.log)
  .catch(console.log);

/**
 * Topic: Promise.allSettled
 *
 * Summary:
 * - Takes an array of promises.
 * - Waits for all promises to settle (fulfilled or rejected).
 * - Returns an array with status and value/reason of each promise.
 */

//Example :
const p4 = Promise.resolve("A");
const p5 = Promise.reject("Error");
const p6 = Promise.resolve("C");

Promise.allSettled([p4, p5, p6]).then(console.log);
