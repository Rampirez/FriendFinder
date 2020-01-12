// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var defaultImage =
  "https://pngimage.net/wp-content/uploads/2018/06/naruto-png-icons-1.png";
var friendArray = [
  {
    weebName: "Naruto Uzimaki",
    weebProfileImage:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd1j17b-1ba7af1c-b266-42d3-87fd-49380cc8dd97.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGQxajE3Yi0xYmE3YWYxYy1iMjY2LTQyZDMtODdmZC00OTM4MGNjOGRkOTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tWMWkpE_Ip1LEVOK-JapMjzYWEzfleT6ZOQvoiZtFl0",
    weebScores: [
      "2",
      "1 (Strongly Disagree)",
      "3",
      "2",
      "2",
      "2",
      "3",
      "4",
      "Sakura",
      "Truck-kun"
    ]
  },
  {
    weebName: "Sasuke Uchiha",
    weebProfileImage:
      "https://pngimage.net/wp-content/uploads/2018/06/naruto-png-icons-1.png",
    weebScores: [
      "4",
      "1 (Strongly Disagree)",
      "4",
      "2",
      "4",
      "3",
      "4",
      "5 (Strongly Agree)",
      "Sakura",
      "Truck-kun"
    ]
  },
  {
    weebName: "Sakura Haruno",
    weebProfileImage:
      "http://icons.iconseeker.com/png/fullsize/naruto-vol-1/haruno-sakura.png",
    weebScores: [
      "3",
      "1 (Strongly Disagree)",
      "2",
      "4",
      "2",
      "4",
      "3",
      "3",
      "Sakura",
      "Truck-kun"
    ]
  },
  {
    weebName: "Hinata Hyuga",
    weebProfileImage:
      "https://findicons.com/files/icons/1275/naruto_vol_1/128/hyuga_hinita.png",
    weebScores: [
      "4",
      "1 (Strongly Disagree)",
      "4",
      "4",
      "4",
      "4",
      "4",
      "4",
      "Sakura",
      "Truck-kun"
    ]
  },
  {
    weebName: "Kakashi Hatake",
    weebProfileImage:
      "https://www.iconeasy.com/icon/png/Movie%20%26%20TV/Naruto%20Vol.%201/Hatake%20Kakashi.png",
    weebScores: [
      "2",
      "1 (Strongly Disagree)",
      "2",
      "2",
      "2",
      "2",
      "2",
      "4",
      "Sasuke",
      "Truck-kun"
    ]
  },
  {
    weebName: "Rock Lee",
    weebProfileImage:
      "http://icons.veryicon.com/png/Movie%20%26%20TV/Naruto%20Vol.%202/Rock%20Lee.png",
    weebScores: [
      "5 (Strongly Agree)",
      "5 (Strongly Agree)",
      "5 (Strongly Agree)",
      "5 (Strongly Agree)",
      "5 (Strongly Agree)",
      "5 (Strongly Agree)",
      "5 (Strongly Agree)",
      "5 (Strongly Agree)",
      "Rock Lee",
      "Truck-kun"
    ]
  },
  {
    weebName: "Akamaru",
    weebProfileImage:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd30vda-fd406620-2119-4480-a98d-a8a35898a631.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGQzMHZkYS1mZDQwNjYyMC0yMTE5LTQ0ODAtYTk4ZC1hOGEzNTg5OGE2MzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MVcvTZt2RL0TBR0QndRUiLULiMLiy133aP-8-svz1RI",
    weebScores: [
      "4",
      "1 (Strongly Disagree)",
      "2",
      "4",
      "4",
      "4",
      "3",
      "4",
      "Sakura",
      "Truck-kun"
    ]
  },
  {
    weebName: "Tenten",
    weebProfileImage:
      "http://icons.iconseeker.com/png/fullsize/naruto-vol-2/tenten.png",
    weebScores: [
      "2",
      "1 (Strongly Disagree)",
      "3",
      "2",
      "2",
      "2",
      "2",
      "2",
      "Sakura",
      "Truck-kun"
    ]
  },
  {
    weebName: "sav",
    weebPhoto:
      "https://www.meme-arsenal.com/memes/86dafdbfca59c80a2a74ebf8e3d3f412.jpg",
    weebScores: [
      "1 (Strongly Disagree)",
      "3",
      "1 (Strongly Disagree)",
      "1 (Strongly Disagree)",
      "1 (Strongly Disagree)",
      "1 (Strongly Disagree)",
      "1 (Strongly Disagree)",
      "1 (Strongly Disagree)",
      "Sasuke",
      "Society itself"
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
