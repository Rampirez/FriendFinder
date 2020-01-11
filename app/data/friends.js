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
    weebProfileImage: defaultImage
  },
  {
    weebName: "Sasuke Uchiha",
    weebProfileImage: defaultImage
  },
  {
    weebName: "Sakura Haruno",
    weebProfileImage: defaultImage
  },
  {
    weebName: "Hinata Hyuga",
    weebProfileImage: defaultImage
  },
  {
    weebName: "Kakashi Hatake",
    weebProfileImage: defaultImage
  },
  {
    weebName: "Rock Lee",
    weebProfileImage: defaultImage
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
