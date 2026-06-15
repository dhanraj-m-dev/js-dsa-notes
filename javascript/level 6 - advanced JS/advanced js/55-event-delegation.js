/**
 * Topic : Event Delegation
 *
 * One Liner:
 * - Event delegation attaches one listener to a parent - using event bubbling and event.target to identify which child was clicked
 */

//HTML Structure

{
  /* <ul id="list">
  <li>
    <button>Item 1</button>
  </li>
  <li>
    <button>Item 2</button>
  </li>
  <li>
    <button>Item 3</button>
  </li>
</ul>; */
}

document.getElementById("list").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log("Clicked:", event.target.textContent);
  }
});
