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
    weebProfileImage: defaultImage,
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
    weebProfileImage: defaultImage,
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
    weebProfileImage: defaultImage,
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
    weebProfileImage: defaultImage,
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
    weebProfileImage: defaultImage,
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
    weebProfileImage: defaultImage,
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
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
