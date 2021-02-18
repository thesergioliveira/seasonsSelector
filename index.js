// Seasons Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.
const seasons = ["Winter", "Spring", "Summer", "Autumn"];
const months = [
  "december",
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
];
const monthCheck = (str) => {
  let season;
  let newStr = str
    .toLowerCase()
    .split(" ")
    .filter((item) => months.includes(item))
    .join("");

  if (newStr == "december" || newStr == "january" || newStr == "february") {
    season = seasons.filter((item) => item == "Winter").join("");
  } else if (newStr == "march" || newStr == "april" || newStr == "may") {
    season = seasons.filter((item) => item == "Spring").join("");
  } else if (newStr == "june" || newStr == "july" || newStr == "august") {
    season = seasons.filter((item) => item == "Summer").join("");
  } else if (
    newStr == "september" ||
    newStr == "october" ||
    newStr == "november"
  ) {
    season = seasons.filter((item) => item == "Autumn").join("");
  } else {
    season = "I couldn’t find any month in your text, sorry try again";
  }
  return newStr == " " ? season : `The month ${newStr} is in the ${seasonw}`;
};
console.log(monthCheck("I love february"));
console.log(monthCheck("We need kartoffel"));
