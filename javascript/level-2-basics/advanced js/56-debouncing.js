/**
 * Topic : Debouncing
 *
 * One liner:
 * - Debouncing delays a function call until the user stops triggering it. cancelling and resetting
 * timer on every trigger.
 *
 * Real world usecases:
 * - search Input -> wait for user to stop typing
 * - window resize -> wait for resize to finish
 * - Form validation -> validate after user stops typing
 */

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const searchApi = (query) => {
  console.log("API call with:", query);
};

const debouncedSearch = debounce(searchApi, 500);

debouncedSearch("D"); // timer starts
debouncedSearch("Dh"); // timer reset
debouncedSearch("Dha"); // timer reset
