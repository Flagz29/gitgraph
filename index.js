// import jsonfile from "jsonfile";
// import moment from "moment";
// import simpleGit from "simple-git";
// import random from "random";

// const path = "./data.json";

// const makeCommits = async (n) => {
//   if (n === 0) {
//     await simpleGit().push();
//     return;
//   }

//   const x = random.int(0, 54);
//   const y = random.int(0, 6);

//   const date = moment().subtract(1, "y").add(1, "d").add(x, "w").add(y, "d").format();

//   const data = {
//     date: date,
//   };

//   console.log(date);

//   await jsonfile.writeFile(path, data);

//   const git = simpleGit();
//   await git.add([path]);
//   await git.commit(date, { "--date": date });
//   await git.push();

//   await makeCommits(--n);
// };

// makeCommits(100);

import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

const makeCommits = async (n) => {
  if (n === 0) {
    await simpleGit().push();
    return;
  }

  const x = random.int(0, 52); // 52 weeks in a year
  const y = random.int(0, 6);  // Days of the week

  const date = moment("2024-01-01") // Start from January 1st, 2017
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = {
    date: date,
  };

  console.log(date);

  await jsonfile.writeFile(path, data);

  const git = simpleGit();
  await git.add([path]);
  await git.commit(date, { "--date": date });
  await git.push();

  await makeCommits(--n);
};

makeCommits(100);
