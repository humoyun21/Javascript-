# JavaScript Boshlang'ich Mavzulari

Bu repositoryda JavaScript dasturlash tilining boshlang'ich konseptlari va mavzulari haqida misollar va o'qituvchi materiallar jamlangan.

## Nima uchun bu repozitoriya?

Bu repozitoriya JavaScript tilini o'rganish uchun boshlang'ich darajadagi dasturlashchilar uchun mo'ljallangan. Bu dasturlar va materiallar, JavaScript asoslarini tushunish, sintaksis, o'zgaruvchilar, funksiyalar, qatorlar va boshqa asosiy mavzularni o'rganishda yordam beradi.

## Mavzular

1. [JavaScriptni O'rganishga Kirish](01_intro/README.md)
   - JavaScript haqida umumiy tushuncha
   - JavaScript fayl strukturasini tushunish

2. [O'zgaruvchilar va Ma'lumot Turlari](02_variables_data_types/README.md)
   - O'zgaruvchilar (let, const, var)
   - Ma'lumot turlari (string, number, boolean)

3. [Operatorlar](03_operators/README.md)
   - Arifmetik operatorlar
   - Murakkab operatorlar (++, --, +=, -=, va h.k.)

4. [Shartlar va Qo'shimcha Amallar](04_conditions_loops/README.md)
   - if, else if, else
   - switch case
   - for, while loop

5. [Funksiyalar](05_functions/README.md)
   - Funksiyalarga kirish
   - Argumetlar va qaytarish
   JavaScript-da o'zgaruvchilar ma'lumotlarni saqlash va boshqarish uchun ishlatiladi. Ular har xil turdagi qiymatlarni, masalan, raqamlar, satrlar, mantiqiy qiymatlar, ob'ektlar va boshqalarni saqlaydigan konteyner vazifasini bajaradi. JavaScript-da o'zgaruvchini qanday e'lon qilishingiz mumkin:

```javascript
let variableName; // Deklaratsiya
```

Siz o'zgaruvchiga qiymatni belgilash operatori (`=`) yordamida belgilashingiz mumkin:

```javascript
variableName = 42; // Topshiriq
```

Shu bilan bir qatorda, siz bitta satrda qiymat e'lon qilishingiz va belgilashingiz mumkin:

```javascript
let variableName = 42; // Deklaratsiya va topshiriq
```

JavaScript shuningdek, “var” va “const” kabi turli xil oʻzgaruvchan kalit soʻzlarni qoʻllab-quvvatlaydi. `var` kalit so`zi funksiya doirasi bilan o`zgaruvchilarni e'lon qilish uchun, `let` va `const` kalit so`zlari esa blok doirasi uchun ishlatiladi.

Shuni ta'kidlash kerakki, JavaScript dinamik ravishda yozilgan tildir, ya'ni siz kodingiz davomida o'zgaruvchining qiymati va turini o'zgartirishingiz mumkin:

```javascript
let greetings = 'Salom!';
salom = 42; // Valid - qiymat va turni o'zgartirish
```

JavaScript o'zgaruvchilari katta-kichik harflarga sezgir, shuning uchun "myVariable" va "myvariable" turli o'zgaruvchilar sifatida ko'rib chiqiladi.

Esda tutingki, “firstName”, “yosh” yoki “isLoggedin” kabi maqsadlarini tavsiflovchi mazmunli oʻzgaruvchilar nomlarini tanlash yaxshi amaliyotdir.

Umid qilamanki, JavaScript o'zgaruvchilari haqidagi ushbu kirish sizga boshlashingizga yordam beradi! Agar sizda qo'shimcha savollar bo'lsa yoki qo'shimcha yordam kerak bo'lsa, bemalol so'rang. Baxtli kodlash!
JavaScript-da siz +, -, * va / kabi oddiy matematik operatorlardan foydalangan holda raqamlar ustida qo'shish, ayirish, ko'paytirish va bo'lish kabi turli xil amallarni bajarishingiz mumkin. Misol uchun, agar siz ikkita raqamni qo'shmoqchi bo'lsangiz, quyidagi koddan foydalanishingiz mumkin:

```javascript
soni 1 = 5 bo'lsin;
soni 2 = 10 bo'lsin;
yig'indisi = son1 + son2;
console.log(sum); // Chiqish: 15
```

JavaScript shuningdek, “Math.sqrt()” funksiyasi yordamida raqamning kvadrat ildizini topish yoki “Math.pow()” funksiyasi yordamida raqamni bir darajaga ko‘tarish kabi murakkabroq matematik operatsiyalarni ham qo‘llab-quvvatlaydi.

avaScriptda for operatori, bir dasturchining ko'p marta bir narsani takrorlashi, shartni tekshirishi va har bir takrorlanishda biror amalni bajarishi uchun ishlatiladi.



///////////////  for /////////////
for operatorining syntaxi quyidagicha:

for (initialization; condition; increment/decrement) {
  // code to be executed
}
for (initialization; condition; increment/decrement) {
  // code to be executed
}
initialization : birinchi takrorlashdan oldin ishga tushirilgan o'zgaruvchilar yoki qiymatlar.
condition : takrorlashning har bir bosqichida tekshiriladigan shart, agar shart rost bo'lsa takrorlanish davom etadi, aks holda takrorlar tugab qoladi.
increment/decrement : har bir takrorlanishda o'zgaruvchining qiymatini o'zgartirish yoki kamaytirish bilan bog'liq qism.
Quyidagi misol for operatorini ishlatishni namoyon qiladi:
for (let i = 0; i < 5; i++) {
  console.log(i);
}
for (let i = 0; i < 5; i++) {
  console.log(i);
}
Bu dastur i ni 0 qiymatidan boshlab 5 dan kichik bo'lguncha takrorlaydi. Har bir takrorlanishda i ni konsolga chiqaradi va i ni 1 ga oshiradi. Natijada, quyidagi ma'lumotlarni konsolga chiqaradi:
0
1
2
3
4
for operatori boshqa turli ko'rinishlarda ham qo'llanilishi mumkin, masalan, bir massivdagi har bir elementni tekshirish va amallarni bajarish uchun yoki N^2 darajadagi yovuz sonlar bilan ishlash uchun.

////////////////////   while     //////////////
JavaScript'da while operatori, belgilangan shart rost bo'lganda takrorlanishni davom ettiradi.

while operatorining syntaxi quyidagicha:

while (condition) {
  // code to be executed
}
condition : takrorlanayotgan har bir takrorlanishda tekshiriladigan shart. Agar shart rost bo'lsa takrorlanish davom etadi, aks holda takrorlar tugab qoladi.
Quyidagi misol, while operatorini ishlatishni namoyon qiladi:

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
Bu dastur i ni 0 qiymatidan boshlab 5 dan kichik bo'lguncha takrorlaydi. Har bir takrorlanishda i ni konsolga chiqaradi va i ni 1 ga oshiradi. Natijada, quyidagi ma'lumotlarni konsolga chiqaradi:

0
1
2
3
4
while operatori for operatoriga o'xshash vazifalarni bajarishda ham qo'llanilishi mumkin. Ularni bir-biridan ajralib ko'rish kerak va ko'plab harakatlar qo'shilishi mumkin.

Bunga bir misol:

let sum = 0;
let i = 1;

while (i <= 100) {
  sum += i;
  i++;
}

console.log(sum); // 5050
Bu dasturda sum o'zgaruvchisiga 1 dan 100 gacha bo'lgan butun sonlar yig'indisini hisoblaydi va natijani konsolga chiqaradi. Natija 5050 bo'ladi. while operatori foydalanuvchiga qo'shimcha shartlarga asosan takrorlarni bajarish imkonini beradi.





////////////// do while /////////////


JavaScript'da while operatori, belgilangan shart rost bo'lganda takrorlanishni davom ettiradi.

while operatorining syntaxi quyidagicha:

while (condition) {
  // code to be executed
}
condition : takrorlanayotgan har bir takrorlanishda tekshiriladigan shart. Agar shart rost bo'lsa takrorlanish davom etadi, aks holda takrorlar tugab qoladi.
Quyidagi misol, while operatorini ishlatishni namoyon qiladi:

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
Bu dastur i ni 0 qiymatidan boshlab 5 dan kichik bo'lguncha takrorlaydi. Har bir takrorlanishda i ni konsolga chiqaradi va i ni 1 ga oshiradi. Natijada, quyidagi ma'lumotlarni konsolga chiqaradi:

0
1
2
3
4
while operatori for operatoriga o'xshash vazifalarni bajarishda ham qo'llanilishi mumkin. Ularni bir-biridan ajralib ko'rish kerak va ko'plab harakatlar qo'shilishi mumkin.

Bunga bir misol:

let sum = 0;
let i = 1;

while (i <= 100) {
  sum += i;
  i++;
}

console.log(sum); // 5050
Bu dasturda sum o'zgaruvchisiga 1 dan 100 gacha bo'lgan butun sonlar yig'indisini hisoblaydi va natijani konsolga chiqaradi. Natija 5050 bo'ladi. while operatori foydalanuvchiga qo'shimcha shartlarga asosan takrorlarni bajarish imkonini beradi.

//////Function ///////////////////



JavaScriptda "function" atamasi yordamida kodni ifodalashning "mavzusi" yozish mumkin. "function" atamasida funksiyani tashkil etadigan JavaScript kodini yozamiz. Biz funksiyani biror amalni bajarish uchun yoki boshqa kodni qayta-qayta ishlatish uchun yozamiz.

Misol uchun, quyidagi JavaScript kodida "mavzu" nomli bir funksiya yozilgan:

function mavzu() {
    console.log("Bu funksiya mavzusi!");
}
Bu funksiya to'g'ridan-to'g'ri konsolga "Bu funksiya mavzusi!" matnini chop etadi.

Funksiyani chaqirish uchun esa funksiya nomini yozib, "()" belgilarini qo'shib, keyincha funksiya chaqirishla xarakterlanadi:

mavzu(); // "Bu funksiya mavzusi!" ni konsolga chop etadi


///// Takrorlash //////

if: if operatori, belgilangan shartning qanoatlantirilishi bilan bir yoki bir nechta ko'dalarni bajarishni ta'minlaydi. Agar berilgan shart to'g'ri bo'lsa, shartni qanoatlantiruvchi ko'dlar ijro etiladi; aks holda, ko'dlar o'tkazilmaydi. if operatori eng ko'p ishlatiladigan shart operatoridir va dasturlashning asosiy qismiga kiradi. Misol uchun:

let x = 10;

if (x > 5) {
  console.log("x 5 dan katta");
} else {
  console.log("x 5 dan kichik yoki teng");
}
loop: Dasturlarning to'rt araliq tsikllarini bajarish imkonini beradi. Araliq tsikllari, biror shartning qanoatlantirilishidan bog'liq ravishda ko'dlar to'plamini takrorlashga imkon beradi. for va while tsikllari eng ko'p o'rganiladigan tsikllardir.

// for tsikli
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while tsikli
let x = 0;
while (x < 5) {
  console.log(x);
  x++;
}
funksiya: JavaScriptda funksiya, biror amallarni bajaruvchi rejalarni ifodalash uchun yaratilgan oddiy rejalardir. Funksiyalar qaytaradigan natijalarni taqdim etish, biror parametrlarni qabul qilish, yangi qiymatlar yaratish, ko'dni qayta ishlatish va ko'p qo'shimcha imkoniyatlarga ega bo'lishlari mumkin. Bunda, funksiya yangi obyekt qaytarish, console.da ma'lumotlar chiqarish, matritsatni ustunlarini yig'ish kabi ko'p ishlar bajarishi mumkin. Misol uchun:

function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // 8

function greet(name) {
  console.log(`Assalomu alaykum, ${name}!`);
}

greet("Diyor"); // Assalomu alaykum, Diyor!




JavaScript-da funksiya, bir qator kodni bitta nom bilan to'plagan qismidir. Funksiya nomidan keyin, tugunlarni () orqali ajratilgan parametrlarni olish uchun argumentlar kiritilishi mumkin. Funksiya ichidagi kod qatorlari {} yordamida ajratiladi.

JavaScript-dagi funksiya turining eng asosiy ikki turi mavjud:

Tavsifi yo'q funksiya (Секцияona): Bu turdagi funksiyalar parametr qabul qilmasa ham, boshqacha bitta amalni bajaradi va biron bir qiymat qaytarmaydi. Odatda, bu tur funksiyalar void funksiyalari deb ham ataladi. Quyidagi misol tavsifi yo'q funksiyaning bir misoli:

function greetings() {
  console.log("Salom!");
}

greetings(); // "Salom!" chiqadi
Qiymat qaytaruvchi funksiya: Bu turdagi funksiyalar, biror amalni bajarib, uni qaytamay va uni boshqa o'zgaruvchiga o'zlashtirish uchun qiymat qaytaradigan funksiyalardir. Bu amal qaytayotgan qiymat, return operatori orqali belgilanadi. Quyidagi misol qiymat qaytaruvchi funksiyaning bir misoli:

function sum(a, b) {
  return a + b;
}

let result = sum(3, 4); 
console.log(result); // 7 chiqadi
JavaScript-da funksiyalarga nom berish zarur emas. Uni o'zgaruvchiga tenglashtirish orqali saqlashingiz ham mumkin:

let square = function(x) {
  return x * x;
};

let result = square(5);
console.log(result); // 25 chiqadi
JavaScript-da funksiyalarni boshqa funksiyalar ichida yaratish, funksiya nomini olib kelish, tushunmas (callback) sifatida uzatish va boshqa ko'plab asosiy amallarni bajarish uchun qo'llanishidagi ko'plab imkoniyatlardan faqat ayriy maqsadlari uchun foydalanish mumkin.


Javascript tilida, arraylar elementlarni bir joyga joylashtirilgan ma'lumotlar to'plami sifatida ishlatiladi. Arraylarni aniqlash uchun [] qavs ichida elementlarni ifodalash kerak. Har bir element vergul bilan ajratiladi.

Masalan:

css
Copy code
var cars = ["BMW", "Toyota", "Honda", "Mercedes"];
Bu yerda cars nomli arrayda 4 ta element mavjud: "BMW", "Toyota", "Honda" va "Mercedes".

Array elementlari indekslar orqali chaqiriladi. Indekslar noldan boshlanadi. Ya'ni, birinchi elementni chaqirish uchun indeks 0, ikkinchi elementni chaqirish uchun indeks 1 va hokazo.

javascript
Copy code
console.log(cars[0]); // "BMW"
console.log(cars[2]); // "Honda"
Arraydagi elementlar ustida amallar bajarish uchun ko'p mashhur metodlar mavjud. Ba'zilari quyidagilardir:

length: Arraydagi elementlar sonini qaytaradi.
push(): Elementni arrayning oxiriga qo'shadi.
pop(): Arrayning oxiridagi elementni olib tashlaydi.
shift(): Arrayning boshidagi elementni olib tashlaydi.
unshift(): Elementni arrayning boshiga qo'shadi.
lua
Copy code
console.log(cars.length); // 4

cars.push("Audi");
console.log(cars); // ["BMW", "Toyota", "Honda", "Mercedes", "Audi"]

cars.pop();
console.log(cars); // ["BMW", "Toyota", "Honda", "Mercedes"]

cars.shift();
console.log(cars); // ["Toyota", "Honda", "Mercedes"]

cars.unshift("Ford");
console.log(cars); // ["Ford", "Toyota", "Honda", "Mercedes"]
Shuningdek, array elementlari ustida turli amallar bajarish mumkin: elementlar bir-biriga qo'shish, kesishish, o'chirish va boshqa operatsiyalar uchun ko'rinishlar mavjud.




//////// Object /////////////

JavaScript-da ob'ektlar ma'lumotlar strukturasini ifodalash uchun ishlatiladigan ma'lumotlar turidir. Ob'ektlar kalit-qiymat juftliklari bilan bog'langan xususiyatlarga ega bo'lishi mumkin.

Ob'ektlar {} jingalak qavslar orasida yaratiladi va xususiyatlar qo'sh tirnoq yoki bitta tirnoq ichida ko'rsatiladi. Xususiyatlar kalit va qiymat juftlari sifatida tanilgan. Mana bir misol:

odam = {
   ism: "Jon", // nom atributi
   yosh: 30, // yosh atributi
   shahar: "Nyu-York" // shahar atributi
};
Ushbu misolda biz shaxs nomli ob'ektni yaratdik. Ob'ekt uchta xususiyatga ega (ism , yosh va shahar ) va har bir xususiyat aniqlangandan keyin vergul bilan ajratiladi.

Ob'ekt xususiyatlariga kirish uchun nuqta (. ) yoki kvadrat qavs ([] ) belgilaridan foydalanishimiz mumkin. Mana bir misol:

console.log(shaxs.ism); // chiqish: "Jon"
console.log(shaxs["yosh"]); // chiqish: 30
Xususiyatlarga person.name kabi nuqta belgisi yoki person["age"] kabi kvadrat qavs belgisi yordamida kirishimiz mumkin.

Ob'ekt xususiyatlarini yangilash yoki yangi xususiyatlarni qo'shish ham mumkin:

kishi.yosh = 35; // yosh atributini yangilash
person.city = "London"; // shahar mulkini yangilash
person.job = "Tuzuvchi"; // ish xususiyatini qo'shing
Biz birinchi misollarda aniqlangan shaxs ob'ektining yoshi va shahar ma'lumotlarini yangiladik, shuningdek, yangi ish xususiyatini qo'shdik.

Ob'ekt usullarini ham aniqlash mumkin. Usul ob'ektning funktsiyaga aylanishi xususiyatiga ishora qiladi. Mana bir misol:

odam = {
   ism: "Jon",
   Yosh: 30,
   shahar: "Nyu-York",
   salomlashing: function() {
     console.log("Salom, men " + this.name + "!");
   }
};

odam.salom(); // chiqish: "Salom, men Jonman!"
Ushbu misolda biz salomlash deb nomlangan usulni aniqladik, u "Salom, men " + this.name + "!" xabarni chop etadi.

JavaScript ob'ektlari ma'lumotlar tuzilmalarini ifodalash va ularni yanada murakkab tizimlar yoki ilovalar yaratish uchun funktsiyalar bilan birlashtirish uchun foydalidir. Ob'ektlar ma'lumotlarni manipulyatsiya qilish, ob'ektga yo'naltirilgan dasturlash, JSON (JavaScript Object Notation) bilan ishlov berish va boshqalar uchun keng qo'llaniladigan konstruktsiyadir.




////////////////////////

JavaScript obyektlar dasturlash tili bo'lib, bu tilda obyektlar yaratish, ularning xususiyatlari va metodlariga murojaat qilish va ulardan foydalanish mumkin. JavaScript obyektlari, o'zlariga oid malumotlarni saqlash va boshqarish uchun ishlatiladi.

Obyektlar, kalit so'ziga ega bo'lgan bir yoki bir nechta xususiyatlar va funksiyalardan iborat turli ob'ektlar, masalan, shaxslar, an'anaviy formulalar, elementlar va hokazo bo'lishi mumkin. Bu xususiyat va funksiyalarning har biri obyektlarga oid bilimlarni olib bormoqchi bo'lgani natijasida, kodni biriktirish va boshqarish muhim daraja oshmoqda.

Obyektlar JavaScriptda keyingi sintaksis yordamida yaratiladi:

var obyekt = {
xususiyat1: qiymat1,
xususiyat2: qiymat2,
// Qo'shimcha xususiyatlarga o'zgarishli murojaat qilish mumkin
xususiyat3: qiymat3,
funksiya1: function() {
// Funksiyadan foydalanish
},
funksiya2: function() {
// Funksiyadan foydalanish
}
};

Bu sintaksisda obyektning xususiyatlari (key) va ularning qiymatlari yuqorida keltirilgan. Xususiyatlarga oliy formatda num, harf, _ va $ belgilari qo'shish mumkin. Obyektning xususiyatlariga unikal kalitlar deyiladi, ya'ni bir xususiyat bir nechta marta tanlash mumkin emas.

Obyektning xususiyatlariga murojaat qilish uchun qisqa sintaksisidan foydalanish mumkin:

console.log(obyekt.xususiyat1); // qiymat1

Obyektning funksiyalariga murojaat qilish uchun ham shu sintaksisdan foydalanish mumkin:

obyekt.funksiya1(); // Funksiyadan foydalanish

JavaScript obyektlari turli ma'lumotlarni bitta joyda birlashtirish va ularga qo'shimcha funktsionallik berishga imkoniyat beradi. Ushbu tushuncha yordamida JavaScriptda obyekt orqali turli vazifalar bajarish mumkin.













A function in JavaScript is a block of code that is designed to perform a specific task. It is defined using the function keyword, followed by a name (optional), a list of parameters (optional), and a block of code enclosed in curly braces {}.

Here is an example of a basic function in JavaScript:

javascript
Copy code
function sayHello() {
  console.log("Hello!");
}
In the above example, sayHello is the name of the function. It does not accept any parameters. The code block inside the function is console.log("Hello!");, which simply logs the string "Hello!" to the console.

Functions can also accept parameters, which allow you to pass values into the function for it to use. Here's an example:

javascript
Copy code
function greet(name) {
  console.log("Hello, " + name + "!");
}
In the above example, the greet function accepts one parameter called name. It concatenates the value of name with the string "Hello, " and logs it to the console.

To call (or invoke) a function, you simply use the function's name followed by parentheses, optionally passing in any required arguments. Here's an example:

scss
Copy code
sayHello(); // Output: Hello!

greet("John"); // Output: Hello, John!
In the first example, sayHello() is called without any arguments, while in the second example, greet("John") is called with the value "John" as the argument



In JavaScript, an array is a variable that can hold multiple values. It is a data structure that allows you to store and access multiple values using a single variable name.

Here is an example of how to create an array in JavaScript:

javascript
Copy code
let fruits = ["apple", "banana", "orange"];
In this example, the variable fruits is an array that contains three elements: "apple", "banana", and "orange". The elements are enclosed in square brackets [] and are separated by commas.

You can access individual elements in the array by their index. The index of the first element is 0, the second element is 1, and so on. Here's an example of how to access elements in an array:

css
Copy code
console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "banana"
console.log(fruits[2]); // Output: "orange"
You can also change the value of an element in an array by assigning a new value to its index. Here's an example:

lua
Copy code
fruits[1] = "grape";
console.log(fruits); // Output: ["apple", "grape", "orange"]
Arrays in JavaScript can contain elements of different data types, such as numbers, strings, or even other arrays. You can add elements to the end of an array using the push() method and remove elements from the end using the pop() method.

scss
Copy code
let numbers = [1, 2, 3];

numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]

numbers.pop();
console.log(numbers); // Output: [1, 2, 3]
You can also get the length of an array using the length property:

javascript
Copy code
console.log(fruits.length); // Output: 3
Arrays in JavaScript are very versatile and can be used in a variety of ways to store and manipulate data.


In JavaScript, objects are dynamic data structures used to store and organize data. They consist of key-value pairs, where each key is a unique identifier and each value can be any data type (such as strings, numbers, arrays, or even other objects).

Objects can be defined using the object literal notation, which uses curly brackets {} to enclose the key-value pairs:

css
Copy code
var person = { name: "John", age: 25 };
You can also create objects using the object constructor syntax:

javascript
Copy code
var person = new Object();
person.name = "John";
person.age = 25;
Objects have properties and methods. Properties are the values associated with the object's keys, while methods are functions defined within the object.

Accessing object properties can be done using dot notation or square brackets notation:

less
Copy code
var name = person.name; // using dot notation
var age = person["age"]; // using square brackets notation
Methods are accessed and executed using the dot notation:

javascript
Copy code
person.sayHello = function() {
   console.log("Hello, my name is " + this.name);
};
person.sayHello(); // Output: Hello, my name is John
Objects can be used to model real-world entities, such as a person with their name and age, or more complex structures like a car with properties like make, model, and year.

They are also commonly used in JavaScript to represent data structures like arrays and linked lists, as well as to encapsulate related functions and shared data within modules.






////////////////Dom/////////////
JavaScript DOM Manipulation

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree-like model, where each node in the tree represents an element or a piece of content in the document.

JavaScript can be used to interact with the DOM and manipulate the content, structure, and styling of a web page. Here are some common DOM manipulation tasks using JavaScript:

Accessing Elements:

document.getElementById(id) : Retrieves an element with the specified id .
document.querySelector(selector) : Retrieves the first element that matches the specified CSS selector.
Modifying HTML Content:

element.innerHTML : Gets or sets the HTML content of an element.
element.textContent : Gets or sets the text content of an element (ignores HTML tags).
Modifying Attributes:

element.getAttribute(name) : Retrieves the value of the specified attribute.
element.setAttribute(name, value) : Sets the value of the specified attribute.
Modifying CSS:

element.style.property = value : Sets the value of a CSS property for an element.
Creating and Appending Elements:

document.createElement(tagName) : Creates a new element with the specified tag name.
parentElement.appendChild(newElement) : Appends a new child element to a parent element.
Event Handling:

element.addEventListener(eventName, handler) : Attaches an event listener to an element.
Here's an example that demonstrates some of these concepts:

// Access the element with id "myElement"
let myElement = document.getElementById("myElement");

// Modify the HTML content
myElement.innerHTML = "<em>Hello</em>, World!";

// Modify an attribute
myElement.setAttribute("class", "highlight");

// Modify the style
myElement.style.color = "blue";

// Create a new element
let newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph.";

// Append the new element to the body
document.body.appendChild(newElement);

// Event handling
myElement.addEventListener("click", function() {
  alert("Element clicked!");
});
In this example, we first access an element with the id "myElement" using document.getElementById() . We then modify its HTML content using innerHTML , add a CSS class using setAttribute() , and change the color using style .

Next, we create a new p element using createElement() , set its text content, and append it to the body using appendChild() .

Finally, we attach an event listener to the myElement using addEventListener() to show an alert when the element is clicked.

DOM manipulation allows you to dynamically modify and interact with the content of a web page, providing powerful capabilities for building interactive web applications.





vJavaScript-da DOM (Hujjat ob'ekt modeli) - bu HTML hujjatini ob'ektlarning tuzilgan daraxti sifatida ifodalovchi dasturlash interfeysi. Bu sizga HTML elementlari va ularning xossalari bilan veb-sahifada ishlash va ularni boshqarish imkonini beradi.

JavaScript-da DOM bilan bog'liq ba'zi muhim tushunchalar:

Hujjat ob'ekti: HTML hujjatini ifodalovchi yuqori darajadagi ob'ekt. Hujjatni manipulyatsiya qilishning turli xususiyatlari va usullariga kirishni ta'minlaydi.

Elementlar: <div>, <p>, <h1> va boshqalar kabi HTML elementlari DOMda ob'ektlar sifatida taqdim etiladi. Siz JavaScript-dan foydalanib, ularga kirishingiz, o'zgartirishingiz yoki yangi elementlar yaratishingiz mumkin.

Xususiyatlar: DOMdagi har bir element id, classList, innerHTML va boshqalar kabi atributlarini ifodalovchi xususiyatlarga ega. Elementni boshqarish uchun ushbu xususiyatlarga kirishingiz yoki o'zgartirishingiz mumkin.

Usullar: DOM getElementById, querySelector, createElement, appendChild va boshqalar kabi elementlarni manipulyatsiya qilishning turli usullarini taqdim etadi. Bu usullar elementlarni tanlash, yangi elementlar yaratish, mavjud elementlarni o‘zgartirish yoki hujjatga elementlar qo‘shish imkonini beradi.

Voqealar: DOM foydalanuvchi harakatlariga (masalan, bosish, tugmachalarni bosish va h.k.) yoki boshqa hodisalarga (sahifa yuklanishi yoki yuborilayotgan shakl) javob berishga imkon beruvchi hodisalarni boshqarishni qoʻllab-quvvatlaydi. Muayyan hodisa yuz berganda JavaScript kodini bajarish uchun hodisalar tinglovchilarini elementlarga biriktirishingiz mumkin.

JavaScript-da DOM yordamida elementga kirish va uning xususiyatlarini o'zgartirishni ko'rsatadigan misol kod parchasi:

javascript
Kodni nusxalash
// Elementga ID orqali kirish
const myElement = document.getElementById('myElementId');

// Elementning innerHTML xususiyatini o'zgartirish
myElement.innerHTML = 'Yangi tarkib';

// Yangi element yaratish
const newElement = document.createElement('div');
newElement.textContent = 'Salom, dunyo!';

// Hujjatga yangi element qo'shish
document.body.appendChild(newElement);
Umuman olganda, JavaScript-dagi DOM veb-sahifadagi HTML elementlarini manipulyatsiya qilish va ular bilan ishlash uchun kuchli vositalar to'plamini taqdim etadi.