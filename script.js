//let number = +prompt("Please enter a number");
//if (Number.isInteger(number) && number % 2 == 0) {
//  console.log ("Juft son");
//}else{
//    console.log ("toq son");
//}

/*let number = +prompt("Please enter a number");
let number1 = +prompt("Please enter a number2");
if (Number.isInteger(number) && Number.isInteger(number1) &&  number>0 && number1>0) {
    console.log ("musbat");
}else{
    console.log ("manfiy");
}*/

/*let a = +prompt("Please enter a ");
let b = +prompt("Please enter b ");
let c = +prompt("Please enter c ");
if (
  Number.isInteger(a) &&
  Number.isInteger(b) &&
  Number.isInteger(c) &&
  a > b &&
  b > c
) {
  console.log("a bdan katta b cdan katta");
} else {
  console.log("error");
}
*/

/*
let a = +prompt("Please enter a ");
let b = +prompt("Please enter b ");
let c = +prompt("Please enter c ");
if (a > b && b > c) {
  console.log("a bdan katta b cdan katta");
} else {
  console.log("error");
}
*/

/*
let number = +prompt("Please enter a number");
let number1 = +prompt("Please enter a number2");
if (number% 2==1 && number1 % 2==1) {
    console.log ("toq");
}else{
    console.log ("juft");
}

*/

/*
let a = +prompt("please enter a ");
let b = +prompt("please enter b");
let c = +prompt("please enter c");
let d = +prompt("please enter d");
if(a > 0 && b > 0 && c > 0 && d > 0 ) {
     console.log("musbat")
}else{
     console.log("manfiy son")
}*/

//12
/*
let a = +prompt("Please enter a ");
if (Number.isInteger(a) && a > 0) {
  console.log(a + 1);
} else {
  console.log(a - 1);
}
*/

//13
/*
let a = +prompt("Please enter a ");
if (Number.isInteger(a) && a > 0) {
  console.log(a + 3);
} else {
  console.log(a - 2);
}
*/

//14
/*
let a = +prompt("please enter a ");
let b = +prompt("please enter b");
if (Number.isInteger(a) && Number.isInteger(b)) {
  console.log(Math.max(a ,b));
}
*/

//15
/*
let a = +prompt("please enter a ");
let b = +prompt("please enter b ");
let c = +prompt("please enter c ");
if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
  console.log(Math.max(a, b, c));
}
*/

//16
/*
let a = +prompt("please enter a ");
let b = +prompt("please enter b ");
let c = +prompt("please enter c ");
if (Number) {
  console.log(Math.min(a, b, c));
}
*/
/*
var number = parseInt(prompt("Raqam kiriting:"));
if (number > 0){
   if (number % 2 == 1) {
        console.log("Raqam ijobiy va toq");
   } else {
        console.log("Raqam ijobiy va juft");
   }
} else if (number < 0) {
   if (number % 2 == -1) {
     console.log("Raqam manfiy va toq");
   } else {
     console.log("Raqam manfiy va juft");
   }
} else {
   console.log("Raqam nolga teng");
}
*/

//20
/*
let a = +prompt("please enter your was born ");
if( a=2024-a){
    console.log(" ${} sizning yoshingiz" )
}*/

/*
let a = +prompt("Please enter b ");
let b = +prompt("Please enter c ");
for (let i = a; i <= b; i++) {
  console.log(i)
  
}
*/

///////////////////      array  /////////////////
/*
Javascript tilida, massivlar (arraylar) bir nechta elementlarni o'z ichiga olgan o'zgaruvchi sifatida ishlatiladigan obyektlar hisoblanadi. Massivlar bir nechta elementlarni bir qator musteriga joylashtiradi va har bir element o'zining indekssiga ega bo'ladi. Indekslar 0 dan boshlanadi.

Massivlar elementlarni qo'shish, o'chirish, o'zgartirish va massivning uzunligini aniqlash imkonini beradi.

Massivning sarlavhalanishi quyidagicha bo'i:

var myArray = [element1, element2, ... elementN];

element1, element2, ... elementN JavaScript tilida matnlar, sonlar, boolean sifatidagi ma'lumotlar yoki boshqa obyektlar bo'lishi mumkin.

Massivdagi har bir elementning o'zining indeksi, massivning sarlavhasi orqali yoki massiv ustida quyidagicha sintaksis orqali olingadi:

var value = myArray[index];

Massiv diagonal elementlari bilan ham ishlash imkonini beradi:

var diagonalElem = myArray[i][j];

JavaScript massivlari ko'plab metodlarga ega, masalan: push(), pop(), shift(), unshift(), splice() va hokazo. Bu metodlar orqali massiv elementlari ustida arifmetik, qadriy, tartibiy, qidiruv amallarini bajarish imkoniyati mavjud.

JavaScript massivlari hajmi o'zgartirib, kamaytirib, tarkibini o'zgartirish va boshqa arrayni nusxalash imkonini beradi.*/

/*function arrayNum(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push(i);
    }
  }
  return arr;
}
let n = 100;
let result = arrayNum(n);
console.log(result);

*/
/*
function arrayNum(n) {
  let summa = 0;
  for (let i = 1; i <= n.length; i = i + 10) {
    if (i % 2 == 1) {
      summa += n[i];
    }
  }
  return summa;
}
let n = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let result = arrayNum(n);
console.log(result);
*/

/*
const laptop = {
  name: "Lenevo",
  yerar: 2018,
  color: "black",
  ram: 4,
  processor: "Intel Cloren N400 1.10GHz 1.10 GHz",
  type: "64 bit",
  lenguage: "english",
  system: "windows 10 pro",
  pen: "no pen",
  touch: "no touch",
  apps: "VScode",
  ssd: 512,
  aboutsytstem: function () {
    console.log("Windows 10 pro Intel Cloren N400 1.10GHz 1.10 GHz 64 bit");
  },

};
console.log(laptop);
laptop.aboutsytstem();
*/
/*
const calc = {
  add: function (a, b) {
    return a + b;
  },
  multipilication: function (a, b) {
    return a * b;
  },
  disrupt: function (a, b) {
    return a / b;
  },
  divorce: function (a, b) {
    return a - b;
  },
};
const result = calc.add(100, 20);
const result1 = calc.multipilication(100, 20);
const result2 = calc.disrupt(100, 20);
const result3 = calc.divorce(100, 20);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);

const car = {
  name: "Ferrari",
  year: 2018,
  color: "Red",
  speed: 650,
  maxspeed: 700,
  zap: 1140,
  produced: "USA",
  accelerartion: 1.3,

  getname: function () {
    console.log(this.name + "  " + this.produced + "  " + this.color);
  },
  getenergy: function () {
    console.log(
      "tezligi" +
        " " +
        this.speed +
        "km " +
        "  " +
        this.maxspeed +
        "  " +
        this.accelerartion +
        "  " +
        this.year
    );
  },
};
console.log(car);
car.getname();
car.getenergy();


let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
let newarr = [];
for (let i = 0; i < arr.length; i++) {
  if (!newarr.includes(arr[i])) {
    newarr.push(arr[i]);
  }
}
console.log(newarr);
*/


