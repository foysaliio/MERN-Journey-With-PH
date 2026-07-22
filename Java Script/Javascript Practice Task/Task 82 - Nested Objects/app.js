let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701",
  },
};

console.log(user);

console.log(user.address.city);

user["address"]["country"] = "USA";
console.log(user);

delete user.address.zip;

console.log(user);