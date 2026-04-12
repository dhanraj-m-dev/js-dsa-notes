/**
 * Topic : Memoization
 *
 * one liner :
 * Memoization caches the function results so same inputs return cached output
 * instantly. avoid redundant calculation
 *
 * Summary:
 * - Stores results in a cache object using input as key
 * - Returns cached input if the same input cached again
 * - Use Json.stringify to converts args array into cache key
 * - Trades memory for speed - cache grows with unique inpus
 * - Used in react via useMemo and useCallback
 */

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    console.log(cache, "CACHE");

    if (cache[key] !== undefined) {
      console.log("From cache!");
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function heavyCalculation(n) {
  console.log("Calculating...");
  return n * n * n;
}

const memoized = memoize(heavyCalculation);

console.log(memoized(5)); // Calculating... 125
console.log(memoized(5)); // From cache! 125
console.log(memoized(6)); // Calculating... 216
console.log(memoized(6)); // From cache! 216
