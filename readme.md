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