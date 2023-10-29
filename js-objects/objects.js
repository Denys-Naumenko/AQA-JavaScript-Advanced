let automationQA = {};

automationQA.programmerName = "Denys";
automationQA.programmingLanguages = "JS";
automationQA.age = 26;
automationQA.languages = ["English", "Ukrainian"];
automationQA.preferences = { basicPrefences: "table" };

console.log(automationQA);

let room = {
  name: "Meeting room 1",
  size: 8,
  window: true,
};

console.log(room.name, room.window);

let movie = {
  title: "Jackass 2",
  releaseYear: 2006,
  genre: "Comedy",
};

movie.title = "Titanic";
movie.genre = "Drama";
movie.actors = {
  mainRole: "Leonardo DiCaprio",
  secondRole: "Kate Winslet",
};
movie.director = "James Cameron";

console.log(movie.title);

delete movie.title;

console.log(movie);

const englishBooks = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
];

for (let i = 0; i < englishBooks.length; i++) {
  if (englishBooks[i].title === "The Great Gatsby") {
    continue;
  }
  if (englishBooks[i].year > 1940) {
    console.log(englishBooks[i].year);
  }
  if (englishBooks[i].author === "George Orwell") {
    englishBooks[i].author = "Denys";
  }
}
console.log(englishBooks);

let mainObj = {
  firstKey: "firstValue",
  secondkey: "secondValue",
  internalObject: {
    internalFirstKey: "internalFirstValue",
    internalsecondkey: "internalSecondValue",
  },
};

for (const someKeys in mainObj) {
  if (typeof mainObj[someKeys] === "object") {
    for (const innerKey in mainObj[someKeys]) {
      console.log(mainObj[someKeys][innerKey]);
    }
  } else {
    console.log(mainObj[someKeys]);
  }
}

let user = {
  name: "Denys",
  age: 26,
  email: "denys@gmail.com",
  address: {
    city: "Kyiv",
    postalCode: "04060",
  },
};

function getUserInfo({ name, age }) {
  return { name, age };
}

function getFullAddress({ email, address: { city, postalCode } }) {
  return { email, city, postalCode };
}

console.log(getUserInfo(user));
console.log(getFullAddress(user));

const getUserInfoAdvanced = ({ name, age }) => `Name: ${name}, Age: ${age}`;
const getFullAddressAdvanced = ({ email, address: { city, postalCode } }) =>
  `Email: ${email}, City: ${city}, Postal Code: ${postalCode}`;

console.log(getUserInfoAdvanced(user));
console.log(getFullAddressAdvanced(user));

var getUserInfoAdvanced = ({ email, address: { city, postalCode };


