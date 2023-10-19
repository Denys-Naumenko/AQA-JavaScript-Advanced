//Task 1

const userSettings = {
  username: "john_doe",
  theme: "dark",
  language: "en",
  notifications: true,
};

const json = JSON.stringify(userSettings);

console.log(json);

const object = JSON.parse(json);

console.log(object);

//Task 2

async function delayAndLog(message, miliseconds) {
  await new Promise(resolve => setTimeout(resolve, miliseconds));
  console.log(message);
}

delayAndLog("Message with delay 1 sec", 1000);
delayAndLog("Message with delay 2 sec", 2000);

//Task 3

async function fetchComments() {
  let response = await fetch("https://jsonplaceholder.typicode.com/comments/1");
  return response;
};

async function fetchPosts() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  return response;
};

let resultAll = Promise.all([fetchComments(), fetchPosts()]);
resultAll.then((showResult) => console.log("Promise All:",showResult));

let resultRace = Promise.race([fetchComments(), fetchPosts()]);
resultRace.then((showResult) => console.log("Promise Race:",showResult));