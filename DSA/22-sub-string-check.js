const mainString = "frontenddeveloper";
const subString = "developer";

function doSubStringCheck(mainString, subString) {
  for (let i = 0; i <= mainString.length - subString.length; i++) {
    let isMatch = true;

    for (let j = 0; j < subString.length; j++) {
      if (mainString[i + j] !== subString[j]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
      return true;
    }
  }

  return false;
}

let isHaveSubString = doSubStringCheck(mainString, subString);

console.log(isHaveSubString);
