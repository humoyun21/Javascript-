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
