// 1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA');
var count = 1;
while(count <= 20) {
    if(count % 2 == 0) {
        console.log(count + ' - ' + 'I love coding');
    }
    count++;
}

console.log('LOOPING KEDUA');
var count = 20;
while(count > 0) {
    if(count % 2 == 0) {
        console.log(count + ' - ' + 'I will become fullstack developer');
    }
    count--;
}

// 2. Melakukan Looping Menggunakan For
var count = 20;

console.log('LOOPING PERTAMA');
for (i = 1; i <= count; i++) {
    console.log(i + ' - ' + 'I love coding');
}

console.log('LOOPING KEDUA');
for (i = count; i > 0; i--) {
    console.log(i + ' - ' + 'I will become fullstack developer');
}

// 3. Angka Ganjil dan Genap
var count = 100;
for (i = 1; i <= count; i++) {
    if(i % 2 == 0) {
        console.log("GENAP");
    } else if(i % 2 == 1) {
        console.log("GANJIL");
    }
}

for (i = 1; i <= count; i+=2) {
    if(i % 3 == 0) {
        console.log(i + " KELIPATAN 3");
    } else {
        console.log("\"\"")
    }
}

for (i = 1; i <= count; i+=5) {
    if(i % 6 == 0) {
        console.log(i + " KELIPATAN 6");
    } else {
        console.log("\"\"")
    }
}

for (i = 1; i <= count; i+=9) {
    if(i % 10 == 0) {
        console.log(i + " KELIPATAN 10");
    } else {
        console.log("\"\"")
    }
}