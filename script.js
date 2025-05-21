// let username = "Giorgi"; // 'Giorgi' | 'hello ${username}'

// console.log(typeof username); //string

// let age = 30;

// console.log(typeof age); //number

// let isstudent = false;

// console.log(typeof isstudent); //boolean

// let testone = null;

// console.log(typeof testone); //object

// let job;

// console.log(typeof job); //undefined

//object-ის სახელი
// let user1 = {
//   //key:value
//   id: 1234,
//   username: "paata",
//   isstudent: false,
//   email: "p.batsikadze@gmail.com",
//   recoveremail: null,
//   laptop: "ASUS",
//   address: {
//     country: "Georgia",
//     city: "tbilisi",
//     street: "agmashenebeli",
//     homeid: 10,
//   },
// };

// console.log(user1.address.country);
// console.log(user1["address".street]);

// let keyword = "username";
// console.log(user1.keyword);

// console.log(user1[keyword]);

// console.log(obj.username);
// console.log(obj.id);
// console.log(obj.isstudent);
// console.log(obj.email);
// console.log(obj.recoveremail);

// let test = "giorgi";
// console.log(test[0]);
// console.log(obj);

// let userarray = ["paata", 10, false, "p.batiskadze@gmail.com"];

// console.log(userarray);

//userarray.unshift() // damateba

// userarray.pop(); //boloshi washla
// userarray.shift(); //tavshi washla

//console.log(userarray);

// let userlist = [
//   { username: "paata", age: 10 },
//   { username: "ani", age: 12 },
//   { username: "giorgi", age: 3, isstudent: false },
// ];
// console.log(userlist[0]);

// let userobj = {
//   username: "paata",
// };

// console.log(userobj.username);

// console.log(userlist[0].username);
// console.log(userlist[2].age);
// console.log(userlist[2].isstudent);

let temp = 30;

if (temp >= 30) {
  temp = "ცხელა, მზიანი ამინდია";
} else if (temp <= 0) {
  temp = "ცივა, ცუდი ამინდია";
} else if (temp > 0 && temp < 30) {
  temp = "ნორმალური ტემპერატურაა";
} else {
  console.log("ra moqmedebaa ra vitarebaa");
}

console.log(temp);
