const contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234",
};

console.log(contact);

contact.email = contact.email.toLowerCase();

console.log(contact);

for (const key in contact) {
  console.log(`${key}: ${contact[key]}`);
}

contact.favoriteWords = [];

console.log(contact);

contact.favoriteWords.push("Parul", "Ashad", "Mim");

console.log(contact);

let contactName = contact.name;
let reverseContactName = "";

for (const contactN of contactName) {
  reverseContactName = contactN + reverseContactName;
}

console.log(reverseContactName);

const emailCheck = contact.email.includes("@email.com");

if (emailCheck) {
  console.log("Email is valid!");
} else {
  console.log("Your email address is wrong!");
}
