
const arreglo = ['Pablo','Facundo',23,34,5]


const longitud = arreglo.length;
console.log('La longitud del arreglo es: ', longitud)
// let i = 0;
// while (i <  longitud){
//  console.log(arreglo[i])
//  i++;
//  }

// for (let i = 0; i < longitud;i++){
//     console.log(arreglo[i])
// }

// for (let i in arreglo){
//     console.log(arreglo[i])
// }

for (let valor of arreglo){
    if (valor == "Facundo"){
       continue;
    }
    console.log(valor)
}

