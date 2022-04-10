const edades = [1, 400, 5, 90,13]
let i = 0;
let max = 0;
while (i < edades.length) {
    if (edades[i] > max) {
        max = edades[i];
    }
    i = i + 1
}
let i2 = 0;
let min = edades[0];
while (i2 < edades.length){
    if (edades[i2] < min){
     min = edades[i2]
    }
    i2++;
}

let i3 = 0;
let count = 0;
while (i3 < edades.length){
    if (edades[i3] % 2 == 1){
     count++;
    }
    i3++;
}
//console.log('El max es' + max + "y el min " + min)
console.log(`El max es ${max} y el min ${min}`)
console.log(`La cantidad impar es ${count}`)