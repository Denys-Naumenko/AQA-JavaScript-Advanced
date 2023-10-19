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


// Task4 


class ApiController {
    async fetchComments() {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments/1');
      return response.json();
    }
  
    async fetchPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
      return response.json();
    }
  
    async fetchBoth() {
      const [comments, posts] = await Promise.all([this.fetchComments(), this.fetchPosts()]);
      return { comments, posts };
    }
  
    async fetchFirstCompleted() {
      const [comments, posts] = await Promise.race([this.fetchComments(), this.fetchPosts()]);
      return comments || posts;
    }
  }
  
  const apiController = new ApiController();
  
  apiController.fetchBoth()
    .then(result => {
      console.log('Results using Promise.all:');
      console.log('Comments:', result.comments);
      console.log('Posts:', result.posts);
    });
  
  apiController.fetchFirstCompleted()
    .then(result => {
      console.log('Results using Promise.race:');
      console.log('Comments or Posts (first completed request):', result);
    });