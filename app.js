

let a = 5;

console.log("variable: " + a);

// Arrays
let cars = ["Volvo", "BMW", "Tofas"];
//0.    1.      2.

console.log("car1: " + cars[0]);
console.log("car2: " + cars[1]);
console.log("car3: " + cars[2]);
console.log("car4: " + cars[3]);

let cars2 = new Array("ferrari", "nissan", "toyota");
console.log("cars2: " + cars2[0]);

cars.pop(); // en sondan bir element siler. 2 kere yazarsan sondan 2 element siler.
console.log("cars: " + cars);

cars.push("Tofas"); // en sona bir element ekler.yukarida sildigimizi ekledik.
console.log("cars: " + cars);

cars.shift(); // ilk elementi siler.
console.log("cars: " + cars);

cars.unshift("Volvo"); //ilk elementi ekler.
console.log("cars: " + cars);




cars.pop();
console.log("cars: " + cars.length);

cars.push("Tofas"); // listenin sonuna ekliyoruz

delete cars[2];     // " , " ü silmiyor ,rem de yer kaplamaya devam ediyor.Alttakinden farki bu.
console.log("cars: " + cars.length);




let fruits = ["muz", "elma", "mango", "ananas"];

fruits.sort(); // alfabetik siralar
console.log("sorted: " + fruits);

fruits.reverse(); // var olan siranin tam tersini siralar
console.log("reversed: " + fruits);

let points = [40, 5, 33, 99, 277]; // ilk basamaktaki sayilara göre siralaniyor.
points.sort();
console.log("sorted points: " + points);




const newCars = ["Volvo", "BMW", "Tofas"]; // (const)sabit deger, tekrar tanimlanamaz.Error verir.(let)ve (var)da error vermez tekrar tanimlanabilir
/*newCars = ["Audi","Toyota","Volvo"];*/
newCars.push("Serce");
newCars[0]="z";
console.log("newCars: " + newCars);





// Dates
const d = new Date();
console.log("Current date: " + d);



// iso date type (yyyy-mm-ddthh:mm:ssz)

// t = seperator date and time

/* "Z" harfi, bir tarih ve saat düzeninin UTC (Coordinated Universal Time) olarak kodlandığını gösterir. 
UTC, dünya çapında kullanılan bir tarih ve saat sistemidir ve GMT (Greenwich Mean Time) ile aynıdır. 
Bu nedenle, "Z" harfi "GMT" veya "UTC" olarak da yorumlanabilir.
Örneğin, "2022-07-02T12:00:00Z" tarih ve saat düzeni, 2 Temmuz 2022 tarihinde saat 12:00 olarak kodlanmıştır ve 
bu tarih ve saat, GMT veya UTC zaman diliminde geçerlidir.*/

const newDate = new Date("2022-07-02T12:00:00Z");
console.log("newdate: " + newDate);

// Math
console.log("Math.PI: " + Math.PI);

console.log("Math.round: " + Math.round(4.4));  // yuvarlar

console.log("Math.ceil: " + Math.ceil(4.4));    //kendisinden büyük en kücük tam sayiyi alir

console.log("Math.floor: " + Math.floor(4.8));  //kendisnden kücük en büyük tam sayiyi alir

console.log("Math.pow: " + Math.pow(2,3));      // üs alir (2 üzeri 3)

console.log("Math.sqrt: " + Math.sqrt(4));      //kök alir

console.log("Math.min: " + Math.min(0,150,30,20,-8,-200));  //output -200

console.log("Math.max: " + Math.max(0,150,30,20,-8,-200));  //output 150

console.log("Math.random: " + Math.random());  //0 ile 1 arasi degerleri alir. " 0 " ve " 1 " dahil degil.

console.log("Math.random: " + Math.floor(Math.random() * 10)); // floor deyince tam sayilari alir bir de carpi 10 dersen (0,1,2...9) olan tam sayilari alir." 10 " dahil degil." 0 "dahil

console.log("Math.random: " + Math.floor(Math.random() *12 + 9)); // (9,10,11,12....19,20)


let z = Math.PI;
console.log(z);

let z2 = Math.PI;
console.log(z2.toFixed(2));

let y = 4.4;
let y1 = Math.round(y);
console.log(y1);
















































