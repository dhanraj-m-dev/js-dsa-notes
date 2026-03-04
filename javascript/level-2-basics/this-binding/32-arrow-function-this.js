/**
 * Topic : Arrow function this
 *
 * Summary :
 * - Arrow functions do not have their own this.
 * Instead, they inherit this from their lexical (surrounding) scope.
 */

// Example :
const obj = {
  name: "Dhanraj",
  normal: function () {
    console.log("Normal:", this.name);

    const arrow = () => {
      console.log("Arrow:", this.name);
    };

    arrow();
  },
};

obj.normal();