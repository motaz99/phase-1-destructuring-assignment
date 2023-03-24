const farmAnimals = "cow horse sheep pig chicken";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

// Strings

const [moo, neigh, baa, oink, cluck] = [
  "cow",
  "horse",
  "sheep",
  "pig",
  "chicken",
];

const [bessie, dolly, babe, little] = ["cow", "sheep", "pig", "chicken"];
const [blackAndWhite, black, pink] = ["cow", "sheep", "pig"];
const [red, orange, yellow, green, blue, indigo, violet] = colors;
const [r, o, y, g, b, i, v] = colors;

const indg = "indigo";

const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
const { nestedJob, nestedColor, nestedPartner } = nestedMuppet;

const { muppetName, color, song, job, partner } = muppet;

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
