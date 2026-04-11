/**
 * Topic: Throttling
 *
 * One liner:
 * Throttling Ensures a function fires at most once per time interval. regardless of how many times
 * it's triggered.
 *
 * Real world usecases :
 * - Scroll events -> update UI every 200ms not every pixel
 * - Window resize -> recalculate layout every 300ms
 * - Game controls -> move character every 100ms
 *
 * Debounce vs Throttle:
 * Debouce - Fires after user stops triggering
 * Throttle -  Fires at most once for a intervel regardless of how many times it's triggered
 */

function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
}

function handleScroll() {
  console.log("Scroll handled at:", Date.now());
}

const throttledScroll = throttle(handleScroll, 200);

// Simulating rapid scroll events
throttledScroll(); // fires ✅
throttledScroll(); // ignored ⏭️
throttledScroll(); // ignored ⏭️
// 200ms later...
throttledScroll(); // fires ✅
